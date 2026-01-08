import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';
import Expertise from '@/react-app/components/Expertise';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
