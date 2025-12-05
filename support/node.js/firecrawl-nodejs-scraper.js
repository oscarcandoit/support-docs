#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

// Firecrawl API configuration
const FIRECRAWL_API_KEY = 'fc-f652566134904f1aa2e1bf2928902c95';
const FIRECRAWL_BASE_URL = 'https://api.firecrawl.dev/v0';

// All Node.js API documentation URLs
const urls = [
  'https://nodejs.org/docs/latest/api/documentation.html',
  'https://nodejs.org/docs/latest/api/synopsis.html',
  'https://nodejs.org/docs/latest/api/assert.html',
  'https://nodejs.org/docs/latest/api/async_context.html',
  'https://nodejs.org/docs/latest/api/async_hooks.html',
  'https://nodejs.org/docs/latest/api/buffer.html',
  'https://nodejs.org/docs/latest/api/addons.html',
  'https://nodejs.org/docs/latest/api/n-api.html',
  'https://nodejs.org/docs/latest/api/embedding.html',
  'https://nodejs.org/docs/latest/api/child_process.html',
  'https://nodejs.org/docs/latest/api/cluster.html',
  'https://nodejs.org/docs/latest/api/cli.html',
  'https://nodejs.org/docs/latest/api/console.html',
  'https://nodejs.org/docs/latest/api/crypto.html',
  'https://nodejs.org/docs/latest/api/debugger.html',
  'https://nodejs.org/docs/latest/api/deprecations.html',
  'https://nodejs.org/docs/latest/api/diagnostics_channel.html',
  'https://nodejs.org/docs/latest/api/dns.html',
  'https://nodejs.org/docs/latest/api/domain.html',
  'https://nodejs.org/docs/latest/api/environment_variables.html',
  'https://nodejs.org/docs/latest/api/errors.html',
  'https://nodejs.org/docs/latest/api/events.html',
  'https://nodejs.org/docs/latest/api/fs.html',
  'https://nodejs.org/docs/latest/api/globals.html',
  'https://nodejs.org/docs/latest/api/http.html',
  'https://nodejs.org/docs/latest/api/http2.html',
  'https://nodejs.org/docs/latest/api/https.html',
  'https://nodejs.org/docs/latest/api/inspector.html',
  'https://nodejs.org/docs/latest/api/intl.html',
  'https://nodejs.org/docs/latest/api/modules.html',
  'https://nodejs.org/docs/latest/api/esm.html',
  'https://nodejs.org/docs/latest/api/module.html',
  'https://nodejs.org/docs/latest/api/packages.html',
  'https://nodejs.org/docs/latest/api/typescript.html',
  'https://nodejs.org/docs/latest/api/net.html',
  'https://nodejs.org/docs/latest/api/os.html',
  'https://nodejs.org/docs/latest/api/path.html',
  'https://nodejs.org/docs/latest/api/perf_hooks.html',
  'https://nodejs.org/docs/latest/api/permissions.html',
  'https://nodejs.org/docs/latest/api/process.html',
  'https://nodejs.org/docs/latest/api/punycode.html',
  'https://nodejs.org/docs/latest/api/querystring.html',
  'https://nodejs.org/docs/latest/api/readline.html',
  'https://nodejs.org/docs/latest/api/repl.html',
  'https://nodejs.org/docs/latest/api/report.html',
  'https://nodejs.org/docs/latest/api/single-executable-applications.html',
  'https://nodejs.org/docs/latest/api/sqlite.html',
  'https://nodejs.org/docs/latest/api/stream.html',
  'https://nodejs.org/docs/latest/api/string_decoder.html',
  'https://nodejs.org/docs/latest/api/test.html',
  'https://nodejs.org/docs/latest/api/timers.html',
  'https://nodejs.org/docs/latest/api/tls.html',
  'https://nodejs.org/docs/latest/api/tracing.html',
  'https://nodejs.org/docs/latest/api/tty.html',
  'https://nodejs.org/docs/latest/api/dgram.html',
  'https://nodejs.org/docs/latest/api/url.html',
  'https://nodejs.org/docs/latest/api/util.html',
  'https://nodejs.org/docs/latest/api/v8.html',
  'https://nodejs.org/docs/latest/api/vm.html',
  'https://nodejs.org/docs/latest/api/wasi.html',
  'https://nodejs.org/docs/latest/api/webcrypto.html',
  'https://nodejs.org/docs/latest/api/webstreams.html',
  'https://nodejs.org/docs/latest/api/worker_threads.html',
  'https://nodejs.org/docs/latest/api/zlib.html'
];

