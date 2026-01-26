#!/usr/bin/env python3
"""
Remotion Documentation Scraper - Two-Phase Approach
Phase 1: Discover all URLs from sitemap, navigation, and crawling
Phase 2: Scrape all discovered pages to markdown
"""

import os
import re
import time
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import deque
import html2text
from xml.etree import ElementTree

# Configuration
BASE_URL = "https://www.remotion.dev"
DOCS_URL = "https://www.remotion.dev/docs"
SITEMAP_URL = "https://www.remotion.dev/sitemap.xml"

# Detect if running in CI or locally
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.environ.get('OUTPUT_DIR', os.path.join(SCRIPT_DIR, "api/remotion"))
URL_CACHE_FILE = os.path.join(OUTPUT_DIR, "_discovered_urls.json")

DELAY_BETWEEN_REQUESTS = 0.3  # Be nice to their servers

# HTML to Markdown converter
h2t = html2text.HTML2Text()
h2t.ignore_links = False
h2t.ignore_images = False
h2t.body_width = 0  # Don't wrap lines
h2t.ignore_emphasis = False


def is_docs_url(url):
    """Check if URL is a documentation page we should scrape."""
    parsed = urlparse(url)

    # Must be on remotion.dev
    if parsed.netloc not in ['remotion.dev', 'www.remotion.dev']:
        return False

    # Must be under /docs/
    if not parsed.path.startswith('/docs'):
        return False

    # Skip certain patterns
    skip_patterns = [
        '/docs/search',
        '.png', '.jpg', '.gif', '.svg',
        '.mp4', '.webm', '.pdf',
    ]

    for pattern in skip_patterns:
        if pattern in url.lower():
            return False

    return True


def clean_url(url):
    """Normalize and clean a URL."""
    # Remove fragments
    url = url.split('#')[0]
    # Remove trailing slash for consistency
    url = url.rstrip('/')
    # Ensure www prefix for consistency
    url = url.replace('://remotion.dev', '://www.remotion.dev')
    return url


def discover_urls_from_sitemap():
    """Extract documentation URLs from sitemap.xml."""
    urls = set()

    print("  Checking sitemap.xml...")
    try:
        response = requests.get(SITEMAP_URL, timeout=30)
        response.raise_for_status()

        # Parse XML
        root = ElementTree.fromstring(response.content)

        # Handle namespace
        ns = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}

        for url_elem in root.findall('.//ns:url/ns:loc', ns):
            url = clean_url(url_elem.text)
            if is_docs_url(url):
                urls.add(url)

        # Also check for sitemap index
        for sitemap_elem in root.findall('.//ns:sitemap/ns:loc', ns):
            sitemap_url = sitemap_elem.text
            if 'docs' in sitemap_url.lower() or sitemap_url == SITEMAP_URL:
                continue
            try:
                sub_response = requests.get(sitemap_url, timeout=30)
                sub_root = ElementTree.fromstring(sub_response.content)
                for url_elem in sub_root.findall('.//ns:url/ns:loc', ns):
                    url = clean_url(url_elem.text)
                    if is_docs_url(url):
                        urls.add(url)
            except:
                pass

        print(f"    Found {len(urls)} docs URLs in sitemap")
    except Exception as e:
        print(f"    Sitemap error: {e}")

    return urls


def discover_urls_from_navigation(start_url):
    """Crawl documentation pages to find all linked docs URLs."""
    urls = set()
    visited = set()
    to_visit = deque([start_url])

    print("  Crawling documentation for links...")

    while to_visit and len(visited) < 500:  # Safety limit
        url = to_visit.popleft()
        url = clean_url(url)

        if url in visited:
            continue

        visited.add(url)

        try:
            response = requests.get(url, timeout=30, headers={
                'User-Agent': 'Mozilla/5.0 (Documentation Scraper for local reference)'
            })

            if response.status_code != 200:
                continue

            soup = BeautifulSoup(response.text, 'html.parser')

            # Find all links
            for link in soup.find_all('a', href=True):
                href = link['href']
                full_url = clean_url(urljoin(url, href))

                if is_docs_url(full_url) and full_url not in visited:
                    urls.add(full_url)
                    to_visit.append(full_url)

            # Show progress
            if len(visited) % 10 == 0:
                print(f"    Visited {len(visited)} pages, found {len(urls)} unique URLs...")

            time.sleep(DELAY_BETWEEN_REQUESTS)

        except Exception as e:
            continue

    print(f"    Found {len(urls)} total URLs from crawling")
    return urls


