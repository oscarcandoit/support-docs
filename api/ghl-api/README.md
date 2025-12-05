# GoHighLevel Documentation

> **Comprehensive documentation for GoHighLevel (GHL) platform**
>
> Organized into API documentation and Support resources

## 📚 Repository Structure

### `/api/` - API Documentation
Complete **1,001 API documentation files** organized into **43 categories**, covering every aspect of the GoHighLevel API. All documentation includes request/response schemas, authentication requirements, code examples, and endpoint details.

### `/support/` - Support Documentation  
User guides, tutorials, and support resources for the GoHighLevel platform.

## 📖 Overview

This repository contains comprehensive documentation for GoHighLevel (GHL), separated into two main sections:

**Last Updated**: October 11, 2025
**Source**: [GHL Marketplace Documentation](https://marketplace.gohighlevel.com/docs)
**Scraping Tool**: Firecrawl API

## 🗂️ Documentation Categories

### Core APIs (Most Used)

| Category | Count | Description |
|----------|-------|-------------|
| [**Contacts**](./api/contacts/) | 84 docs | Complete contact management - CRUD, search, tags, notes, tasks, campaigns |
| [**Calendars**](./api/calendars/) | 81 docs | Appointment scheduling, events, slots, notifications, resources |
| [**Invoices**](./api/invoices/) | 93 docs | Invoice & estimate management, templates, schedules, payments |
| [**Webhooks**](./api/webhooks/) | 63 docs | Real-time event notifications for all GHL entities |
| [**Locations**](./api/locations/) | 63 docs | Sub-account management, custom fields, tags, templates |
| [**Conversations**](./api/conversations/) | 51 docs | Messaging API - SMS, email, live chat, transcriptions |
| [**Social Planner**](./api/social-planner/) | 53 docs | Social media posting to Facebook, Instagram, LinkedIn, TikTok |

### Products & E-Commerce

| Category | Count | Description |
|----------|-------|-------------|
| [**Products**](./api/products/) | 33 docs | Product catalog, pricing, inventory, collections, reviews |
| [**Payments**](./api/payments/) | 32 docs | Payment processing, subscriptions, orders, transactions |
| [**Store**](./api/store/) | 23 docs | E-commerce store settings, shipping zones, carriers |
| [**Invoices**](./api/invoices/) | 93 docs | Invoicing and estimates (see above) |

### AI & Automation

| Category | Count | Description |
|----------|-------|-------------|
| [**Conversation AI**](./api/conversation-ai/) | 32 docs | AI-powered conversation agents, actions, generations |
| [**Voice AI**](./api/voice-ai/) | 15 docs | Voice AI agents, call logs, actions dashboard |
| [**Workflows**](./api/workflows/) | 3 docs | Workflow automation triggers and actions |
| [**Knowledge Base**](./api/knowledge-base/) | 36 docs | AI knowledge base, web crawler, training URLs |

### Communication

| Category | Count | Description |
|----------|-------|-------------|
| [**Emails**](./api/emails/) | 16 docs | Email templates, campaigns, delivery |
| [**Conversations**](./api/conversations/) | 51 docs | Unified messaging platform (see above) |
| [**Phone System**](./api/phone-system/) | 5 docs | Phone numbers, number pools, call management |

### Marketing & Sales

| Category | Count | Description |
|----------|-------|-------------|
| [**Opportunities**](./api/opportunities/) | 16 docs | Pipeline management, opportunity tracking |
| [**Campaigns**](./api/campaigns/) | 6 docs | Marketing campaigns management |
| [**Funnels**](./api/funnels/) | 20 docs | Sales funnels, pages, redirects |
| [**Forms**](./api/forms/) | 10 docs | Form builder, submissions, custom fields |
| [**Surveys**](./api/surveys/) | 4 docs | Survey creation and submissions |
| [**Blogs**](./api/blogs/) | 18 docs | Blog posts, authors, categories |

### Configuration & Setup

| Category | Count | Description |
|----------|-------|-------------|
| [**OAuth**](./api/oauth/) | 11 docs | OAuth 2.0 authentication, access tokens |
| [**Authorization**](./api/authorization/) | 15 docs | Scopes, token types, private integrations |
| [**Custom Fields**](./api/custom-fields/) | 20 docs | Custom field management v2 API |
| [**Custom Menus**](./api/custom-menus/) | 12 docs | Custom menu links in GHL interface |
| [**SaaS**](./api/saas/) | 24 docs | SaaS mode management, plans, locations |

### Additional APIs

| Category | Count | Description |
|----------|-------|-------------|
| [**Associations**](./api/associations/) | 26 docs | Entity relationships and associations |
| [**Objects**](./api/objects/) | 12 docs | Custom objects, schemas, records |
| [**Links**](./api/links/) | 18 docs | Trigger links, link management |
| [**Medias**](./api/medias/) | 8 docs | Media storage, files, folders |
| [**Companies**](./api/companies/) | 6 docs | Company entity management |
| [**Businesses**](./api/businesses/) | 14 docs | Business entity management |
| [**Proposals**](./api/proposals/) | 7 docs | Proposal and contract documents |
| [**Snapshots**](./api/snapshots/) | 6 docs | Snapshot imports and exports |
| [**Email ISV**](./api/email-isv/) | 6 docs | Email verification and LC Email |
| [**Courses**](./api/courses/) | 4 docs | Membership courses import |

### Developer Resources

| Category | Count | Description |
|----------|-------|-------------|
| [**Marketplace Modules**](./api/marketplace-modules/) | 10 docs | Custom triggers, actions, widgets, conversation providers |
| [**Guides**](./api/guides/) | 3 docs | Getting started guides, AI agents, MCP |
| [**Reference**](./api/reference/) | 14 docs | Tags, categories, documentation pages |
| [**Misc**](./api/misc/) | 6 docs | Changelog, sitemap, miscellaneous docs |

## 🚀 Quick Start

### Finding Documentation

Documentation is organized by category in subdirectories. Each file includes:
- **Source URL** - Original documentation link
- **API Endpoint** - HTTP method and URL
- **Request/Response Schemas** - Complete data structures
- **Authentication** - Required scopes and token types
- **Code Examples** - cURL, Node.js, Python, PHP, Java, Go, Ruby, PowerShell

### Example File Structure

```markdown
---
source: https://marketplace.gohighlevel.com/docs/ghl/contacts/create-contact/index.html
category: contacts
scraped: 2025-10-11T22:35:36.423Z
title: Create Contact | HighLevel API
---

# Create Contact

\`\`\`
POST https://services.leadconnectorhq.com/contacts
\`\`\`

### Requirements
- **Scope**: contacts.write
- **Auth**: OAuth Access Token or Private Integration Token
- **Token Type**: Sub-Account Token

[Full documentation with schemas and examples]
```

## 📖 Using the Documentation

### 1. **Browse by Category**
Navigate to the category folder you need (e.g., `./api/contacts/` for contact APIs)

### 2. **Search by Filename**
Files are named using the pattern: `ghl_{category}_{endpoint}_YYYY-MM-DD.md`

Example: `ghl_contacts_create-contact_2025-10-11.md`

### 3. **Search by Content**
Use your IDE or `grep` to search across all files:

```bash
# Find all authentication docs
grep -r "OAuth" docs/ghl-api-reference/

# Find contact creation examples
grep -r "POST.*contacts" docs/ghl-api-reference/contacts/

# Find webhook payloads
grep -r "webhook" docs/ghl-api-reference/webhooks/
```

### 4. **Reference in Code**
Link directly to the GitHub file from your code comments:

```javascript
// See: https://github.com/oscarcandoit/ghl-api-docs/blob/main/contacts/ghl_contacts_create-contact_2025-10-11.md
const contact = await ghl.contacts.create({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com"
});
```

## 🔗 Integration Examples

### TicketHQ Integration

This documentation is used by [TicketHQ](https://tickethq.io) for building GHL marketplace integrations:

- **OAuth Flow**: See [oauth/](./api/oauth/) for authentication
- **Custom Menus**: See [custom-menus/](./api/custom-menus/) for iframe integration
- **Contacts API**: See [contacts/](./api/contacts/) for contact sync
- **Webhooks**: See [webhooks/](./api/webhooks/) for real-time updates

### Common Use Cases

1. **Building a Marketplace App**
   - Start with [authorization/](./api/authorization/) for scopes
   - Review [oauth/](./api/oauth/) for authentication flow
   - Check [custom-menus/](./api/custom-menus/) for UI integration

2. **Contact Management**
   - [contacts/create-contact](./api/contacts/) - Create new contacts
   - [contacts/upsert-contact](./api/contacts/) - Create or update
   - [contacts/add-tags](./api/contacts/) - Tag management
   - [webhooks/ContactCreate](./api/webhooks/) - Real-time notifications

3. **Calendar Integration**
   - [calendars/get-calendars](./api/calendars/) - List calendars
   - [calendars/get-slots](./api/calendars/) - Available time slots
   - [calendars/create-appointment](./api/calendars/) - Book appointments
   - [webhooks/AppointmentCreate](./api/webhooks/) - Booking notifications

4. **E-Commerce Integration**
   - [products/](./api/products/) - Product catalog
   - [invoices/](./api/invoices/) - Invoice management
   - [payments/](./api/payments/) - Payment processing
   - [store/](./api/store/) - Store configuration

## 🛠️ Maintenance

### Updating Documentation

To refresh the documentation with the latest changes from GHL:

```bash
# Run the categorized scraper
cd /path/to/tickethq/scripts
node categorize-and-scrape.js
```

The scraper will:
1. Check for already-scraped URLs
2. Only fetch new or updated documentation
3. Organize files into category directories
4. Preserve existing documentation

### Scraping Statistics

- **Total URLs Available**: 998
- **Documentation Files**: 1,001
- **Categories**: 43
- **Success Rate**: 100%
- **Last Scraped**: October 11, 2025

## 📋 API Coverage

### Complete Coverage ✅

This repository includes documentation for:

- ✅ All GHL REST API endpoints
- ✅ OAuth 2.0 authentication
- ✅ Webhook event payloads
- ✅ Marketplace app configuration
- ✅ Custom triggers and actions
- ✅ Conversation providers
- ✅ Private integrations
- ✅ SaaS mode features
- ✅ AI agents (Conversation & Voice)
- ✅ Social media integrations

### Not Included ❌

- ❌ GraphQL API (if available)
- ❌ Beta/unreleased features
- ❌ Internal-only endpoints
- ❌ Deprecated v1 APIs (only current versions included)

## 🤝 Contributing

This documentation is automatically scraped from GHL's official docs. For corrections or updates:

1. **Report Issues**: Open an issue on GitHub
2. **Update Scraper**: Modify `scripts/categorize-and-scrape.js`
3. **Re-scrape**: Run the scraper to fetch latest docs
4. **Submit PR**: Push changes to GitHub

## 📝 License

Documentation content is © GoHighLevel. This repository provides organized access to publicly available API documentation for development purposes.

## 🔗 Links

- **GHL Marketplace**: https://marketplace.gohighlevel.com
- **Official Docs**: https://marketplace.gohighlevel.com/docs
- **TicketHQ**: https://tickethq.io
- **GitHub Repo**: https://github.com/oscarcandoit/ghl-api-docs

## 📞 Support

For API questions:
- **GHL Support**: https://help.gohighlevel.com
- **Developer Forum**: https://community.gohighlevel.com

For documentation issues:
- **GitHub Issues**: https://github.com/oscarcandoit/ghl-api-docs/issues

---

**Built by the TicketHQ team** | Scraped with ❤️ using Firecrawl