// Category mapping based on functionality
const categoryMapping = {
  'documentation.html': 'overview',
  'synopsis.html': 'overview',
  'assert.html': 'testing',
  'test.html': 'testing',
  'debugger.html': 'testing',
  'async_context.html': 'async',
  'async_hooks.html': 'async',
  'worker_threads.html': 'async',
  'events.html': 'async',
  'timers.html': 'async',
  'buffer.html': 'core',
  'console.html': 'core',
  'globals.html': 'core',
  'process.html': 'core',
  'util.html': 'core',
  'errors.html': 'core',
  'addons.html': 'native',
  'n-api.html': 'native',
  'embedding.html': 'native',
  'child_process.html': 'system',
  'cluster.html': 'system',
  'cli.html': 'system',
  'environment_variables.html': 'system',
  'os.html': 'system',
  'permissions.html': 'system',
  'crypto.html': 'security',
  'webcrypto.html': 'security',
  'tls.html': 'security',
  'deprecations.html': 'development',
  'diagnostics_channel.html': 'development',
  'inspector.html': 'development',
  'perf_hooks.html': 'development',
  'report.html': 'development',
  'tracing.html': 'development',
  'v8.html': 'development',
  'vm.html': 'development',
  'dns.html': 'network',
  'http.html': 'network',
  'http2.html': 'network',
  'https.html': 'network',
  'net.html': 'network',
  'dgram.html': 'network',
  'url.html': 'network',
  'fs.html': 'filesystem',
  'path.html': 'filesystem',
  'intl.html': 'utilities',
  'punycode.html': 'utilities',
  'querystring.html': 'utilities',
  'readline.html': 'utilities',
  'repl.html': 'utilities',
  'string_decoder.html': 'utilities',
  'tty.html': 'utilities',
  'zlib.html': 'utilities',
  'modules.html': 'modules',
  'esm.html': 'modules',
  'module.html': 'modules',
  'packages.html': 'modules',
  'typescript.html': 'modules',
  'stream.html': 'streams',
  'webstreams.html': 'streams',
  'single-executable-applications.html': 'advanced',
  'sqlite.html': 'advanced',
  'wasi.html': 'advanced',
  'domain.html': 'deprecated'
};

function getCategory(url) {
  const filename = url.split('/').pop();
  return categoryMapping[filename] || 'misc';
}

