// Homepage
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export default function Homepage() {
  return (
    <div className="h-full w-full md:w-[375px]">
      {/* navbar */}
      <Navbar />
      {/* main */}
      <h1 className="text-h1mobile">Homepage</h1>
      {/* footer */} 
      <Footer />
    </div>
  );
}