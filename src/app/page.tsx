// import Image from "next/image";
// import { ModeToggle } from "@/components/dark-theme-toggle";
// import { div } from "framer-motion/client";
import Navbar from "@/components/navbar/navbar";
// import SmoothScroll from "@/components/ui/smoothScroll";
import Homesec from "@/components/sections/home";
export default function Home() {
  return (
    <div className="bg-slate-900 text-gray-300">
      {/* Navbar */}
      <Navbar />
      {/* End of Navber */}
      {/* Home */}
      <section className="h-screen w-full bg-slate-900" id="home">
        <Homesec />
      </section>
      {/* End of Home */}
      {/* About */}
      {/* <SmoothScroll> */}
      <section className="h-screen w-full bg-red-900" id="about"></section>
      {/* </SmoothScroll> */}
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
