# Elementor Documentation - Claude Code Quick Reference

**For Claude Code AI Assistant - Optimized Search Patterns**

This guide helps Claude Code quickly find the right Elementor documentation when you ask questions.

---

## Quick Search Commands

### By Topic (Common Questions)

```bash
# Widget Development
grep -r "widget" /Users/andrewpage/documents/clients/_docs/Elementor/docs/widgets/ --include="*.md" -i

# Editor Controls (45 types)
grep -r "control" /Users/andrewpage/documents/clients/_docs/Elementor/docs/editor-controls/ --include="*.md" -i

# Hooks & Filters
grep -r "hook\|filter\|action" /Users/andrewpage/documents/clients/_docs/Elementor/docs/hooks/ --include="*.md" -i

# Theme Development
grep -r "theme" /Users/andrewpage/documents/clients/_docs/Elementor/docs/themes/ --include="*.md" -i

# CLI Tools
grep -r "cli\|command" /Users/andrewpage/documents/clients/_docs/Elementor/docs/cli/ --include="*.md" -i

# Add-ons
grep -r "addon\|extension" /Users/andrewpage/documents/clients/_docs/Elementor/docs/addons/ --include="*.md" -i

# JavaScript API
grep -r "javascript\|js" /Users/andrewpage/documents/clients/_docs/Elementor/js-api/ --include="*.md" -i
```

---

## Direct Path Mapping (Question → File Location)

### Widget Development Questions

| User Question | Primary Location | File Count |
|---------------|------------------|------------|
| "How do I create an Elementor widget?" | `/docs/widgets/` | 17 files |
| "What controls are available?" | `/docs/editor-controls/` | 45 files |
| "How do I register a widget?" | `/docs/widgets/registering-a-widget.md` | 1 file |
| "How do I add widget controls?" | `/docs/widgets/widget-controls.md` | 1 file |
| "How do I render widget output?" | `/docs/widgets/widget-rendering.md` | 1 file |
| "How do I use text control?" | `/docs/editor-controls/text-control.md` | 1 file |
| "How do I use color control?" | `/docs/editor-controls/color-control.md` | 1 file |
| "How do I use media control?" | `/docs/editor-controls/media-control.md` | 1 file |
| "How do I add responsive controls?" | `/docs/editor-controls/` | Multiple files |

### Theme Development Questions

| User Question | Primary Location | File Count |
|---------------|------------------|------------|
| "How do I create an Elementor theme?" | `/docs/themes/` | 5 files |
| "How do I use Hello Elementor?" | `/docs/hello-elementor-theme/` | 2 files |
| "How do I add theme conditions?" | `/docs/theme-conditions/` | 4 files |
| "How do I customize Theme Builder?" | `/docs/themes/theme-builder.md` | 1 file |

### Customization Questions

| User Question | Primary Location | File Count |
|---------------|------------------|------------|
| "What hooks are available?" | `/docs/hooks/` | 14 files |
| "How do I customize the editor?" | `/docs/editor/` | 2 files |
| "How do I add context menu items?" | `/docs/context-menu/` | 4 files |
| "How do I use the Finder?" | `/docs/finder/` | 2 files |
| "How do I add dynamic tags?" | `/docs/dynamic-tags/` | 1 file |
| "How do I create custom form fields?" | `/docs/form-fields/` | 3 files |
| "How do I add form actions?" | `/docs/form-actions/` | 1 file |

### CLI & Development Tools

| User Question | Primary Location | File Count |
|---------------|------------------|------------|
| "What CLI commands are available?" | `/docs/cli/` | 13 files |
| "How do I use Elementor CLI?" | `/docs/cli/` | 13 files |

### Getting Started

| User Question | Primary Location | File Count |
|---------------|------------------|------------|
| "How do I get started with Elementor?" | `/docs/getting-started/` | 6 files |
| "How do I develop add-ons?" | `/docs/addons/` | 6 files |

---

## All 45 Editor Controls Reference

### Text-Based Controls
- Text Control
- Textarea Control
- Number Control
- URL Control
- Code Control
- WYSIWYG Control

### Visual Controls
- Color Control
- Media Control
- Gallery Control
- Icon Control
- Image Dimensions Control

