import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function InvestInSerbiaPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations('invest');
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a3b5d] to-[#2c5a8a] text-white py-20">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.title')}</h2>
          <p className="text-xl md:text-2xl opacity-90">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-4xl font-bold mb-6 text-[#1a3b5d]">{t('intro.title')}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{t('intro.text')}</p>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card border-t-4 border-[#2c5a8a]">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('advantages.location')}</h4>
              <p className="text-gray-700">{t('advantages.locationText')}</p>
            </div>
            <div className="card border-t-4 border-[#2c5a8a]">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('advantages.workforce')}</h4>
              <p className="text-gray-700">{t('advantages.workforceText')}</p>
            </div>
            <div className="card border-t-4 border-[#2c5a8a]">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('advantages.costs')}</h4>
              <p className="text-gray-700">{t('advantages.costsText')}</p>
            </div>
            <div className="card border-t-4 border-[#2c5a8a]">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('advantages.zones')}</h4>
              <p className="text-gray-700">{t('advantages.zonesText')}</p>
            </div>
            <div className="card border-t-4 border-[#2c5a8a]">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('advantages.economy')}</h4>
              <p className="text-gray-700">{t('advantages.economyText')}</p>
            </div>
            <div className="card border-t-4 border-[#2c5a8a]">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('advantages.support')}</h4>
              <p className="text-gray-700">{t('advantages.supportText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h3 className="text-4xl font-bold text-center mb-12 text-[#1a3b5d]">{t('sectors.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2c5a8a] hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[#1a3b5d]">🚗 {t('sectors.automotive')}</h4>
              <p className="text-gray-700">{t('sectors.automotiveText')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2c5a8a] hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[#1a3b5d]">💻 {t('sectors.it')}</h4>
              <p className="text-gray-700">{t('sectors.itText')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2c5a8a] hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[#1a3b5d]">🌾 {t('sectors.agriculture')}</h4>
              <p className="text-gray-700">{t('sectors.agricultureText')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2c5a8a] hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[#1a3b5d]">⚡ {t('sectors.energy')}</h4>
              <p className="text-gray-700">{t('sectors.energyText')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2c5a8a] hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[#1a3b5d]">🏗️ {t('sectors.construction')}</h4>
              <p className="text-gray-700">{t('sectors.constructionText')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2c5a8a] hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[#1a3b5d]">🏥 {t('sectors.healthcare')}</h4>
              <p className="text-gray-700">{t('sectors.healthcareText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[#2c5a8a] to-[#1a3b5d] text-white text-center">
        <div className="container-custom">
          <h3 className="text-4xl font-bold mb-6">{t('cta.title')}</h3>
          <p className="text-xl mb-10 max-w-3xl mx-auto">{t('cta.text')}</p>
          <div className="flex flex-wrap gap-5 justify-center">
            <a href="#" className="btn btn-primary">
              {t('cta.button')}
            </a>
            <Link href={`/${locale}`} className="btn btn-secondary">
              {t('cta.home')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

