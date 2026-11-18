import { Footer, Navbar, WhatsAppFloat } from '@/components/layout';
import { About } from '@/components/sections/About/About';
import { Contact } from '@/components/sections/Contact/Contact';
import { ExpressServices } from '@/components/sections/ExpressServices/ExpressServices';
import { Faq } from '@/components/sections/Faq/Faq';
import { Funnel } from '@/components/sections/Funnel/Funnel';
import { Hero } from '@/components/sections/Hero/Hero';
import { Marquee } from '@/components/sections/Marquee/Marquee';
import { Portfolio } from '@/components/sections/Portfolio/Portfolio';
import { Problems } from '@/components/sections/Problems/Problems';
import { Services } from '@/components/sections/Services/Services';
import { Team } from '@/components/sections/Team/Team';

/** Sitio completo — se muestra en `/sitio` y en `/` cuando SITE_MODE es `live`. */
export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problems />
        <Services />
        <About />
        <Contact />
        <Team />
        <Portfolio />
        <Funnel />
        <ExpressServices />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
