import NavBar from '../../components/navBar';
import Footer from '../../components/footer';
import Hero from '../../pages/Landing/hero';
import AboutStats from './aboutStats';
import ClientLogos from './clientLogos';
import Services from './services';
import Process from './process';
import Testimonials from './testimonials';
import Team from './team';
import CTABanner from './CTAbanner';

function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "#F2F7FF" }}>
      {/* Hero section wraps the Navbar so it sits on the dark teal bg */}
      <div className="relative bg-[#0E1E3D]">
        <NavBar />
        <Hero />
      </div>
        <ClientLogos />
        <Services />
        <AboutStats />
        <Process />
        <Testimonials />
        <Team />
        <CTABanner />

      <Footer />
    </div>
  );

}
export default LandingPage;