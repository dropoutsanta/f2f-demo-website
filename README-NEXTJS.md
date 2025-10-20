# PKS Next.js Website

A modern, multilingual replica of the Serbian Chamber of Commerce (pks.rs) website built with Next.js 14, featuring Face2Face SDK integration and support for three languages.

## Features

- 🌐 **Multi-language Support**: Serbian Cyrillic (ћир), Serbian Latin (lat), and English (eng)
- ⚡ **Next.js 14**: Built with App Router for optimal performance
- 🎨 **Tailwind CSS**: Modern, responsive design
- 🔄 **i18n**: Internationalization with next-intl
- 💬 **F2F SDK**: Face2Face video calling integration
- 📱 **Responsive**: Works on all devices

## Pages

1. **Home** (`/`) - Landing page with PKS overview, services, and statistics
2. **Invest in Serbia** (`/invest-in-serbia`) - Investment opportunities and advantages
3. **Help for Startups** (`/help-for-startups`) - Startup support programs and resources

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [Face2Face SDK](https://face2face.io/) - Video communication

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
.
├── app/
│   ├── [locale]/              # Locale-based routing
│   │   ├── layout.tsx         # Root layout with F2F SDK
│   │   ├── page.tsx           # Homepage
│   │   ├── invest-in-serbia/  # Investment page
│   │   └── help-for-startups/ # Startup support page
│   └── globals.css            # Global styles
├── components/
│   ├── Header.tsx             # Navigation with language switcher
│   └── Footer.tsx             # Footer component
├── messages/
│   ├── en.json                # English translations
│   ├── sr-Latn.json           # Serbian Latin translations
│   └── sr.json                # Serbian Cyrillic translations
├── i18n.ts                    # i18n configuration
├── middleware.ts              # Locale routing middleware
└── next.config.ts             # Next.js configuration
```

## Language Switching

The language switcher is located in the header. Users can switch between:
- **ћир** (Serbian Cyrillic - sr)
- **lat** (Serbian Latin - sr-Latn)
- **eng** (English - en)

The default language is Serbian Latin (sr-Latn).

## Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Manual Deploy

```bash
npm install -g vercel
vercel
```

Follow the prompts to complete deployment.

## Adding Translations

To add or modify translations:

1. Open the appropriate JSON file in the `messages/` directory
2. Add or update translation keys
3. Use the translation in your component:

```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('namespace');
  return <h1>{t('key')}</h1>;
}
```

## F2F SDK Configuration

The Face2Face SDK is configured in `app/[locale]/layout.tsx` with organization ID: `68f1fbfe3a19eb968731a760`

To update the SDK configuration, modify the Script component in the layout file.

## Customization

### Colors

PKS brand colors are defined in:
- `tailwind.config.ts` - Tailwind theme
- `app/globals.css` - CSS variables

Main colors:
- PKS Blue: `#2C4C6E`
- PKS Red: `#E74C3C`

### Content

All content is stored in translation files (`messages/*.json`), making it easy to update text without modifying components.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Serbian Chamber of Commerce and Industry. All rights reserved.

## Support

For questions or support, contact: info@pks.rs

