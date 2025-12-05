#!/usr/bin/env node

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// List of URLs to scrape
const urls = [
  'https://developer.getjobber.com/docs/getting_started/',
  'https://developer.getjobber.com/docs/using_jobbers_api/api_queries_and_mutations/',
  'https://developer.getjobber.com/docs/using_jobbers_api/setting_up_webhooks/',
  'https://developer.getjobber.com/docs/using_jobbers_api/custom_fields/',
  'https://developer.getjobber.com/docs/using_jobbers_api/api_versioning/',
  'https://developer.getjobber.com/docs/using_jobbers_api/api_rate_limits/',
  'https://developer.getjobber.com/docs/using_jobbers_api/handling_api_errors/',
  'https://developer.getjobber.com/docs/building_your_app/approved_categories_of_apps/',
  'https://developer.getjobber.com/docs/building_your_app/app_lifecycle/',
  'https://developer.getjobber.com/docs/building_your_app/app_authorization/',
  'https://developer.getjobber.com/docs/building_your_app/refresh_token_rotation/',
  'https://developer.getjobber.com/docs/building_your_app/editing_your_app/',
  'https://developer.getjobber.com/docs/building_your_app/testing_your_app/',
  'https://developer.getjobber.com/docs/building_your_app/atlantis_design_system/',
  'https://developer.getjobber.com/docs/publishing_your_app/app_listing_details/',
  'https://developer.getjobber.com/docs/publishing_your_app/manage_app_button/',
  'https://developer.getjobber.com/docs/publishing_your_app/editing_a_published_app/',
  'https://developer.getjobber.com/docs/app_template_project/',
  'https://developer.getjobber.com/docs/custom_integrations/',
  'https://developer.getjobber.com/docs/changelog/',
  'https://help.getjobber.com/hc/en-us/articles/8195739126039-Requests-in-the-Jobber-App',
  'https://help.getjobber.com/hc/en-us',
  // Additional URLs will be added here...
];

// Create directories based on URL structure
function createDirectoryStructure(url) {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split('/').filter(part => part);
  
  if (urlObj.hostname === 'developer.getjobber.com') {
    return path.join('developer', ...pathParts);
  } else if (urlObj.hostname === 'help.getjobber.com') {
    return path.join('help', ...pathParts);
  }
  
  return pathParts.join('/');
}

// Convert HTML to Markdown (basic conversion)
function htmlToMarkdown(html, url) {
  let markdown = html;
  
  // Add frontmatter
  const frontmatter = `---
source: ${url}
scraped_at: ${new Date().toISOString()}
title: ${extractTitle(html)}
---

`;
  
  // Basic HTML to Markdown conversion
  markdown = markdown
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1')
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1')
    .replace(/<h5[^>]*>(.*?)<\/h5>/gi, '##### $1')
    .replace(/<h6[^>]*>(.*?)<\/h6>/gi, '###### $1')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
    .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
    .replace(/<pre[^>]*>(.*?)<\/pre>/gis, '```\n$1\n```')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<ul[^>]*>/gi, '')
    .replace(/<\/ul>/gi, '')
    .replace(/<ol[^>]*>/gi, '')
    .replace(/<\/ol>/gi, '')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]*>/g, '') // Remove remaining HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive newlines
    .trim();
  
  return frontmatter + markdown;
}

function extractTitle(html) {
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
  if (titleMatch) {
    return titleMatch[1].replace(/&[^;]+;/g, '').trim();
  }
  
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
  if (h1Match) {
    return h1Match[1].replace(/<[^>]*>/g, '').trim();
  }
  
  return 'Untitled';
}

// Fetch URL content
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirects
        fetchUrl(res.headers.location).then(resolve).catch(reject);
        return;
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        return;
      }
      
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    
    req.on('error', reject);
    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// Create filename from URL
function createFilename(url) {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split('/').filter(part => part);
  const lastPart = pathParts[pathParts.length - 1] || 'index';
  const date = new Date().toISOString().split('T')[0];
  
  return `${lastPart.replace(/[^a-zA-Z0-9-_]/g, '-')}_${date}.md`;
}

// Main scraping function
async function scrapeUrls() {
  console.log(`Starting to scrape ${urls.length} URLs...`);
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`\n[${i + 1}/${urls.length}] Scraping: ${url}`);
    
    try {
      const html = await fetchUrl(url);
      const markdown = htmlToMarkdown(html, url);
      
      const dirPath = createDirectoryStructure(url);
      const fullDirPath = path.join(__dirname, dirPath);
      
      // Create directory if it doesn't exist
      fs.mkdirSync(fullDirPath, { recursive: true });
      
      const filename = createFilename(url);
      const filepath = path.join(fullDirPath, filename);
      
      fs.writeFileSync(filepath, markdown, 'utf8');
      console.log(`✅ Saved: ${filepath}`);
      
      // Add delay to be respectful to the server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`❌ Error scraping ${url}:`, error.message);
    }
  }
  
  console.log('\n🎉 Scraping completed!');
}

// Run the scraper
if (require.main === module) {
  scrapeUrls().catch(console.error);
}

module.exports = { scrapeUrls, fetchUrl, htmlToMarkdown };