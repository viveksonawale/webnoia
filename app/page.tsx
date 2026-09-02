import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import MembershipBenefits from "./components/MembershipBenefits";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
        <Hero />
        <Services />
        <HowItWorks />
        {/* <MembershipBenefits /> */}
        <Testimonials />
        {/* <Pricing /> */}
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
