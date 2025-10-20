# Deployment Guide for PKS Next.js Website

## Project Overview

The PKS website is now a fully functional Next.js 15 application with:
- ✅ Multi-language support (Serbian Cyrillic, Serbian Latin, English)
- ✅ Three pages (Home, Invest in Serbia, Help for Startups)
- ✅ Face2Face SDK integration
- ✅ Responsive Tailwind CSS design
- ✅ Production-ready build

## Local Development

### Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Test Production Build

```bash
npm start
```

## Deploy to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - PKS Next.js website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js settings
6. Click "Deploy"

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

If needed, add environment variables in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add `NEXT_PUBLIC_F2F_ORG_ID=68f1fbfe3a19eb968731a760`

## Domain Configuration

After deployment:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel

## Language URLs

The website will be available at:
- Default (Serbian Latin): `https://your-domain.com`
- Serbian Cyrillic: `https://your-domain.com/sr`
- English: `https://your-domain.com/en`

Users can switch languages using the header switcher.

## Post-Deployment Checklist

- [ ] Test all three language versions
- [ ] Test navigation between pages
- [ ] Verify F2F SDK loads correctly
- [ ] Test responsive design on mobile devices
- [ ] Check page load performance in Vercel Analytics
- [ ] Set up custom domain (if applicable)

## Troubleshooting

### Build Fails on Vercel

If the build fails, check:
1. Node version (use 18.x or higher)
2. Dependencies are correctly installed
3. Environment variables are set

### Language Switching Not Working

- Ensure middleware is properly configured
- Check that all translation files exist in `messages/` folder

### F2F SDK Not Loading

- Verify the organization ID in `app/[locale]/layout.tsx`
- Check browser console for errors

## Performance

The site is optimized with:
- Static page generation where possible
- Optimized images
- Minimal JavaScript bundle
- Tailwind CSS purging unused styles

## Support

For issues or questions:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Check [next-intl Documentation](https://next-intl-docs.vercel.app/)
- Contact: info@pks.rs

