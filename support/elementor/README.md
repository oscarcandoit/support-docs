# Elementor Developer Documentation

Complete official Elementor developer documentation from `developers.elementor.com`

**Total Files:** 183 markdown files
**Source:** https://developers.elementor.com
**Repository:** https://github.com/oscarcandoit/elementor-docs

---

## 📚 What's Included

### Complete Elementor Development Documentation

- **Editor Controls** (45 files) - All control types and APIs
- **Custom Widgets** (17 files) - Widget development guide
- **Hooks & Filters** (14 files) - Customization hooks
- **CLI Tools** (13 files) - Command-line development
- **Getting Started** (6 files) - Setup and basics
- **Addon Development** (6 files) - Plugin integration
- **Theme Development** (5 files) - Custom Elementor themes
- **Theme Conditions** (4 files) - Template logic
- **Context Menu** (4 files) - UI customization
- **Deprecations** (4 files) - Version compatibility
- **Form Fields** (3 files) - Custom form fields
- **Hello Elementor Theme** (2 files) - Base theme hooks
- **Editor API** (2 files) - Editor customization
- **Finder** (2 files) - Search functionality
- **Scripts/Styles** (2 files) - Asset management
- **Controls** (2 files) - Control base classes
- **Managers** (1 file) - Manager system
- **Dynamic Tags** (1 file) - Dynamic content
- **Form Actions** (1 file) - Form processing
- **JavaScript API** (50+ files) - JS integration

---

## 🎯 What You Can Build

### ✅ Elementor Themes
- Custom theme development
- Theme Builder templates
- Hello Elementor child themes
- Theme condition logic
- Template customization

### ✅ Custom Widgets
- Widget registration
- 45+ control types
- Widget rendering
- Dynamic content integration

### ✅ Elementor Extensions
- Add-on development
- Plugin integration
- Editor customization
- Context menu extensions

### ✅ Advanced Customization
- Hooks and filters (14 docs)
- JavaScript API
- Editor API
- Dynamic tags
- Form fields and actions

---

## 📂 Documentation Structure

```
Elementor/
├── docs/
│   ├── editor-controls/        45 files (All control types)
│   ├── widgets/                17 files (Widget development)
│   ├── hooks/                  14 files (Customization hooks)
│   ├── cli/                    13 files (CLI tools)
│   ├── getting-started/         6 files (Setup guides)
│   ├── addons/                  6 files (Add-on development)
│   ├── themes/                  5 files (Theme development)
│   ├── theme-conditions/        4 files (Template logic)
│   ├── context-menu/            4 files (UI customization)
│   ├── deprecations/            4 files (Version compatibility)
│   ├── form-fields/             3 files (Custom forms)
│   ├── hello-elementor-theme/   2 files (Base theme)
│   ├── editor/                  2 files (Editor API)
│   ├── finder/                  2 files (Search)
│   ├── scripts-styles/          2 files (Assets)
│   ├── controls/                2 files (Control base)
│   ├── managers/                1 file  (Managers)
│   ├── dynamic-tags/            1 file  (Dynamic content)
│   └── form-actions/            1 file  (Form processing)
├── js-api/                     50+ files (JavaScript API)
└── [root files]                 50+ files (Blog, changelogs, guides)
```

---

## 🔍 Quick Reference

### Most Common Topics

#### Custom Widget Development
- `/docs/widgets/` - Widget registration and structure
- `/docs/editor-controls/` - All 45 control types
- `/docs/hooks/` - Widget hooks and filters

#### Theme Development
- `/docs/themes/` - Theme integration guide
- `/docs/hello-elementor-theme/` - Base theme hooks
- `/docs/theme-conditions/` - Template display logic

#### Editor Customization
- `/docs/editor/` - Editor API
- `/docs/context-menu/` - Context menu customization
- `/docs/finder/` - Search functionality

#### CLI Development
- `/docs/cli/` - All CLI commands and tools

#### Add-on Development
- `/docs/addons/` - Plugin integration
- `/docs/getting-started/` - Setup and basics

---

## 📖 How to Use This Documentation

### 1. Browse by Category
Navigate to the appropriate folder based on what you're building:
- Building widgets? → `/docs/widgets/` and `/docs/editor-controls/`
- Building themes? → `/docs/themes/` and `/docs/theme-conditions/`
- Customizing editor? → `/docs/editor/` and `/docs/hooks/`