function createFilename(url, title) {
  const filename = url.split('/').pop().replace('.html', '');
  const date = new Date().toISOString().split('T')[0];
  
  const cleanTitle = title ? title.replace(/[^a-zA-Z0-9-_\s]/g, '').replace(/\s+/g, '-') : filename;
  return `nodejs_${cleanTitle}_${date}.md`.toLowerCase();
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
      includeTags: ['title', 'meta', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      excludeTags: ['nav', 'footer', 'header', 'aside', 'script', 'style'],
      waitFor: 2000
    });

    if (response.success && response.data) {
      const { markdown, metadata } = response.data;
      const title = metadata?.title || 'Node.js Documentation';
      
      // Add frontmatter
      const frontmatter = `---
source: ${url}
scraped_at: ${new Date().toISOString()}
title: ${title}
description: ${metadata?.description || ''}
category: ${getCategory(url)}
module: ${url.split('/').pop().replace('.html', '')}
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
  console.log(`🚀 Starting to scrape ${urls.length} Node.js API documentation URLs using Firecrawl...\n`);
  
  const results = {
    success: 0,
    failed: 0,
    errors: []
  };

  // Create category directories
  const categories = ['overview', 'core', 'async', 'modules', 'filesystem', 'network', 'streams', 'testing', 'security', 'system', 'utilities', 'development', 'native', 'advanced', 'deprecated', 'misc'];
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
    
    // Add delay between requests
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
  const readme = `# Node.js API Documentation

Complete Node.js API documentation scraped using Firecrawl API.

**Repository:** https://github.com/oscarcandoit/node.js
**Source:** https://nodejs.org/docs/latest/api/
**Total URLs Scraped:** ${urls.length}
**Last Updated:** ${new Date().toISOString().split('T')[0]}

---

## 📚 Documentation Categories

### Core APIs
- **Overview** (\`overview/\`) - Documentation guide, synopsis
- **Core** (\`core/\`) - Buffer, console, globals, process, util, errors
- **Async** (\`async/\`) - Async context, hooks, events, timers, worker threads

### Module System
- **Modules** (\`modules/\`) - CommonJS, ESM, module resolution, packages, TypeScript

### I/O and Networking
- **Filesystem** (\`filesystem/\`) - File system operations, path utilities
- **Network** (\`network/\`) - HTTP, HTTPS, HTTP/2, DNS, UDP, URL parsing
- **Streams** (\`streams/\`) - Node.js streams, web streams

### Development & Testing
- **Testing** (\`testing/\`) - Assert, test runner, debugger
- **Development** (\`development/\`) - Performance hooks, diagnostics, V8, VM

### Security & System
- **Security** (\`security/\`) - Crypto, Web Crypto, TLS
- **System** (\`system/\`) - Child process, cluster, CLI, OS, permissions

### Utilities & Advanced
- **Utilities** (\`utilities/\`) - String decoder, TTY, readline, REPL, compression
- **Native** (\`native/\`) - C++ addons, N-API, embedding
- **Advanced** (\`advanced/\`) - Single executable apps, SQLite, WASI
- **Deprecated** (\`deprecated/\`) - Domain (deprecated APIs)

---

## 🔍 Quick Reference Guide

### Most Common APIs
| API | Category | Description |
|-----|----------|-------------|
| **fs** | filesystem | File system operations |
| **http/https** | network | HTTP server and client |
| **path** | filesystem | File path utilities |
| **process** | core | Current Node.js process |
| **buffer** | core | Binary data handling |
| **events** | async | Event emitter |
| **stream** | streams | Readable/writable streams |
| **crypto** | security | Cryptographic functionality |
| **util** | core | Utility functions |
| **child_process** | system | Spawn child processes |

### Build Tool Development
| API | Category | Use Case |
|-----|----------|----------|
| **fs** | filesystem | File operations, reading package.json |
| **path** | filesystem | Cross-platform file paths |
| **child_process** | system | Running build commands |
| **process** | core | Environment variables, CLI args |
| **events** | async | Build event handling |

### WordPress Development
| API | Category | Use Case |
|-----|----------|----------|
| **http/https** | network | API requests, webhooks |
| **fs** | filesystem | Theme/plugin file operations |
| **crypto** | security | Password hashing, tokens |
| **buffer** | core | Image processing, file uploads |

---

## 📖 File Format

All documentation files include YAML frontmatter:

\`\`\`markdown
---
source: https://nodejs.org/docs/latest/api/...
scraped_at: ${new Date().toISOString()}
title: Node.js Documentation Title
description: API description
category: core
module: fs
---

# Node.js API Documentation
[Markdown content here...]
\`\`\`

---

## 🔗 Official Resources

- **Node.js Official Site:** https://nodejs.org
- **API Documentation:** https://nodejs.org/docs/latest/api/
- **Learning Resources:** https://nodejs.org/learn/
- **Package Manager:** https://www.npmjs.com
- **GitHub Repository:** https://github.com/oscarcandoit/node.js

---

## 🛠️ Usage Examples

### Import Documentation in Code
\`\`\`javascript
// Reference: filesystem/nodejs_file-system_2024-10-20.md
const fs = require('fs');

// Reference: network/nodejs_http_2024-10-20.md  
const http = require('http');

// Reference: core/nodejs_path_2024-10-20.md
const path = require('path');
\`\`\`

### WordPress Plugin Development
\`\`\`javascript
// Use Node.js for build tools
// Reference: system/nodejs_child-process_2024-10-20.md
const { exec } = require('child_process');

// Reference: filesystem/nodejs_file-system_2024-10-20.md
const fs = require('fs');

// Build WordPress assets
exec('npm run build', (error, stdout, stderr) => {
  // Handle build process
});
\`\`\`

---

## 🎯 Integration with Claude Code

Add to your CLAUDE.md:

\`\`\`markdown
### Node.js API (/tmp/node.js - ${urls.length} files)
**Repository:** https://github.com/oscarcandoit/node.js
**Use for:** Node.js development, build tools, WordPress tooling

**Key Sections:**
- Core APIs: \`/core/\`, \`/async/\`, \`/modules/\`
- I/O Operations: \`/filesystem/\`, \`/network/\`, \`/streams/\`  
- Development: \`/testing/\`, \`/development/\`
- System: \`/security/\`, \`/system/\`, \`/utilities/\`
\`\`\`

---

**Built for comprehensive Node.js development** 🚀  
**Perfect for WordPress build tools and API integrations**  
**Scraped with:** Firecrawl API
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
      console.log('3. Run: git commit -m "Add comprehensive Node.js API documentation"');
      console.log('4. Run: git push origin main');
    })
    .catch(console.error);
}

module.exports = { scrapeAllUrls, scrapeUrl };