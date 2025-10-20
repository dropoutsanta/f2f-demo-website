import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function HelpForStartupsPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations('startups');
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2c5a8a] to-[#4a7ba7] text-white py-20">
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

          {/* Support Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-5">🚀</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('support.registration')}</h4>
              <p className="text-gray-700">{t('support.registrationText')}</p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-5">💡</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('support.mentorship')}</h4>
              <p className="text-gray-700">{t('support.mentorshipText')}</p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-5">🎓</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('support.training')}</h4>
              <p className="text-gray-700">{t('support.trainingText')}</p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-5">🌐</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('support.networking')}</h4>
              <p className="text-gray-700">{t('support.networkingText')}</p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-5">💰</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('support.funding')}</h4>
              <p className="text-gray-700">{t('support.fundingText')}</p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-5">🏢</div>
              <h4 className="text-xl font-semibold mb-4 text-[#1a3b5d]">{t('support.coworking')}</h4>
              <p className="text-gray-700">{t('support.coworkingText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h3 className="text-4xl font-bold text-center mb-12 text-[#1a3b5d]">{t('programs.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#2c5a8a] relative">
              <span className="absolute top-6 right-6 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Active
              </span>
              <h4 className="text-2xl font-semibold mb-4 text-[#1a3b5d]">{t('programs.hub')}</h4>
              <p className="text-gray-700">{t('programs.hubText')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#2c5a8a] relative">
              <span className="absolute top-6 right-6 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Active
              </span>
              <h4 className="text-2xl font-semibold mb-4 text-[#1a3b5d]">{t('programs.export')}</h4>
              <p className="text-gray-700">{t('programs.exportText')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#2c5a8a] relative">
              <span className="absolute top-6 right-6 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Active
              </span>
              <h4 className="text-2xl font-semibold mb-4 text-[#1a3b5d]">{t('programs.digital')}</h4>
              <p className="text-gray-700">{t('programs.digitalText')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#2c5a8a] relative">
              <span className="absolute top-6 right-6 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Active
              </span>
              <h4 className="text-2xl font-semibold mb-4 text-[#1a3b5d]">{t('programs.women')}</h4>
              <p className="text-gray-700">{t('programs.womenText')}</p>
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

