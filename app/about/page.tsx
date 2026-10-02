import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AboutUs from "@/app/components/AboutUs";
import Testimonials from "@/app/components/Testimonials";
import ContactCTA from "@/app/components/ContactCTA";

export const metadata = {
  title: "About Us | Webnoia",
  description: "Learn more about Webnoia, our founders, and our mission to deliver great execution.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full pt-24 md:pt-28">
        <AboutUs className="border-t-0" />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
