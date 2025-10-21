'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();

  return (
    <>
      {/* Contact Section - Replaceable */}
      <div id="contact-section" className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-pks-blue text-white py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('title')}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-pks-blue mb-8">
                  {t('getInTouch')}
                </h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-pks-red text-white p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('address')}
                      </h3>
                      <p className="text-gray-600">
                        {t('addressText')}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-pks-red text-white p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('phone')}
                      </h3>
                      <p className="text-gray-600">
                        {t('phoneText')}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-pks-red text-white p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('email')}
                      </h3>
                      <p className="text-gray-600">
                        {t('emailText')}
                      </p>
                    </div>
                  </div>

                  {/* Call Center */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-pks-red text-white p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('callCenter')}
                      </h3>
                      <p className="text-gray-600">
                        {t('callCenterText')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-pks-blue mb-6">
                  {t('sendMessage')}
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('firstName')}
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pks-red focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('lastName')}
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pks-red focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pks-red focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pks-red focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('subject')}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pks-red focus:border-transparent"
                      required
                    >
                      <option value="">{t('selectSubject')}</option>
                      <option value="general">{t('generalInquiry')}</option>
                      <option value="investment">{t('investmentInquiry')}</option>
                      <option value="startup">{t('startupSupport')}</option>
                      <option value="membership">{t('membership')}</option>
                      <option value="other">{t('other')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pks-red focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pks-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    {t('sendMessage')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Office Hours */}
        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-pks-blue mb-8">
                {t('officeHours')}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('weekdays')}
                  </h3>
                  <p className="text-gray-600">
                    {t('weekdaysHours')}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('weekends')}
                  </h3>
                  <p className="text-gray-600">
                    {t('weekendsHours')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="bg-gray-50 py-12">
          <div className="container-custom">
            <div className="text-center">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center px-6 py-3 bg-pks-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {t('backToHome')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
