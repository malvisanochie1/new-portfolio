// import Image from "next/image";
// import { ModeToggle } from "@/components/dark-theme-toggle";
// import { div } from "framer-motion/client";
import Navbar from "@/components/navbar/navbar";
export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* End of Navber */}
      {/* Home */}
      <section className="h-screen w-full bg-red-100" id="home"></section>
      {/* End of Home */}
      {/* About */}
      <section className="h-screen w-full bg-red-900" id="about"></section>
      {/* End of About */}
      {/* Skills */}
      <section className="h-screen w-full bg-red-200" id="skills"></section>
      {/* End of Skills */}
      {/* Portfolio */}
      <section className="h-screen w-full bg-red-800" id="portfolio"></section>
      {/* End of Portfolio */}
      {/* Service */}
      <section className="h-screen w-full bg-red-300" id="service"></section>
      {/* End of Service */}
      {/* Contact */}
      <section className="h-screen w-full bg-red-600" id="contact"></section>
      {/* End of Contact */}
    </div>
  );
}
