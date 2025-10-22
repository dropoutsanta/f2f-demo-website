# F2F SDK Integration - Quick Guide

## ✅ Fixed: Navigation Detection Issue

The F2F SDK now natively detects Next.js and other SPA framework route changes!

## What Was Added

### 1. Enhanced SDK Navigation Detection
**File:** `f2f-sdk/src/index.js`

The SDK now natively detects SPA frameworks including:
- **Next.js** - Detects `__next`, `__NEXT_DATA__`, and Next.js router elements
- **React Router** - Detects React Router version and elements
- **Vue Router** - Detects Vue app and router elements  
- **Nuxt.js** - Detects `__NUXT__` and Nuxt elements
- **Gatsby** - Detects Gatsby elements

**How it works:**
- Auto-detects SPA frameworks on load
- Enables lightweight polling (500ms) for navigation changes
- Listens for custom `f2f-route-change` events
- Falls back to polling if history overrides are bypassed

### 2. TypeScript Declarations
**File:** `types/f2f-sdk.d.ts`

Provides TypeScript support for the F2F SDK, enabling:
- Autocomplete for SDK methods
- Type checking for parameters
- Better developer experience

## How to Use

### Basic Setup (Already Done)

The SDK is already configured in `layout.tsx`:

```tsx
<Script
  id="f2f-sdk"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,i){
        var f=d.getElementsByTagName(s)[0], j=d.createElement(s);
        j.src="https://f2f-sdk-stage.pages.dev/f2f-sdk.min.js";
        j.id="f2f-sdk";
        j.setAttribute("data-org_id",i);
        f.parentNode.insertBefore(j,f);
      })(window,document,"script","YOUR_ORG_ID");
    `,
  }}
/>
```

### Using SDK Functions in Your Code

```typescript
'use client';

import { useEffect } from 'react';

export default function MyComponent() {
  useEffect(() => {
    // SDK is available as window.F2FSDK
    if (window.F2FSDK) {
      // Identify a visitor
      window.F2FSDK.identify({
        email: 'user@example.com',
        name: 'John Doe'
      });
      
      // Trigger a workflow
      window.F2FSDK.workflow('workflow_id_here');
      
      // Request an agent
      window.F2FSDK.requestAgent(true); // true = with video
    }
  }, []);
  
  return <div>My Component</div>;
}
```

## Debug Mode

Add `?f2f_debug-mode=true` to any URL to enable debug logging:

```
http://localhost:3000/en?f2f_debug-mode=true
```

You'll see console logs like:
```
[face2face] navigation changed
[face2face] Processing page load triggers...
[F2F WORKFLOW] 🎯 Page load trigger - using client-side engine
```

## What Now Works

✅ **Page tracking** - Every route change is tracked  
✅ **Workflows** - Page-based triggers fire correctly  
✅ **Sparks** - Display on correct pages after navigation  
✅ **Analytics** - All page views logged to BigQuery  
✅ **Visitor updates** - `current_page` field stays in sync  

## Common SDK Methods

```typescript
// Identify visitor
window.F2FSDK.identify({ email: 'user@example.com' });

// Request agent call
window.F2FSDK.requestAgent(true); // with video
window.F2FSDK.requestAgent(false); // audio only

// Trigger workflow
window.F2FSDK.workflow('workflow_id');

// Display popup
window.F2FSDK.popup('workflow_id');

// Send notification
window.F2FSDK.notify('Message', 'channel_id', 'slack');

// Check work hours
const inHours = await window.F2FSDK.checkWorkhours();

// Load chat messages
const messages = await window.F2FSDK.loadChatMessages();

// Send chat message
await window.F2FSDK.sendChatMessage(visitorId, 'Hello!');
```

## Troubleshooting

### SDK not triggering on navigation
- ✅ **Fixed!** - The `F2FNavigationSync` component handles this

### "F2FSDK is not defined" errors
- Make sure you're in a client component (`'use client'`)
- Check that the SDK script has loaded: `if (window.F2FSDK)`

### Workflows not running on specific pages
1. Enable debug mode: `?f2f_debug-mode=true`
2. Check console for workflow evaluation logs
3. Verify workflow conditions in the F2F dashboard

## Files Modified

- ✅ `f2f-sdk/src/index.js` - **UPDATED** - Added SPA framework detection
- ✅ `types/f2f-sdk.d.ts` - **NEW** - TypeScript declarations  
- ✅ `F2F_SDK_NEXTJS_INTEGRATION.md` - **NEW** - Detailed documentation
- ✅ `README_F2F_SDK.md` - **NEW** - This quick guide

## Support

For issues with the F2F SDK integration:
1. Check the browser console with debug mode enabled
2. Review the detailed integration docs: `F2F_SDK_NEXTJS_INTEGRATION.md`
3. Ensure you're on the latest SDK version

