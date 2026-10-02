import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Showcase from "@/app/components/Showcase";
import Work from "@/app/components/Work";
import ContactCTA from "@/app/components/ContactCTA";

export const metadata = {
  title: "Our Work | Webnoia",
  description: "Browse our portfolio of modern websites, web applications, and custom software.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full pt-24 md:pt-28">
        <Showcase />
        <Work />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
