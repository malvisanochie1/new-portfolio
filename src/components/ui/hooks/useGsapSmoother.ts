import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function useGsapSmoother() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    (async () => {
      const ScrollSmoother = (await import("gsap/ScrollSmoother")).default;
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });

      const isDesktop = window.innerWidth >= 768; // you can tweak this breakpoint

      let timeout: NodeJS.Timeout;

      const onScroll = () => {
        if (!isDesktop) return; // 💡 Skip bounce logic for mobile

        clearTimeout(timeout);

        timeout = setTimeout(() => {
          const scrollY = smoother.scrollTop();

          const wrapper = document.getElementById("smooth-wrapper");
          const content = document.getElementById("smooth-content");

          if (!wrapper || !content) return;

          const wrapperHeight = wrapper.clientHeight;
          const contentHeight = content.scrollHeight;

          const maxScroll = contentHeight - wrapperHeight;

          if (maxScroll - scrollY < 50 && scrollY > 80) {
            smoother.scrollTo(scrollY - 50, true);
          }
        }, 200);
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    })();
  }, []);
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