def discover_urls_from_api_page():
    """Extract all API reference links which often list many pages."""
    urls = set()

    api_pages = [
        f"{BASE_URL}/docs/api",
        f"{BASE_URL}/docs/lambda",
        f"{BASE_URL}/docs/player",
        f"{BASE_URL}/docs/renderer",
        f"{BASE_URL}/docs/cloudrun",
        f"{BASE_URL}/docs/gif",
        f"{BASE_URL}/docs/motion-blur",
        f"{BASE_URL}/docs/shapes",
        f"{BASE_URL}/docs/paths",
        f"{BASE_URL}/docs/noise",
        f"{BASE_URL}/docs/skia",
        f"{BASE_URL}/docs/three",
        f"{BASE_URL}/docs/lottie",
        f"{BASE_URL}/docs/rive",
        f"{BASE_URL}/docs/google-fonts",
        f"{BASE_URL}/docs/zod-types",
    ]

    print("  Checking known API pages...")
    for api_url in api_pages:
        try:
            response = requests.get(api_url, timeout=30, headers={
                'User-Agent': 'Mozilla/5.0 (Documentation Scraper for local reference)'
            })

            if response.status_code != 200:
                continue

            soup = BeautifulSoup(response.text, 'html.parser')

            for link in soup.find_all('a', href=True):
                href = link['href']
                full_url = clean_url(urljoin(api_url, href))

                if is_docs_url(full_url):
                    urls.add(full_url)

            time.sleep(DELAY_BETWEEN_REQUESTS)
        except:
            continue

    print(f"    Found {len(urls)} URLs from API pages")
    return urls


def phase1_discover_urls():
    """Phase 1: Discover all documentation URLs."""
    print("=" * 60)
    print("PHASE 1: URL Discovery")
    print("=" * 60)

    all_urls = set()

    # Method 1: Sitemap
    sitemap_urls = discover_urls_from_sitemap()
    all_urls.update(sitemap_urls)

    # Method 2: API pages
    api_urls = discover_urls_from_api_page()
    all_urls.update(api_urls)

    # Method 3: Crawl from main docs page
    crawl_urls = discover_urls_from_navigation(DOCS_URL)
    all_urls.update(crawl_urls)

    # Sort URLs for consistent ordering
    sorted_urls = sorted(all_urls)

    print()
    print(f"Total unique documentation URLs discovered: {len(sorted_urls)}")

    # Save URL list for reference
    os.makedirs(os.path.dirname(URL_CACHE_FILE), exist_ok=True)
    with open(URL_CACHE_FILE, 'w') as f:
        json.dump({
            'discovered_at': time.strftime('%Y-%m-%d %H:%M:%S'),
            'total_urls': len(sorted_urls),
            'urls': sorted_urls
        }, f, indent=2)

    print(f"URL list saved to: {URL_CACHE_FILE}")

    return sorted_urls


def clean_filename(url):
    """Convert URL to a clean filename."""
    parsed = urlparse(url)
    path = parsed.path.strip('/')

    if not path or path == 'docs':
        return 'index.md'

    # Remove 'docs/' prefix if present
    if path.startswith('docs/'):
        path = path[5:]

    # Add .md extension
    if not path.endswith('.md'):
        path = path + '.md'

    return path


def extract_main_content(soup):
    """Extract the main documentation content from the page."""
    main_content = None

    # Remotion uses article or main tags
    for selector in ['article', 'main', '.markdown', '[class*="docMainContainer"]', '[class*="docItemContainer"]']:
        main_content = soup.select_one(selector)
        if main_content:
            break

    if not main_content:
        main_content = soup.body

    return main_content


