import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <LoadingScreen />
      <CustomCursor />
      <SmoothScroll />
      <BackToTop />
      <Header />
      <main className="relative">
        <Hero />
        <Services />
        <Features />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
