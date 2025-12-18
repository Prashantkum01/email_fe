import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import Footer from '../components/common/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
       <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
