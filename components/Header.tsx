'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

const locales = [
  { code: 'sr', label: 'ћир' },
  { code: 'sr-Latn', label: 'lat' },
  { code: 'en', label: 'eng' },
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) {
      // Already on this locale, no need to switch
      return;
    }
    
    // Get the path without any locale prefix
    let pathWithoutLocale = pathname;
    
    // Remove locale prefix if it exists: /sr, /sr-Latn, or /en
    // The regex matches: start of string, slash, one of the locales, then either slash or end
    const localePattern = /^\/(sr-Latn|sr|en)(\/|$)/;
    
    if (localePattern.test(pathname)) {
      // Remove the matched locale prefix
      pathWithoutLocale = pathname.replace(localePattern, (match, locale, slashOrEnd) => {
        // If there's a slash after the locale, keep just the slash
        // If it's end of string (homepage), return just /
        return slashOrEnd === '/' ? '/' : '/';
      });
    }
    
    // Clean up the path
    // Ensure it starts with /
    if (!pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = '/' + pathWithoutLocale;
    }
    
    // Remove double slashes
    pathWithoutLocale = pathWithoutLocale.replace(/\/+/g, '/');
    
    // Remove trailing slash unless it's the root path
    if (pathWithoutLocale !== '/' && pathWithoutLocale.endsWith('/')) {
      pathWithoutLocale = pathWithoutLocale.slice(0, -1);
    }
    
    // Build the new path
    let newPath;
    if (newLocale === 'sr-Latn') {
      // Default locale - no prefix needed
      newPath = pathWithoutLocale;
    } else {
      // Other locales need prefix
      newPath = `/${newLocale}${pathWithoutLocale}`;
    }
    
    console.log('[F2F] Switching locale:', {
      from: locale,
      to: newLocale,
      currentPath: pathname,
      pathWithoutLocale,
      newPath
    });
    
    window.location.href = newPath;
  };

  const handleContactClick = () => {
    // Navigate to contact page first, then refresh
    window.location.href = `/${locale}/contact`;
  };

  return (
    <header className="bg-white text-pks-blue sticky top-0 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link href={`/${locale}`} className="flex items-center">
            <img 
              src="/images/logo_cir@2x.png" 
              alt="Privredna komora Srbije" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link 
              href={`/${locale}`} 
              className="text-pks-blue hover:bg-gray-100 px-4 py-2 rounded transition-colors"
            >
              {t('home')}
            </Link>
            <Link 
              href={`/${locale}/invest-in-serbia`} 
              className="text-pks-blue hover:bg-gray-100 px-4 py-2 rounded transition-colors"
            >
              {t('investInSerbia')}
            </Link>
            <Link 
              href={`/${locale}/help-for-startups`} 
              className="text-pks-blue hover:bg-gray-100 px-4 py-2 rounded transition-colors"
            >
              {t('helpForStartups')}
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Contact Button */}
            <button 
              onClick={handleContactClick}
              className="bg-pks-red text-white px-3 md:px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm md:text-base"
            >
              {t('contact')}
            </button>

            {/* Language Switcher */}
            <div className="hidden md:flex gap-2 border-l border-gray-300 pl-4">
              {locales.map((loc, index) => (
                <span key={loc.code}>
                  <button
                    onClick={() => switchLocale(loc.code)}
                    className={`px-2 py-1 rounded transition-colors ${
                      locale === loc.code
                        ? 'bg-pks-red text-white font-bold'
                        : 'text-pks-blue hover:bg-gray-200'
                    }`}
                  >
                    {loc.label}
                  </button>
                  {index < locales.length - 1 && (
                    <span className="mx-1 text-gray-400">|</span>
                  )}
                </span>
              ))}
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-pks-blue transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-pks-blue transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-pks-blue transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col gap-2 pt-2">
            <Link 
              href={`/${locale}`} 
              className="text-pks-blue hover:bg-gray-100 px-4 py-3 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              href={`/${locale}/invest-in-serbia`} 
              className="text-pks-blue hover:bg-gray-100 px-4 py-3 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('investInSerbia')}
            </Link>
            <Link 
              href={`/${locale}/help-for-startups`} 
              className="text-pks-blue hover:bg-gray-100 px-4 py-3 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('helpForStartups')}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="flex gap-2 px-4 py-3 border-t border-gray-200 mt-2">
              <span className="text-pks-blue font-semibold mr-2">Language:</span>
              {locales.map((loc, index) => (
                <span key={loc.code}>
                  <button
                    onClick={() => {
                      switchLocale(loc.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded transition-colors ${
                      locale === loc.code
                        ? 'bg-pks-red text-white font-bold'
                        : 'text-pks-blue hover:bg-gray-200'
                    }`}
                  >
                    {loc.label}
                  </button>
                  {index < locales.length - 1 && (
                    <span className="mx-1 text-gray-400">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