def extract_title(soup):
    """Extract the page title."""
    h1 = soup.find('h1')
    if h1:
        return h1.get_text(strip=True)

    title = soup.find('title')
    if title:
        text = title.get_text(strip=True)
        return re.sub(r'\s*\|\s*Remotion.*$', '', text)

    return "Untitled"


def clean_markdown(content):
    """Clean up the markdown content."""
    # Remove excessive newlines
    content = re.sub(r'\n{4,}', '\n\n\n', content)

    # Remove empty links
    content = re.sub(r'\[\]\([^)]*\)', '', content)

    # Fix broken headers
    content = re.sub(r'^(#+)([^\s#])', r'\1 \2', content, flags=re.MULTILINE)

    return content.strip()


def scrape_page(url):
    """Scrape a single documentation page."""
    try:
        headers = {
            'Accept': 'text/markdown, text/html',
            'User-Agent': 'Mozilla/5.0 (Documentation Scraper for local reference)'
        }

        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()

        content_type = response.headers.get('content-type', '')

        if 'text/markdown' in content_type:
            markdown_content = response.text
            title = url.split('/')[-1].replace('-', ' ').title()
        else:
            soup = BeautifulSoup(response.text, 'html.parser')
            title = extract_title(soup)
            main_content = extract_main_content(soup)

            if main_content:
                # Remove navigation, sidebars, etc.
                for selector in ['nav', 'aside', 'footer', 'header', '.navbar', '.sidebar', '.pagination', '.edit-page-link', '.theme-doc-footer']:
                    for elem in main_content.select(selector):
                        elem.decompose()

                markdown_content = h2t.handle(str(main_content))
            else:
                markdown_content = h2t.handle(response.text)

        # Clean up
        markdown_content = clean_markdown(markdown_content)

        # Add title header if not present
        if not markdown_content.strip().startswith('# '):
            markdown_content = f"# {title}\n\n{markdown_content}"

        # Add source URL
        markdown_content = f"<!-- Source: {url} -->\n\n{markdown_content}"

        return markdown_content

    except Exception as e:
        return None


def phase2_scrape_pages(urls):
    """Phase 2: Scrape all discovered URLs."""
    print()
    print("=" * 60)
    print("PHASE 2: Scraping Pages")
    print("=" * 60)
    print(f"Total pages to scrape: {len(urls)}")
    print()

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    scraped = 0
    errors = 0

    for i, url in enumerate(urls, 1):
        filename = clean_filename(url)
        filepath = os.path.join(OUTPUT_DIR, filename)

        # Show progress
        progress = f"[{i}/{len(urls)}]"
        print(f"{progress} Scraping: {url}")

        content = scrape_page(url)

        if content:
            # Create directory if needed
            os.makedirs(os.path.dirname(filepath), exist_ok=True)

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)

            print(f"         Saved: {filename}")
            scraped += 1
        else:
            print(f"         ERROR: Failed to scrape")
            errors += 1

        time.sleep(DELAY_BETWEEN_REQUESTS)

    return scraped, errors


def main():
    """Main function - runs both phases."""
    print()
    print("╔" + "═" * 58 + "╗")
    print("║" + "  Remotion Documentation Scraper (Two-Phase)".center(58) + "║")
    print("╚" + "═" * 58 + "╝")
    print()
    print(f"Output directory: {OUTPUT_DIR}")
    print()

    # Phase 1: Discover all URLs
    urls = phase1_discover_urls()

    if not urls:
        print("ERROR: No URLs discovered!")
        return

    # Phase 2: Scrape all pages
    scraped, errors = phase2_scrape_pages(urls)

    # Summary
    print()
    print("=" * 60)
    print("SCRAPING COMPLETE!")
    print("=" * 60)
    print(f"  URLs discovered:  {len(urls)}")
    print(f"  Pages scraped:    {scraped}")
    print(f"  Errors:           {errors}")
    print(f"  Output directory: {OUTPUT_DIR}")
    print(f"  URL cache:        {URL_CACHE_FILE}")
    print("=" * 60)


if __name__ == '__main__':
    main()
