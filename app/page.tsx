import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Recognition from "./components/Recognition";
import Work from "./components/Work";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import MembershipBenefits from "./components/MembershipBenefits";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import MobileFloatingChat from "./components/MobileFloatingChat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
        <Hero />
        <Showcase />
        <Recognition />
        <Work />
        <Services />
        <HowItWorks />
        {/* <MembershipBenefits /> */}
        <Testimonials />
        {/* <Pricing /> */}
        <ContactCTA />
        <FAQ />
      </main>
      <Footer />
      <MobileFloatingChat />
    </>
  );
}
