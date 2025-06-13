// import Image from "next/image";
// import { ModeToggle } from "@/components/dark-theme-toggle";
// import { div } from "framer-motion/client";
"use client";
import Navbar from "@/components/navbar/navbar";
// import SmoothScroll from "@/components/ui/smoothScroll";
import Homesec from "@/components/sections/home";
import MyServices from "@/components/sections/service";
export default function Home() {
  return (
    <div className="bg-default text-gray-300">
      {/* Navbar */}
      <Navbar />
      {/* End of Navber */}
      {/* Home */}
      <section className=" w-full -bg-slate-900" id="home">
        <Homesec />
      </section>
      {/* End of Home */}
      {/* About */}
      {/* <SmoothScroll> */}
      <section className="" id="service">
        <MyServices />
      </section>
      {/* </SmoothScroll> */}
      {/* End of About */}
      {/* Skills */}
      <section className="h-screen w-full bg-red-200" id="skills"></section>
      {/* End of Skills */}
      {/* Portfolio */}
      <section className="h-screen w-full bg-red-800" id="portfolio"></section>
      {/* End of Portfolio */}
      {/* Service */}
      <section className="h-screen w-full bg-red-300" id="about"></section>
      {/* End of Service */}
      {/* Contact */}
      <section className="h-screen w-full bg-red-600" id="contact"></section>
      {/* End of Contact */}
    </div>
  );
}
