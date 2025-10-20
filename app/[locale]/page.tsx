import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const heroT = await getTranslations('hero');
  const aboutT = await getTranslations('about');
  const servicesT = await getTranslations('services');
  const statsT = await getTranslations('stats');
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection locale={locale} t={heroT} />
      
      {/* About Section */}
      <AboutSection t={aboutT} />
      
      {/* Services Section */}
      <ServicesSection t={servicesT} />
      
      {/* Stats Section */}
      <StatsSection t={statsT} />
    </>
  );
}

function HeroSection({locale, t}: {locale: string; t: any}) {
  
  return (
    <section className="relative bg-gradient-to-br from-[#1a3b5d] to-[#2c5a8a] text-white py-24 md:py-32">
      <div className="container-custom text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">{t('title')}</h2>
        <p className="text-xl md:text-2xl mb-10 opacity-90">{t('subtitle')}</p>
        <div className="flex flex-wrap gap-5 justify-center">
          <Link href={`/${locale}/invest-in-serbia`} className="btn btn-primary">
            {t('ctaInvest')}
          </Link>
          <Link href={`/${locale}/help-for-startups`} className="btn btn-secondary">
            {t('ctaStartup')}
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutSection({t}: {t: any}) {
  
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h3 className="text-4xl font-bold text-center mb-12 text-[#1a3b5d]">{t('title')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-5xl mb-5">🏢</div>
            <h4 className="text-2xl font-semibold mb-4 text-[#1a3b5d]">{t('whoWeAre')}</h4>
            <p className="text-gray-700 leading-relaxed">{t('whoWeAreText')}</p>
          </div>
          <div className="card text-center">
            <div className="text-5xl mb-5">🤝</div>
            <h4 className="text-2xl font-semibold mb-4 text-[#1a3b5d]">{t('mission')}</h4>
            <p className="text-gray-700 leading-relaxed">{t('missionText')}</p>
          </div>
          <div className="card text-center">
            <div className="text-5xl mb-5">🌍</div>
            <h4 className="text-2xl font-semibold mb-4 text-[#1a3b5d]">{t('network')}</h4>
            <p className="text-gray-700 leading-relaxed">{t('networkText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({t}: {t: any}) {
  
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h3 className="text-4xl font-bold text-center mb-12 text-[#1a3b5d]">{t('title')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#2c5a8a] hover:bg-gray-100 transition-colors">
            <h4 className="text-xl font-semibold mb-3 text-[#1a3b5d]">{t('businessSupport')}</h4>
            <p className="text-gray-700">{t('businessSupportText')}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#2c5a8a] hover:bg-gray-100 transition-colors">
            <h4 className="text-xl font-semibold mb-3 text-[#1a3b5d]">{t('internationalTrade')}</h4>
            <p className="text-gray-700">{t('internationalTradeText')}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#2c5a8a] hover:bg-gray-100 transition-colors">
            <h4 className="text-xl font-semibold mb-3 text-[#1a3b5d]">{t('legalServices')}</h4>
            <p className="text-gray-700">{t('legalServicesText')}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#2c5a8a] hover:bg-gray-100 transition-colors">
            <h4 className="text-xl font-semibold mb-3 text-[#1a3b5d]">{t('educationTraining')}</h4>
            <p className="text-gray-700">{t('educationTrainingText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection({t}: {t: any}) {
  
  return (
    <section className="section bg-gradient-to-br from-[#2c5a8a] to-[#1a3b5d] text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-5xl md:text-6xl font-bold text-[#E74C3C] mb-3">70,000+</h3>
            <p className="text-xl">{t('companies')}</p>
          </div>
          <div>
            <h3 className="text-5xl md:text-6xl font-bold text-[#E74C3C] mb-3">200+</h3>
            <p className="text-xl">{t('chambers')}</p>
          </div>
          <div>
            <h3 className="text-5xl md:text-6xl font-bold text-[#E74C3C] mb-3">167+</h3>
            <p className="text-xl">{t('experience')}</p>
          </div>
          <div>
            <h3 className="text-5xl md:text-6xl font-bold text-[#E74C3C] mb-3">15</h3>
            <p className="text-xl">{t('offices')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

