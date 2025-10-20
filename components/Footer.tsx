'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');
  const locale = useLocale();

  return (
    <footer className="bg-[#1a3b5d] text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* PKS Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{t('pks')}</h4>
            <p className="text-blue-200 mb-2">{t('description')}</p>
            <p className="text-blue-200">{t('address')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}`} 
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {navT('home')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/invest-in-serbia`} 
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {navT('investInSerbia')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/help-for-startups`} 
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {navT('helpForStartups')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{t('contact')}</h4>
            <p className="text-blue-200 mb-2">{t('email')}</p>
            <p className="text-blue-200">{t('phone')}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 pt-6 text-center">
          <p className="text-blue-200 text-sm">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

