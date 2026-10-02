import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Services from "@/app/components/Services";
import HowItWorks from "@/app/components/HowItWorks";
import ContactCTA from "@/app/components/ContactCTA";

export const metadata = {
  title: "Our Services | Webnoia",
  description: "Explore our premium web design, development, and digital solutions for your business.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full pt-24 md:pt-28">
        <Services className="border-t-0" />
        <HowItWorks />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
