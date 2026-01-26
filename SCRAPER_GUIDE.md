# Documentation Scraper Guide

A reusable pattern for scraping documentation sites and converting them to markdown for local reference.

## Overview

This guide documents our approach to scraping documentation websites for offline/local reference. The scrapers:
- Discover all documentation URLs (sitemap + crawling)
- Convert HTML to clean markdown
- Preserve folder structure
- Run via GitHub Actions (free for our use)

## Quick Start

### Running Existing Scrapers

**Option 1: GitHub Actions (Recommended)**
1. Go to https://github.com/oscarcandoit/support-docs/actions
2. Select the scraper workflow (e.g., "Scrape Remotion Documentation")
3. Click "Run workflow"
4. Wait for completion (~5-10 minutes)
5. Changes auto-commit to the repo

**Option 2: Run Locally**
```bash
cd /Users/apage/support-docs
pip3 install requests beautifulsoup4 html2text
python3 scrape_remotion_docs.py
```

## Creating a New Scraper

### Step 1: Copy the Template

```bash
cp scrape_remotion_docs.py scrape_SITENAME_docs.py
```

### Step 2: Update Configuration

Edit the new file and change these values:

```python
# Configuration
BASE_URL = "https://example.com"           # Main site URL
DOCS_URL = "https://example.com/docs"      # Docs starting point
SITEMAP_URL = "https://example.com/sitemap.xml"  # Sitemap location

# Output location (relative to script)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.environ.get('OUTPUT_DIR', os.path.join(SCRIPT_DIR, "api/SITENAME"))
```

### Step 3: Customize URL Filtering

Update the `is_docs_url()` function to match the site's URL structure:

```python
def is_docs_url(url):
    parsed = urlparse(url)

    # Must be on the correct domain
    if parsed.netloc not in ['example.com', 'www.example.com']:
        return False

    # Must be under /docs/ (adjust as needed)
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
```

### Step 4: Customize Content Extraction (If Needed)

If the site has unusual HTML structure, update `extract_main_content()`:

```python
def extract_main_content(soup):
    # Try common documentation selectors
    for selector in ['article', 'main', '.markdown', '.docs-content', '[class*="docMainContainer"]']:
        main_content = soup.select_one(selector)
        if main_content:
            break

    if not main_content:
        main_content = soup.body

    return main_content
```

### Step 5: Add Known Section URLs (Optional)

For better coverage, add known section URLs in `discover_urls_from_api_page()`:

```python
api_pages = [
    f"{BASE_URL}/docs/getting-started",
    f"{BASE_URL}/docs/api",
    f"{BASE_URL}/docs/guides",
    # Add more sections...
]
```

### Step 6: Test Locally

```bash
python3 scrape_SITENAME_docs.py
```

Check the output in `api/SITENAME/` for quality.

### Step 7: Create GitHub Action

Create `.github/workflows/scrape-SITENAME-docs.yml`:

```yaml
name: Scrape SITENAME Documentation

on:
  workflow_dispatch:  # Manual trigger
  # schedule:
  #   - cron: '0 0 * * 0'  # Weekly on Sundays (optional)

jobs:
  scrape:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Install dependencies
        run: pip install requests beautifulsoup4 html2text

      - name: Run scraper
        run: python scrape_SITENAME_docs.py
        timeout-minutes: 30

      - name: Commit changes
        run: |
          git config user.name "GitHub Actions Bot"
          git config user.email "actions@github.com"
          git add api/SITENAME/ scrape_SITENAME_docs.py
          if ! git diff --staged --quiet; then
            git commit -m "Update SITENAME documentation (automated)"
            git push
          fi
```

## Existing Scrapers

| Site | Script | Output | GitHub Action |
|------|--------|--------|---------------|
| Remotion | `scrape_remotion_docs.py` | `api/remotion/` | `scrape-remotion-docs.yml` |

## Architecture

```
support-docs/
├── .github/workflows/
│   └── scrape-remotion-docs.yml    # GitHub Actions workflows
├── api/
│   └── remotion/                    # Scraped documentation
│       ├── _discovered_urls.json    # URL cache for reference
│       ├── index.md
│       ├── lambda/
│       │   ├── setup.md
│       │   └── ...
│       └── ...
├── scrape_remotion_docs.py          # Scraper script
└── SCRAPER_GUIDE.md                 # This file
```

## Two-Phase Scraping Approach

Our scrapers use a two-phase approach for thorough coverage:

### Phase 1: URL Discovery
1. **Sitemap parsing** - Extract URLs from sitemap.xml
2. **API page scanning** - Check known section landing pages
3. **Crawl navigation** - Follow links from the main docs page

### Phase 2: Content Scraping
1. Request each discovered URL
2. Extract main content (remove nav, sidebar, footer)
3. Convert HTML to markdown
4. Save with proper folder structure

## Best Practices

### Be Nice to Servers
```python
DELAY_BETWEEN_REQUESTS = 0.3  # 300ms between requests
```

### Handle Errors Gracefully
The scraper continues even if individual pages fail, logging errors for review.

### Preserve Source URLs
Each markdown file includes a comment with the source URL:
```markdown
<!-- Source: https://remotion.dev/docs/interpolate -->
```

### Use Relative Paths
Scripts detect their location and use relative paths, working both locally and in CI:
```python
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "api/remotion")
```

## Troubleshooting

### Common Issues

**403 Forbidden errors**
- Some sites block scrapers. Try adding a realistic User-Agent header.

**Missing pages**
- Add more seed URLs to `discover_urls_from_api_page()`
- Check if the site uses JavaScript rendering (may need Playwright/Selenium)

**Poor markdown quality**
- Adjust `extract_main_content()` selectors
- Add more elements to remove in the cleanup step

**GitHub push blocked (secrets detected)**
- Documentation examples may contain fake API keys
- Use GitHub's "allow secret" feature for false positives
- Or sanitize the content before committing

### Debug Mode

Add verbose logging:
```python
import logging
logging.basicConfig(level=logging.DEBUG)
```

## Scaling Notes (Future Reference)

If this becomes a paid service, consider:

1. **Infrastructure**
   - Move to dedicated server or cloud functions
   - Use a queue system (Redis/SQS) for job management
   - Store results in cloud storage (S3)

2. **Performance**
   - Async requests with `aiohttp`
   - Parallel processing with worker pools
   - Incremental updates (check last-modified headers)

3. **Monetization Options**
   - Per-scrape pricing
   - Subscription for scheduled updates
   - API access to scraped content

4. **Legal Considerations**
   - Review terms of service for each site
   - Consider robots.txt compliance
   - May need explicit permission for commercial use

---

## Dependencies

```
requests>=2.28.0
beautifulsoup4>=4.11.0
html2text>=2020.1.16
```

Install with:
```bash
pip3 install requests beautifulsoup4 html2text
```

---

Last Updated: January 26, 2026
