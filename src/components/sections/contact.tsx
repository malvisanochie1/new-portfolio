import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const contact = () => {
  return (
    <div className="h-full w-full bg-[#0a0a16] mb-10" id="contact">
      <div className="h-full rounded-2xl relative overflow-hidden  mx-auto md:max-w-[93%]">
        <Image
          fill
          src="/contact/bg.jpg"
          className="object-center object-cover"
          alt=""
        />
        <div className="absolute top-0 w-full h-full bg-black/60 " />
        <div className="relative z-10 text-white/10  gap-2 h-full flex lg:flex-row flex-col md:p-32 justify-center py-5 sm:py-10 md:py-20 lg:pt-40 px-3">
          <div className="h-full bg-white/10  lg:-mt-20 lg:max-w-80- max-w-96 lg:w-1/2 w-full rounded-3xl backdrop-blur-sm inset-shadow-lg inset-shadow-black mx-auto">
            <div className="">
              <div className="mx-auto max-w-screen-2xl pt-8">
                <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb- lg:text-3xl">
                  Get in touch
                </h2>
                <form className="">
                  <div className="flex flex-col py-4 sm:pb-8 px-4 gap-4">
                    <div>
                      {/* <label htmlFor="name" className="label">
                        NAME
                      </label> */}
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="input"
                      />
                    </div>
                    <div>
                      {/* <label htmlFor="email" className="label">
                        Email
                      </label> */}
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="input"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Company"
                        type="text"
                        name="company"
                        className="input"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="interest"
                        placeholder="interested in..."
                        className="input"
                      />
                    </div>
                    <textarea
                      name=""
                      placeholder="Message"
                      id=""
                      rows={4}
                      className="textarea"
                    ></textarea>
                    <div className="flex gap-4 items-center justify-end px-4 md:px-8 pt-4">
                      <button className="block rounded-lg text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base ">
                        SEND{" "}
                      </button>

                      <Link
                        href="https://wa.me/+2348121437432?text=Hello%20Malvis%20👋%0AComing%20from%20your%20Portfolio"
                        target="blank"
                        className="whatsapp"
                      >
                        <IoLogoWhatsapp />
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col mx-auto bg-blue-700 h-full mt-20 max-w-96 max-w-80- md:w-1/2 w-full rounded-3xl py-20 md:py-28 text-white">
            <div className="px-8 md:px-14">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
                Thank <br />
                You.
              </h1>
            </div>
            <hr className="my-4 md:my-6 border-cyan-600" />{" "}
            <div className="px-8 md:px-14">
              <p className="text-xl sm:text-2xl- ">
                We will be in touch. <br /> shortly!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
