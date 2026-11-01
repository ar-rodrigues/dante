import { Footer, Navbar } from '@/components/layout';
import { About } from '@/components/sections/About/About';
import { Contact } from '@/components/sections/Contact/Contact';
import { Hero } from '@/components/sections/Hero/Hero';
import { Marquee } from '@/components/sections/Marquee/Marquee';
import { Process } from '@/components/sections/Process/Process';
import { Services } from '@/components/sections/Services/Services';

/** Sitio completo — se muestra en `/sitio` y en `/` cuando SITE_MODE es `live`. */
export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
