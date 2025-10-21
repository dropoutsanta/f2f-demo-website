import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';
import Script from 'next/script';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        {/* F2F SDK Script */}
        <Script
          id="f2f-sdk"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,i){
                var f=d.getElementsByTagName(s)[0], j=d.createElement(s);
                j.src="https://f2f-sdk-stage.pages.dev/f2f-sdk.min.js";
                j.id="f2f-sdk";
                j.setAttribute("data-org_id",i);
                f.parentNode.insertBefore(j,f);
              })(window,document,"script","68f1fbfe3a19eb968731a760");
            `,
          }}
        />
        
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

