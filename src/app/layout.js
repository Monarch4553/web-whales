import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import "./globals.css"
import { DefaultSeo } from "next-seo";

 

const defaultSeoConfig = {
  title: 'WebWhale | Mobile & Web Development | Full Stack Solutions',
  description: 'WebWhale specializes in delivering cutting-edge mobile and web development solutions. From responsive design to scalable backend systems, we offer full-stack development services tailored to your business needs. Partner with us to transform your ideas into robust digital products.',
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
    <>
      <DefaultSeo {...defaultSeoConfig} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Providers>
        <Navbar />
        {children}
        <Footer />
      </Providers>
    </>
  );
}
