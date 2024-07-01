import Head from 'next/head';
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: 'WebWhale | Mobile & Web Development | Full Stack Solutions',
  titleTemplate: '%s | WebWhale',
  defaultTitle: 'WebWhale | Mobile & Web Development | Full Stack Solutions',
  description: 'WebWhale specializes in delivering cutting-edge mobile and web development solutions. From responsive design to scalable backend systems, we offer full-stack development services tailored to your business needs. Partner with us to transform your ideas into robust digital products.',
  canonical: 'https://webwhale.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://webwhale.vercel.app/',
    site_name: 'WebWhale',
    images: [
      {
        url: 'https://webwhale.vercel.app/logo.webp',
        width: 700,
        height: 300,
        alt: 'WebWhale Og Image',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
      </Head>
     <body>
     <Providers>
        <Navbar />
        {children}
        <Footer />
      </Providers>
     </body>
    </html>
  );
}
