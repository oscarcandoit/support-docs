#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

// Firecrawl API configuration
const FIRECRAWL_API_KEY = 'fc-f652566134904f1aa2e1bf2928902c95';
const FIRECRAWL_BASE_URL = 'https://api.firecrawl.dev/v0';

// All Jobber URLs to scrape
const urls = [
  // Developer API Documentation
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
  
  // Help Center Documentation
  'https://help.getjobber.com/hc/en-us/articles/8195739126039-Requests-in-the-Jobber-App',
  'https://help.getjobber.com/hc/en-us',
  'https://help.getjobber.com/hc/en-us/articles/115009164267-Month-Week-View-Schedule',
  'https://help.getjobber.com/hc/en-us/articles/115009233447-Schedule-Overview',
  'https://help.getjobber.com/hc/en-us/articles/115009234307-Map-View-Schedule',
  'https://help.getjobber.com/hc/en-us/articles/115009234787-Day-View-Schedule',
  'https://help.getjobber.com/hc/en-us/articles/115009378607-Security-Passwords',
  'https://help.getjobber.com/hc/en-us/articles/115009378627-Day-Sheets',
  'https://help.getjobber.com/hc/en-us/articles/115009378647-Calendar-Colors',
  'https://help.getjobber.com/hc/en-us/articles/115009378687-Calendar-Syncing',
  'https://help.getjobber.com/hc/en-us/articles/115009378707-Assigning-Multiple-Visits-at-Once-to-Users',
  'https://help.getjobber.com/hc/en-us/articles/115009378727-Quote-Basics',
  'https://help.getjobber.com/hc/en-us/articles/115009379007-Deposits-on-Quotes',
  'https://help.getjobber.com/hc/en-us/articles/115009379027-Job-Basics',
  'https://help.getjobber.com/hc/en-us/articles/115009379047-Create-a-One-Off-Job',
  'https://help.getjobber.com/hc/en-us/articles/115009379087-Edit-a-Job',
  'https://help.getjobber.com/hc/en-us/articles/115009394808-List-View-Schedule',
  'https://help.getjobber.com/hc/en-us/articles/115009404788-Tasks',
  'https://help.getjobber.com/hc/en-us/articles/115009450867-Client-Basics',
  'https://help.getjobber.com/hc/en-us/articles/115009451467-Billing-History-Box',
  'https://help.getjobber.com/hc/en-us/articles/115009517847-Invoice-Reminders',
  'https://help.getjobber.com/hc/en-us/articles/115009518207-Batch-Deliver-Invoices',
  'https://help.getjobber.com/hc/en-us/articles/115009542508-Daily-Route-Optimization',
  'https://help.getjobber.com/hc/en-us/articles/115009542728-Converting-a-Quote-to-a-Job',
  'https://help.getjobber.com/hc/en-us/articles/115009542848-Create-a-Recurring-Job',
  'https://help.getjobber.com/hc/en-us/articles/115009543028-Timesheets',
  'https://help.getjobber.com/hc/en-us/articles/115009557647-Tags',
  'https://help.getjobber.com/hc/en-us/articles/115009566987-Client-Document-Settings',
  'https://help.getjobber.com/hc/en-us/articles/115009568647-Manage-Team-How-to-Add-Manage-and-Deactivate-Team-Members',
  'https://help.getjobber.com/hc/en-us/articles/115009568687-User-Permissions',
  'https://help.getjobber.com/hc/en-us/articles/115009571307-Client-Hub-Settings',
  'https://help.getjobber.com/hc/en-us/articles/115009571387-Jobber-Payments-Basics',
  'https://help.getjobber.com/hc/en-us/articles/115009571407-How-to-Set-Up-Jobber-Payments'
];

// Category mapping based on URL patterns
const categoryMapping = {
  'developer.getjobber.com/docs/getting_started': 'getting-started',
  'developer.getjobber.com/docs/using_jobbers_api': 'api',
  'developer.getjobber.com/docs/building_your_app': 'app-development',
  'developer.getjobber.com/docs/publishing_your_app': 'app-publishing',
  'developer.getjobber.com/docs/app_template_project': 'templates',
  'developer.getjobber.com/docs/custom_integrations': 'integrations',
  'developer.getjobber.com/docs/changelog': 'changelog',
  'help.getjobber.com/hc/en-us/articles': 'help-articles',
  'help.getjobber.com/hc/en-us/sections': 'help-sections',
  'help.getjobber.com/hc/en-us/categories': 'help-categories'
};

function getCategory(url) {
  for (const [pattern, category] of Object.entries(categoryMapping)) {
    if (url.includes(pattern)) {
      return category;
    }
  }
  return 'misc';
}

function createFilename(url, title) {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split('/').filter(part => part);
  const lastPart = pathParts[pathParts.length - 1] || 'index';
  const date = new Date().toISOString().split('T')[0];
  
  // Create a clean filename
  const cleanTitle = title ? title.replace(/[^a-zA-Z0-9-_\s]/g, '').replace(/\s+/g, '-') : lastPart;
  return `jobber_${cleanTitle}_${date}.md`.toLowerCase();
}

