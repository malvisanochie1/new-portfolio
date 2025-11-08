import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function Contact() {
  const FORM_ENDPOINT = "https://formspree.io/f/xnngbyrk"; 
  const STORAGE_KEY = "portfolio_form_submissions";
  const LIMIT = 3;

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      setCount(parsed?.count ?? 0);
    } catch {}
  }, []);

  const mutation = useMutation({
    mutationFn: async (payload: {
      name: string;
      email: string;
      company: string;
      interest: string;
      message: string;
    }) => {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message || "Failed to send");
      }
      return res;
    },
    onSuccess: () => {
      const newCount = count + 1;
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ count: newCount, lastSaved: Date.now() })
      );
      setCount(newCount);
      setForm({ name: "", email: "", company: "", interest: "", message: "" });
      toast.success(`✅ Message sent! (${newCount}/${LIMIT})`);
    },
    onError: (error: unknown) => {
      const errorMessage =
        error && typeof error === "object" && "message" in error
          ? (error as { message?: string }).message
          : undefined;
      toast.error(errorMessage || "❌ Failed to send message");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (count >= LIMIT) {
      toast.error("⚠️ You have reached the maximum number of submissions.");
      return;
    }
    mutation.mutate(form);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

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
                <form className="" onSubmit={handleSubmit} method="POST">
                  <div className="flex flex-col py-4 sm:pb-8 px-4 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="input"
                        value={form.name}
                        onChange={handleChange}
                        disabled={
                          count >= LIMIT || mutation.status === "pending"
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="input"
                        value={form.email}
                        onChange={handleChange}
                        disabled={
                          count >= LIMIT || mutation.status === "pending"
                        }
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Company"
                        type="text"
                        name="company"
                        className="input"
                        value={form.company}
                        onChange={handleChange}
                        disabled={
                          count >= LIMIT || mutation.status === "pending"
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="interest"
                        placeholder="interested in..."
                        className="input"
                        value={form.interest}
                        onChange={handleChange}
                        disabled={
                          count >= LIMIT || mutation.status === "pending"
                        }
                      />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={4}
                      className="textarea"
                      value={form.message}
                      onChange={handleChange}
                      disabled={count >= LIMIT || mutation.status === "pending"}
                    />
                    <div className="flex gap-4 items-center justify-end px-4 md:px-8 pt-4">
                      <button
                        type="submit"
                        disabled={
                          count >= LIMIT || mutation.status === "pending"
                        }
                        className={`block rounded-lg text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base  ${
                          LIMIT ? "cursor-pointer" : "cursor-not-allowed"
                        } `}
                      >
                        {mutation.status === "pending"
                          ? "Sending..."
                          : count >= LIMIT
                          ? "Limit Reached"
                          : "Send Message"}
                      </button>
                      <Link
                        href="https://wa.me/+2348121437432?text=Hello%20Malvis%20👋%0AComing%20from%20your%20Portfolio"
                        target="blank"
                        className="whatsapp"
                      >
                        <IoLogoWhatsapp />
                      </Link>
                      <Link
                        href="mailto:malvisanochie97@gmail.com"
                        target="blank"
                        className="whatsapp"
                      >
                        <MdOutlineAttachEmail />
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
}