### Select Controls
- Choose Control
- Select Control
- Select2 Control
- Font Control

### Layout Controls
- Dimensions Control
- Slider Control
- Border Control
- Box Shadow Control
- Text Shadow Control
- Typography Control

### Advanced Controls
- Repeater Control
- Popover Toggle Control
- Tab Control
- Section Control
- Divider Control
- Raw HTML Control
- Button Control
- Hidden Control

**Full list location:** `/docs/editor-controls/`

---

## Common Development Workflows

### 1. "I want to create a custom Elementor widget"

**Search Order:**
1. `/docs/getting-started/` - Setup basics
2. `/docs/widgets/creating-a-new-widget.md` - Widget creation
3. `/docs/widgets/widget-structure.md` - Widget structure
4. `/docs/editor-controls/` - Add controls (45 types)
5. `/docs/widgets/registering-a-widget.md` - Register widget
6. `/docs/widgets/widget-rendering.md` - Render output

**Also check WordPress docs:**
- WordPress `/plugins/plugin-basics/` - Plugin structure
- WordPress `/plugins/hooks/` - WordPress hooks

### 2. "I want to add a specific control to my widget"

**Search Pattern:**
```bash
# Find control documentation
grep -r "control-name" /Users/andrewpage/documents/clients/_docs/Elementor/docs/editor-controls/ --include="*.md" -i
```

**All controls:** `/docs/editor-controls/` (45 files)

### 3. "I want to create an Elementor theme"

**Search Order:**
1. `/docs/themes/` - Theme development
2. `/docs/hello-elementor-theme/` - Base theme
3. `/docs/theme-conditions/` - Template logic
4. `/docs/hooks/` - Theme hooks

**Also check WordPress docs:**
- WordPress `/themes/` - WordPress theme basics
- WordPress `/themes/template-hierarchy/` - Template structure

### 4. "I want to customize Elementor's editor"

**Search Order:**
1. `/docs/editor/` - Editor API
2. `/docs/context-menu/` - Context menu customization
3. `/docs/finder/` - Finder customization
4. `/docs/hooks/` - Editor hooks

### 5. "I want to extend Elementor with an add-on"

**Search Order:**
1. `/docs/getting-started/` - Setup
2. `/docs/addons/` - Add-on development
3. `/docs/widgets/` - Custom widgets
4. `/docs/hooks/` - Integration hooks

**Also check WordPress docs:**
- WordPress `/plugins/plugin-basics/` - Plugin structure

### 6. "I want to add dynamic content"

**Search Order:**
1. `/docs/dynamic-tags/` - Dynamic tags
2. `/docs/hooks/` - Dynamic content hooks

### 7. "I want to customize forms"

**Search Order:**
1. `/docs/form-fields/` - Custom form fields
2. `/docs/form-actions/` - Form actions

---

## Integration with WordPress Documentation

When questions involve both Elementor and WordPress:

### "I want to create an Elementor widget plugin"

**Elementor Docs:**
- `/docs/widgets/` - Widget creation
- `/docs/editor-controls/` - Controls
- `/docs/addons/` - Add-on structure

**WordPress Docs:**
- `/plugins/plugin-basics/` - Plugin structure
- `/plugins/security/` - Security (nonces, validation)
- `/coding-standards/` - PHPCS compliance
- `/plugins/hooks/` - WordPress hooks

### "I want to enqueue scripts in Elementor"

**Elementor Docs:**
- `/docs/scripts-styles/` - Asset management
- `/docs/widgets/widget-scripts.md` - Widget scripts

**WordPress Docs:**
- `/plugins/javascript/enqueuing/` - wp_enqueue_script

### "I want to create a complete Elementor theme"

**Elementor Docs:**
- `/docs/themes/` - Elementor theme structure
- `/docs/hello-elementor-theme/` - Base theme
- `/docs/theme-conditions/` - Template conditions

**WordPress Docs:**
- `/themes/` - WordPress theme basics
- `/themes/template-hierarchy/` - Template structure
- `/css/` or `/bootstrap/` - Styling
- `/php/` - PHP syntax

---

## Hook Reference Patterns

All Elementor hooks are documented in `/docs/hooks/` (14 files)