function makeFirecrawlRequest(endpoint, data) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data);
    
    const options = {
      hostname: 'api.firecrawl.dev',
      port: 443,
      path: `/v0/${endpoint}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${FIRECRAWL_API_KEY}`,
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (res.statusCode === 200) {
            resolve(response);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${response.error || 'Unknown error'}`));
          }
        } catch (error) {
          reject(new Error(`JSON parse error: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

async function scrapeUrl(url) {
  try {
    console.log(`🔥 Scraping: ${url}`);
    
    const response = await makeFirecrawlRequest('scrape', {
      url: url,
      formats: ['markdown'],
      includeTags: ['title', 'meta'],
      excludeTags: ['nav', 'footer', 'header', 'aside', 'script', 'style'],
      waitFor: 2000
    });

    if (response.success && response.data) {
      const { markdown, metadata } = response.data;
      const title = metadata?.title || 'Untitled';
      
      // Add frontmatter
      const frontmatter = `---
source: ${url}
scraped_at: ${new Date().toISOString()}
title: ${title}
description: ${metadata?.description || ''}
category: ${getCategory(url)}
---

`;

      return {
        content: frontmatter + markdown,
        title: title,
        success: true
      };
    } else {
      throw new Error('Firecrawl returned no data');
    }
  } catch (error) {
    console.error(`❌ Error scraping ${url}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function scrapeAllUrls() {
  console.log(`🚀 Starting to scrape ${urls.length} Jobber documentation URLs using Firecrawl...\n`);
  
  const results = {
    success: 0,
    failed: 0,
    errors: []
  };

  // Create base directories
  const categories = ['getting-started', 'api', 'app-development', 'app-publishing', 'templates', 'integrations', 'changelog', 'help-articles', 'help-sections', 'help-categories', 'misc'];
  categories.forEach(category => {
    const dirPath = path.join(__dirname, category);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`\n[${i + 1}/${urls.length}] Processing: ${url}`);
    
    const result = await scrapeUrl(url);
    
    if (result.success) {
      const category = getCategory(url);
      const filename = createFilename(url, result.title);
      const filepath = path.join(__dirname, category, filename);
      
      fs.writeFileSync(filepath, result.content, 'utf8');
      console.log(`✅ Saved: ${category}/${filename}`);
      results.success++;
    } else {
      results.failed++;
      results.errors.push({ url, error: result.error });
      console.log(`❌ Failed: ${url}`);
    }
    
    // Add delay between requests to be respectful
    if (i < urls.length - 1) {
      console.log('⏳ Waiting 2 seconds...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  console.log(`\n🎉 Scraping completed!`);
  console.log(`✅ Success: ${results.success}`);
  console.log(`❌ Failed: ${results.failed}`);
  
  if (results.errors.length > 0) {
    console.log('\n❌ Failed URLs:');
    results.errors.forEach(({ url, error }) => {
      console.log(`  - ${url}: ${error}`);
    });
  }

  return results;
}

// Create README
function createReadme() {
  const readme = `# Jobber Documentation

Complete Jobber API and Help documentation scraped using Firecrawl.

**Total URLs Scraped:** ${urls.length}
**Last Updated:** ${new Date().toISOString().split('T')[0]}
**Repository:** https://github.com/oscarcandoit/jobber

## 📚 Documentation Categories

### Developer API Documentation
- **Getting Started** (\`getting-started/\`) - API basics and setup
- **API Reference** (\`api/\`) - API queries, mutations, webhooks, custom fields
- **App Development** (\`app-development/\`) - Building apps, authorization, testing
- **App Publishing** (\`app-publishing/\`) - Publishing and managing apps
- **Templates** (\`templates/\`) - App template projects
- **Integrations** (\`integrations/\`) - Custom integrations
- **Changelog** (\`changelog/\`) - API updates and changes

### Help Center Documentation  
- **Help Articles** (\`help-articles/\`) - User guides and tutorials
- **Help Sections** (\`help-sections/\`) - Organized help topics
- **Help Categories** (\`help-categories/\`) - Help category overviews

## 🔍 Quick Reference

### API Development
- Authentication: \`api/\` folder
- Webhooks: \`api/\` folder  
- Custom Fields: \`api/\` folder
- Rate Limits: \`api/\` folder

### App Development
- App Lifecycle: \`app-development/\` folder
- Authorization: \`app-development/\` folder
- Testing: \`app-development/\` folder
- Design System: \`app-development/\` folder

### User Guides
- Schedule Management: \`help-articles/\` folder
- Client Management: \`help-articles/\` folder
- Payments: \`help-articles/\` folder
- Reports: \`help-articles/\` folder

## 📖 File Format

All documentation files include YAML frontmatter with metadata:

\`\`\`markdown
---
source: https://developer.getjobber.com/docs/...
scraped_at: ${new Date().toISOString()}
title: Document Title
description: Document description
category: api
---

# Document Content
[Markdown content here...]
\`\`\`

## 🔗 Official Resources

- **Jobber Developer Portal:** https://developer.getjobber.com/
- **Jobber Help Center:** https://help.getjobber.com/
- **Jobber API:** https://developer.getjobber.com/docs/
- **GitHub Repository:** https://github.com/oscarcandoit/jobber

---

**Scraped with:** Firecrawl API
**Repository:** https://github.com/oscarcandoit/jobber
`;

  fs.writeFileSync(path.join(__dirname, 'README.md'), readme, 'utf8');
  console.log('📝 Created README.md');
}

// Run the scraper
if (require.main === module) {
  scrapeAllUrls()
    .then(() => {
      createReadme();
      console.log('\n🎯 Next steps:');
      console.log('1. Review the scraped documentation');
      console.log('2. Run: git add .');
      console.log('3. Run: git commit -m "Add Jobber documentation"');
      console.log('4. Run: git push origin main');
    })
    .catch(console.error);
}

module.exports = { scrapeAllUrls, scrapeUrl };