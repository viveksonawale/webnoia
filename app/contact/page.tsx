import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Contact Us | Webnoia",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full pt-40 pb-20 min-h-[60vh]">
        <div className="max-w-4xl w-full px-5 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">Content for Contact Us coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
