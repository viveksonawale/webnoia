import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactCTA from "@/app/components/ContactCTA";
import FAQ from "@/app/components/FAQ";

export const metadata = {
  title: "Contact Us | Webnoia",
  description: "Get in touch with Webnoia. Book a strategy call or read our frequently asked questions.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full pt-24 md:pt-28">
        <ContactCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
