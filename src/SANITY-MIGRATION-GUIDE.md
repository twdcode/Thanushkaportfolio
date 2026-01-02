# Sanity.io Migration Guide

This document explains how to migrate from the current JSON-based case study system to Sanity.io CMS without changing the template structure or routing logic.

## Current Architecture

### Data Layer
- **Source**: `/content/all-case-studies.ts` - Single TypeScript file containing an array of case study objects
- **Helper Functions**: 
  - `getCaseStudyBySlug(slug)` - Retrieves a single case study by slug
  - `getAllCaseStudies()` - Retrieves all case studies

### Routing
- **App.tsx** uses hash-based routing (`#/case-study/{slug}`)
- Dynamically resolves case study data using `getCaseStudyBySlug(slug)`
- Template remains completely separate from data source

## Sanity.io Migration Steps

### 1. Install Sanity Client
```bash
npm install @sanity/client
```

### 2. Create Sanity Config
Create `/lib/sanity.ts`:
```typescript
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});
```

### 3. Create Case Study Schema in Sanity Studio
```javascript
// schemas/caseStudy.js
export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    // ... add all other fields matching the current data structure
  ]
}
```

### 4. Replace Data Fetching Functions

Update `/content/all-case-studies.ts` to use Sanity:

```typescript
import { sanityClient } from '../lib/sanity';

// Replace getCaseStudyBySlug
export async function getCaseStudyBySlug(slug: string) {
  const query = `*[_type == "caseStudy" && slug.current == $slug][0]`;
  return await sanityClient.fetch(query, { slug });
}

// Replace getAllCaseStudies
export async function getAllCaseStudies() {
  const query = `*[_type == "caseStudy"]`;
  return await sanityClient.fetch(query);
}
```

### 5. Update App.tsx for Async Data Fetching

Modify App.tsx to handle async data:

```typescript
// Add loading state
const [caseStudyData, setCaseStudyData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  if (currentPage.type === 'case-study' && currentPage.slug) {
    setLoading(true);
    getCaseStudyBySlug(currentPage.slug)
      .then(data => {
        setCaseStudyData(data);
        setLoading(false);
      });
  }
}, [currentPage]);

// Add loading UI
if (loading) {
  return <div>Loading...</div>;
}
```

## Key Benefits of This Architecture

1. **Zero Template Changes**: CaseStudyTemplate.tsx requires no modifications
2. **Consistent Data Structure**: Sanity schema matches existing JSON structure exactly
3. **Single Point of Change**: Only `/content/all-case-studies.ts` needs updating
4. **Drop-in Replacement**: Helper functions maintain the same signature
5. **Future-Proof**: Routing logic remains unchanged

## Testing the Migration

1. Import existing case study data into Sanity Studio
2. Test `getCaseStudyBySlug()` returns correct data
3. Verify all case study pages render correctly
4. Check that navigation between case studies works
5. Test 404 handling for invalid slugs

## Rollback Strategy

If issues arise, simply revert `/content/all-case-studies.ts` to the original JSON version. No other files need changing.
