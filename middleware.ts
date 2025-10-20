import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'sr-Latn',
  
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(sr|sr-Latn|en)/:path*',
    // Enable a redirect to a matching locale at the root
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};