### 2. Search by Keyword
All files contain YAML frontmatter with original URLs:
```yaml
---
url: https://developers.elementor.com/...
scraped_at: 2025-10-20T...
---
```

### 3. Reference by Control Type
The `/docs/editor-controls/` folder contains all 45 control types:
- Text, Textarea, Number, URL
- Color, Media, Gallery
- Choose, Select, Select2
- Dimensions, Slider, Border
- And 35+ more...

---

## 🚀 Getting Started

### Building Your First Widget

1. **Read Getting Started**
   - `/docs/getting-started/`

2. **Study Widget Structure**
   - `/docs/widgets/creating-a-new-widget.md`

3. **Add Controls**
   - `/docs/editor-controls/` (all 45 control types)

4. **Register Widget**
   - `/docs/widgets/registering-a-widget.md`

### Building an Elementor Theme

1. **Theme Basics**
   - `/docs/themes/elementor-theme-structure.md`

2. **Hello Elementor Child Theme**
   - `/docs/hello-elementor-theme/`

3. **Template Conditions**
   - `/docs/theme-conditions/`

### Customizing with Hooks

1. **Available Hooks**
   - `/docs/hooks/` (14 hook documentation files)

2. **Common Customizations**
   - Widget output modification
   - Editor UI customization
   - Template rendering

---

## 📊 Coverage

### Official Elementor Developer Topics Covered

✅ **Widget Development** - Complete
✅ **Editor Controls** - All 45 types documented
✅ **Theme Development** - Complete
✅ **Hooks & Filters** - Complete
✅ **CLI Tools** - Complete
✅ **Add-on Development** - Complete
✅ **JavaScript API** - Complete
✅ **Dynamic Content** - Complete
✅ **Form Customization** - Complete
✅ **Editor API** - Complete

---

## 🔗 Related Resources

### Companion Documentation
- **WordPress Docs:** https://github.com/oscarcandoit/wordpress (3,293 files)
  - WordPress plugin development
  - WordPress theme development
  - REST API, Block Editor, WP-CLI
  - PHP, MySQL, Bootstrap, jQuery

### External Links
- **Official Elementor Docs:** https://developers.elementor.com
- **Elementor Community:** https://developers.elementor.com/community
- **Elementor GitHub:** https://github.com/elementor/elementor

---

## 📝 File Format

All documentation files are in Markdown format with YAML frontmatter:

```markdown
---
url: https://developers.elementor.com/docs/widgets/
scraped_at: 2025-10-20T12:34:56.789Z
---

# Widget Documentation

[Content here...]
```

---

## 🛠️ Development Workflows

### Recommended Development Stack

**For Elementor Widget Development:**
- This repository (Elementor docs)
- WordPress docs → `/plugins/` and `/apis/`
- PHP docs (from WordPress repo)
- JavaScript/jQuery docs (from WordPress repo)

**For Elementor Theme Development:**
- This repository (Elementor docs)
- WordPress docs → `/themes/` and `/block-editor/`
- Hello Elementor theme docs (this repo)
- CSS/Bootstrap docs (from WordPress repo)

---

## 📦 What's NOT Included

This repository contains **developer documentation** only. It does NOT include:
- Elementor plugin source code
- Elementor user manual
- Elementor Pro documentation (developer docs are mostly free tier)
- Third-party Elementor add-on documentation (see WordPress repo for Essential Addons)

---

## 💡 Tips for Using This Documentation

1. **Use search** - All files are markdown, searchable with `grep` or any text editor
2. **Check deprecations** - See `/docs/deprecations/` for version compatibility
3. **Reference controls** - The `/docs/editor-controls/` folder is your widget control reference
4. **Study examples** - Many docs include code examples
5. **Follow conventions** - Official Elementor coding standards are documented

---

## 📅 Last Updated

**Documentation Scraped:** October 2025
**Elementor Version Coverage:** Latest (check individual files for version specifics)
**Total Files:** 183 markdown files

---

## 🤝 Contributing

This is a scraped documentation repository for offline reference. For official documentation updates:
- Visit https://developers.elementor.com
- Submit issues to https://github.com/elementor/elementor

---

## 📄 License

Documentation content is property of Elementor Ltd.
Scraped for educational and development reference purposes.

---

**Repository:** https://github.com/oscarcandoit/elementor-docs
**Companion Repo:** https://github.com/oscarcandoit/wordpress
