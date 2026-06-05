import { Footer, Navbar } from '@/components/layout';
import {
  About,
  Contact,
  Hero,
  Marquee,
  Process,
  Services,
} from '@/components/sections';

export default function Home() {
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