**Common hook categories:**
- Widget hooks
- Editor hooks
- Frontend hooks
- Theme hooks
- Form hooks

```bash
# Search for specific hook
grep -r "hook_name" /Users/andrewpage/documents/clients/_docs/Elementor/docs/hooks/ --include="*.md"
```

---

## JavaScript API Reference

Location: `/js-api/` (50+ files)

**Common JS API topics:**
- Editor initialization
- UI components
- Events
- Commands
- Modules

```bash
# Search JS API
grep -r "topic" /Users/andrewpage/documents/clients/_docs/Elementor/js-api/ --include="*.md" -i
```

---

## CLI Commands Reference

Location: `/docs/cli/` (13 files)

**Available CLI commands:**
- Widget generation
- Add-on scaffolding
- Development tools

```bash
# Search CLI commands
grep -r "command" /Users/andrewpage/documents/clients/_docs/Elementor/docs/cli/ --include="*.md" -i
```

---

## Deprecations & Version Compatibility

Location: `/docs/deprecations/` (4 files)

Check here for:
- Deprecated functions
- Breaking changes
- Migration guides
- Version compatibility

```bash
# Check deprecations
grep -r "deprecated\|version" /Users/andrewpage/documents/clients/_docs/Elementor/docs/deprecations/ --include="*.md" -i
```

---

## File Organization Summary

```
Elementor/
├── docs/
│   ├── editor-controls/     45 files - ALL control types
│   ├── widgets/             17 files - Widget development
│   ├── hooks/               14 files - Customization hooks
│   ├── cli/                 13 files - CLI tools
│   ├── getting-started/      6 files - Setup guides
│   ├── addons/               6 files - Add-on development
│   ├── themes/               5 files - Theme development
│   ├── theme-conditions/     4 files - Template logic
│   ├── context-menu/         4 files - UI customization
│   ├── deprecations/         4 files - Version compatibility
│   ├── form-fields/          3 files - Custom forms
│   ├── hello-elementor-theme/ 2 files - Base theme
│   ├── editor/               2 files - Editor API
│   ├── finder/               2 files - Search
│   ├── scripts-styles/       2 files - Assets
│   ├── controls/             2 files - Control base
│   ├── managers/             1 file  - Managers
│   ├── dynamic-tags/         1 file  - Dynamic content
│   └── form-actions/         1 file  - Form processing
└── js-api/                  50+ files - JavaScript API
```

---

## Search Tips for Claude

### Find Control Type
```bash
grep -r "control-name" /Users/andrewpage/documents/clients/_docs/Elementor/docs/editor-controls/ --include="*.md" -i
```

### Find Hook
```bash
grep -r "hook-name" /Users/andrewpage/documents/clients/_docs/Elementor/docs/hooks/ --include="*.md"
```

### Search All Elementor Docs
```bash
grep -r "search-term" /Users/andrewpage/documents/clients/_docs/Elementor/ --include="*.md" -i
```

### List All Controls
```bash
ls /Users/andrewpage/documents/clients/_docs/Elementor/docs/editor-controls/
```

---

## When User Asks...

| Question Pattern | Action |
|------------------|--------|
| "Where's the Elementor documentation for X?" | Search Elementor docs with grep |
| "How do I create X in Elementor?" | Check workflow section, search specific folders |
| "What controls does Elementor have?" | Reference `/docs/editor-controls/` (45 files) |
| "What hooks are available?" | Search `/docs/hooks/` (14 files) |
| "How do I build an Elementor theme?" | Use theme workflow, reference `/docs/themes/` and WordPress `/themes/` |
| "Show me Elementor examples" | Search all docs, read relevant files |

---

## Quick Stats

**Total Files:** 183 markdown files

**Top Categories:**
- Editor Controls: 45 files
- Widgets: 17 files
- Hooks: 14 files
- CLI: 13 files
- Getting Started: 6 files
- Add-ons: 6 files
- Themes: 5 files

---

**Repository:** https://github.com/oscarcandoit/elementor-docs
**Companion:** https://github.com/oscarcandoit/wordpress (3,293 files)
**Local Path:** `/Users/andrewpage/documents/clients/_docs/Elementor/`
