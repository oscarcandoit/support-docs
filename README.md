# Complete Documentation Repository

Consolidated documentation repository containing both support documentation and API references for all supported products and services.

## Git Connection & Authentication

### GitHub Repository Access
**Repository URL**: `https://github.com/oscarcandoit/support-docs`  
**Access Token**: Contact repository administrator for current token

### Quick Setup Commands

```bash
# Clone repository with authentication (replace YOUR_TOKEN with actual token)
git clone https://YOUR_TOKEN@github.com/oscarcandoit/support-docs.git

# Or clone and set remote URL
git clone https://github.com/oscarcandoit/support-docs.git
cd support-docs
git remote set-url origin https://YOUR_TOKEN@github.com/oscarcandoit/support-docs.git
```

**Note**: Actual token available in project documentation or contact administrator

### Making Changes & Pushing

```bash
# Make your changes
# ...

# Add and commit changes
git add .
git commit -m "Your commit message"

# Push to repository
git push origin main
```

### For Large File Uploads
If uploading large numbers of files, increase the git buffer:

```bash
git config http.postBuffer 157286400  # Increase to ~150MB
git push origin main
```

## Structure

### Support Documentation (`support/`)
Platform support, troubleshooting guides, and integration documentation.

#### AI & Development Platforms
- **`support/Claude/`** - Claude platform documentation (2,543 files) - **NEW!**
  - API documentation and guides
  - Model information and best practices  
  - Agent SDK and tool usage
  - Prompt engineering techniques
  - Build guides and tutorials
  - Multi-language support (EN/DE)

#### Core WordPress Products
- **`support/gravity-forms/`** - Gravity Forms plugin documentation (2,907 files)
- **`support/wp-fusion/`** - WP Fusion plugin documentation (494 files)  
- **`support/elementor/`** - Elementor page builder documentation (40 files)
- **`support/wordpress/`** - WordPress core development documentation (3,309 files)

#### Platforms & Infrastructure  
- **`support/vercel/`** - Vercel deployment and hosting documentation (946 files)
- **`support/supabase/`** - Supabase database and backend documentation (1,682 files)
- **`support/digital-ocean/`** - DigitalOcean cloud infrastructure documentation (3,812 files)
- **`support/cpanel/`** - cPanel hosting management documentation (2 files)
- **`support/node.js/`** - Node.js development documentation (15 files)

#### Business Applications
- **`support/ghl/`** - GoHighLevel CRM and marketing automation documentation (5,288 files)
- **`support/jobber/`** - Jobber field service management documentation (12 files)

### API Documentation (`api/`)
API references, endpoints, and integration guides for external services.

- **`api/ghl-api/`** - GoHighLevel API documentation (1,285+ files)
- **`api/servicetitan/`** - ServiceTitan API documentation (35+ files)

## Usage

This repository contains comprehensive documentation for troubleshooting, integration guides, API references, and best practices across all supported platforms.

### Quick Reference Links

**WordPress Development:**
- [WordPress Core Development](support/wordpress/)
- [Gravity Forms API](support/gravity-forms/)
- [WP Fusion Getting Started](support/wp-fusion/)
- [Elementor Developer Docs](support/elementor/)

**Platform Documentation:**
- [Vercel Deployment Guide](support/vercel/)
- [Supabase Database Setup](support/supabase/)
- [DigitalOcean Infrastructure](support/digital-ocean/)
- [Node.js API Development](support/node.js/)

**Business Applications:**
- [GoHighLevel Support](support/ghl/)
- [Jobber App Development](support/jobber/)

**API References:**
- [GoHighLevel API](api/ghl-api/)
- [ServiceTitan API](api/servicetitan/)

## Total Files: 24,178+ documentation files
- Support Documentation: 22,859+ files (includes 2,543 Claude docs)
- API Documentation: 1,326+ files

## Token Permissions

The provided access token has the following permissions:
- ✅ Admin access (full repository control)
- ✅ Push/Pull access
- ✅ Issue management
- ✅ Wiki access

## Contributing

When adding new documentation:

1. Create appropriate folder structure
2. Use descriptive commit messages
3. Update this README if adding new major sections
4. Ensure files are properly organized and named

Last Updated: December 18, 2025
EOF < /dev/null
