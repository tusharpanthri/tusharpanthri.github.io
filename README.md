# Porting the changes into tusharpanthri.github.io

## 1. Contact modal

Copy `ContactModal.tsx` into `components/`.

Then in the CTA component (the one with the copy-email button), add state and swap the buttons:

```tsx
'use client';
import { useState } from 'react';
import ContactModal from '@/components/ContactModal';

// inside the component:
const [showContact, setShowContact] = useState(false);
```

Primary button (was copy-email):

```tsx
<button
  onClick={() => setShowContact(true)}
  style={{
    background: '#11100D', color: '#FFE119', padding: '19px 32px',
    fontSize: 17, fontWeight: 700, fontFamily: 'Geist, sans-serif',
    border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center',
    gap: 12, minWidth: 320, justifyContent: 'center',
  }}
>
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
  Send me a message
</button>
```

The old copy-email button becomes secondary — keep its `onClick={copyEmail}` and change only its style:

```tsx
style={{
  background: 'transparent', color: '#11100D', padding: '13px 32px',
  fontSize: 15, fontWeight: 600, fontFamily: "'Geist Mono', monospace",
  border: '2px solid #11100D', cursor: 'pointer', display: 'flex',
  alignItems: 'center', gap: 12, minWidth: 320, justifyContent: 'center',
}}
```

Render the modal at the end of the component's JSX:

```tsx
{showContact && <ContactModal onClose={() => setShowContact(false)} />}
```

## 2. Formspree

Create a form at https://formspree.io (free tier = 50 submissions/month), then replace
`YOUR_FORM_ID` in `ContactModal.tsx`. No backend needed — works on GitHub Pages.

## 3. Background dots

In `app/globals.css`, the radial-gradient dot pattern:

```css
/* before */
background-image: radial-gradient(rgba(17,16,13,0.5) 0.5px, transparent 0.5px);
background-size: 30px 30px;

/* after */
background-image: radial-gradient(rgba(17,16,13,0.16) 1px, transparent 1px);
background-size: 28px 28px;
```

## Still open

- Real Medium URLs + excerpts in the `writing` array.
- Trim `lib/quotes.ts` to short one-liners (or add a separate `SHORT_QUOTES`).
