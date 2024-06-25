import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";


export const metadata = {
  title:'webWhale'
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
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
