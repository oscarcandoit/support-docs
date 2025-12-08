# DataForSEO API Documentation

**Added:** December 8, 2025  
**Source:** DataForSEO Complete API Documentation  
**Purpose:** TicketHQ Marketing SEO Research & Competitive Analysis

## Overview

This directory contains the complete DataForSEO API documentation for use with TicketHQ marketing and SEO research initiatives. The documentation covers all API endpoints and features available for keyword research, competitor analysis, and SERP data.

## Key API Categories for TicketHQ Marketing

### 1. Keywords Data API
**Priority: HIGH** - Essential for keyword research and content strategy
- `google_keywords_for_site_live` - Find keywords competitors rank for
- `google_keyword_suggestions_live` - Expand keyword lists
- `google_search_volume_live` - Get search volume data
- `google_keyword_difficulty_live` - Assess ranking difficulty

### 2. DataForSEO Labs API  
**Priority: HIGH** - Advanced competitive analysis
- `google_competitors_domain_live` - Identify direct competitors
- `google_domain_intersection_live` - Find keyword overlaps
- `google_serp_competitors_live` - SERP competitive analysis
- `google_keyword_ideas_live` - Keyword discovery

### 3. SERP API
**Priority: MEDIUM** - SERP feature analysis
- `google_serp_advanced` - Detailed SERP analysis
- `google_serp_competitors_live` - Who ranks for target keywords

### 4. Content Analysis API
**Priority: MEDIUM** - Content strategy insights
- `content_analysis_search_live` - Content performance analysis
- `content_analysis_summary_live` - Content trends

### 5. Backlinks API
**Priority: LOW** - Link building research (future use)
- `backlinks_overview` - Domain authority analysis
- `backlinks_competitors_live` - Competitor link analysis

## TicketHQ Marketing Use Cases

### Competitive Keyword Analysis
**Endpoints:**
- `dataforseo_labs/google/competitors_domain_live` - Find competitors
- `dataforseo_labs/google/domain_intersection_live` - Keyword gaps
- `keywords_data/google/keywords_for_site_live` - Competitor keywords

**Target Competitors:**
- zendesk.com
- freshdesk.com
- helpscout.com
- dubsado.com
- clientjoy.com (refrens.com)

### Keyword Research for Content Strategy
**Endpoints:**
- `keywords_data/google/keyword_suggestions_live` - Expand seed keywords
- `keywords_data/google/search_volume_live` - Validate search volume
- `dataforseo_labs/google/keyword_ideas_live` - Discover new keywords

**Primary Keywords to Research:**
- "support ticket software for agencies"
- "agency helpdesk software" 
- "white label helpdesk software"
- "gohighlevel support system"
- "wordpress support ticket plugin"

### SERP Analysis for Content Optimization
**Endpoints:**
- `serp/google/advanced_live` - Detailed SERP features
- `dataforseo_labs/google/serp_competitors_live` - Ranking competitors

**Goals:**
- Identify featured snippet opportunities
- Analyze People Also Ask questions
- Find content format preferences (lists, guides, comparisons)

### Content Gap Analysis
**Endpoints:**
- `content_analysis/search_live` - Content performance trends
- `content_analysis/phrase_trends_live` - Topic trending analysis

**Focus Areas:**
- Agency support best practices
- GoHighLevel integration tutorials
- WordPress agency workflows

## API Authentication & Setup

### Authentication
All DataForSEO API calls require:
```bash
curl -u "apage@mywebchef.com:9bdfd70ba2f10120" \
```

### Rate Limits
- Standard: 2000 requests/day
- Monitor usage via `/appendix/user_data` endpoint

### Base URL
```
https://api.dataforseo.com/v3/
```

## TicketHQ Marketing Workflow

### Phase 1: Competitive Intelligence (Week 1-2)
1. **Competitor Discovery**
   - Use `competitors_domain_live` to find main competitors
   - Analyze top 10 competitors in helpdesk/agency tools space

2. **Keyword Gap Analysis** 
   - Use `domain_intersection_live` to find keyword opportunities
   - Identify high-volume, low-competition keywords

3. **SERP Analysis**
   - Use `serp_competitors_live` for target keywords
   - Map content types that rank well

### Phase 2: Keyword Expansion (Week 3-4)
1. **Seed Keyword Research**
   - Start with core TicketHQ keywords
   - Use `keyword_suggestions_live` to expand lists
   - Validate with `search_volume_live`

2. **Intent Classification**
   - Group keywords by search intent
   - Prioritize commercial investigation keywords
   - Identify information/educational opportunities

### Phase 3: Content Strategy (Week 5-6)
1. **Content Gap Analysis**
   - Find topics competitors aren't covering
   - Use `content_analysis_search_live` for trend data
   - Plan content calendar based on opportunities

2. **SERP Feature Targeting**
   - Identify featured snippet opportunities
   - Plan FAQ and how-to content
   - Optimize for People Also Ask sections

## Documentation Files by Priority

### Essential Reading
1. `docs.dataforseo.com_v3_auth_.md` - Authentication setup
2. `docs.dataforseo.com_v3_appendix_user_data_.md` - Account limits
3. `docs.dataforseo.com_v3_dataforseo_labs_google_competitors_domain_live_.md`
4. `docs.dataforseo.com_v3_keywords_data_google_search_volume_live_.md`
5. `docs.dataforseo.com_v3_serp_google_advanced_live_.md`

### Campaign-Specific Documentation
- **GHL Campaign**: Focus on keyword suggestions and competitor analysis
- **WordPress Campaign**: Emphasize content analysis and plugin-related keywords
- **Agency Focus**: Prioritize B2B keywords and agency-specific terminology

## Next Steps

1. **Setup API Access** - Verify credentials work with simple user_data call
2. **Competitor Analysis** - Start with main competitors (Zendesk, Freshdesk)
3. **Keyword Research** - Begin with core TicketHQ keywords
4. **Content Planning** - Use research to inform content calendar
5. **Performance Tracking** - Monitor keyword rankings and content performance

## Integration with TicketHQ Marketing Strategy

This DataForSEO research directly supports:
- **Blog content strategy** outlined in `/Users/apage/tickethq/_prompts/seo-marketing/2025-12-08_CONTENT_STRATEGY.md`
- **SEO keyword targeting** from `/Users/apage/tickethq/_prompts/seo-marketing/2025-12-08_SEO_KEYWORD_STRATEGY.md`  
- **Competitive positioning** defined in `/Users/apage/tickethq/_prompts/core-reference/2025-12-08_COMPETITIVE_LANDSCAPE.md`

Use this documentation to execute the research tasks outlined in the TicketHQ marketing prompt files.