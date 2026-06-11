import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Memorial from './components/Memorial';
import SignatureDishes from './components/SignatureDishes';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Memorial />
        <SignatureDishes />
        <Menu />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
