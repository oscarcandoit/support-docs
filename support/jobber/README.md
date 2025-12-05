# Jobber Documentation

Complete Jobber API and Help documentation scraped using Firecrawl API.

**Repository:** https://github.com/oscarcandoit/jobber
**Scraped with:** Firecrawl API
**Last Updated:** 2025-10-20

---

## 📚 Documentation Categories

### Developer API Documentation
- **Getting Started** (`getting-started/`) - API basics and setup
- **API Reference** (`api/`) - API queries, mutations, webhooks, custom fields, rate limits, error handling
- **App Development** (`app-development/`) - Building apps, authorization, testing, design system
- **App Publishing** (`app-publishing/`) - Publishing and managing apps in the marketplace
- **Templates** (`templates/`) - App template projects and examples
- **Integrations** (`integrations/`) - Custom integrations and third-party connections
- **Changelog** (`changelog/`) - API updates, changes, and version history

### Help Center Documentation  
- **Help Articles** (`help-articles/`) - User guides, tutorials, and how-to articles
- **Help Sections** (`help-sections/`) - Organized help topics by category
- **Help Categories** (`help-categories/`) - Help category overviews
- **Miscellaneous** (`misc/`) - General help center pages

---

## 🔍 Quick Reference Guide

### For Developers
| Topic | Location | Description |
|-------|----------|-------------|
| **API Getting Started** | `getting-started/` | Initial setup, authentication, first API calls |
| **GraphQL API** | `api/` | Queries, mutations, schema documentation |
| **Webhooks** | `api/` | Setting up real-time event notifications |
| **Custom Fields** | `api/` | Working with custom field data |
| **Rate Limits** | `api/` | API usage limits and best practices |
| **Error Handling** | `api/` | Error codes, debugging, troubleshooting |
| **App Authorization** | `app-development/` | OAuth flow, permissions, scopes |
| **App Testing** | `app-development/` | Testing strategies and tools |
| **Design System** | `app-development/` | Atlantis design system components |
| **App Publishing** | `app-publishing/` | Marketplace submission process |

### For End Users
| Topic | Location | Description |
|-------|----------|-------------|
| **Schedule Management** | `help-articles/` | Calendar views, scheduling, time management |
| **Job Management** | `help-articles/` | Creating, editing, managing jobs |
| **Quote Management** | `help-articles/` | Creating quotes, deposits, conversions |
| **Client Management** | `help-articles/` | Client records, communications, settings |
| **Security** | `help-articles/` | Password management, account security |
| **Mobile App** | `help-articles/` | Jobber mobile app features and usage |

---

## 📖 File Structure & Format

### Directory Organization
```
jobber/
├── getting-started/          # API setup and basics
├── api/                      # Core API documentation
├── app-development/          # Building Jobber apps
├── app-publishing/           # Publishing to marketplace
├── templates/                # Code templates and examples
├── integrations/             # Third-party integrations
├── changelog/                # API version history
├── help-articles/            # User help guides
├── help-sections/            # Help topic sections
├── help-categories/          # Help category pages
└── misc/                     # General documentation
```

### File Format
All documentation files include YAML frontmatter with metadata:

```markdown
---
source: https://developer.getjobber.com/docs/...
scraped_at: 2025-10-20T...
title: Document Title
description: Document description
category: api
---

# Document Content
[Markdown content with proper formatting...]
```

---

## 🚀 Common Development Use Cases

### 1. **Building a Jobber Integration**
Start here:
- `getting-started/` - Authentication and setup
- `api/` - Core API functionality
- `app-development/` - App development lifecycle

### 2. **Setting Up Webhooks**
Reference:
- `api/` folder - Webhook setup and configuration
- `app-development/` - App authorization for webhooks

### 3. **Working with Custom Fields**
See:
- `api/` folder - Custom field API documentation
- `help-articles/` - User guide for custom fields

### 4. **Marketplace App Development**
Follow:
- `app-development/` - Complete app development guide
- `app-publishing/` - Marketplace submission process
- `templates/` - Example code and templates

---

## 🔗 Official Resources

- **Jobber Developer Portal:** https://developer.getjobber.com/
- **Jobber Help Center:** https://help.getjobber.com/
- **Jobber API Documentation:** https://developer.getjobber.com/docs/
- **Jobber Marketplace:** https://marketplace.getjobber.com/
- **GitHub Repository:** https://github.com/oscarcandoit/jobber

---

## 📊 Documentation Stats

**Categories:** 10  
**API Documentation Files:** ~20  
**Help Articles:** ~16  
**Total Files:** ~40+ (partial scrape)  

*Note: This is a partial scrape. Additional URLs can be processed by running the scraper script.*

---

## 🛠️ Updating Documentation

To refresh or extend the documentation:

1. **Update URL list** in `firecrawl-scraper.js`
2. **Run the scraper:**
   ```bash
   node firecrawl-scraper.js
   ```
3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Update Jobber documentation"
   git push origin main
   ```

---

## 💡 Integration with Claude Code

This documentation repository is designed to work with Claude Code for quick reference during development:

```markdown
## Jobber API Documentation (/tmp/jobber)
**Repository:** https://github.com/oscarcandoit/jobber
**Use for:** Jobber API integrations, app development, webhook setup

**Key Sections:**
- API Development: `/getting-started/`, `/api/`, `/app-development/`
- User Guides: `/help-articles/`
- Templates & Examples: `/templates/`, `/integrations/`
- Marketplace Publishing: `/app-publishing/`
```

---

**Built for streamlined Jobber development** 🚀  
**Scraped with:** Firecrawl API  
**Maintained by:** https://github.com/oscarcandoit