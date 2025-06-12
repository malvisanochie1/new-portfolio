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

      let timeout: NodeJS.Timeout;

      const onScroll = () => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          const scrollY = smoother.scrollTop();

          // Manually select DOM elements
          const wrapper = document.getElementById("smooth-wrapper");
          const content = document.getElementById("smooth-content");

          if (!wrapper || !content) return;

          const wrapperHeight = wrapper.clientHeight;
          const contentHeight = content.scrollHeight;

          const maxScroll = contentHeight - wrapperHeight;

          if (maxScroll - scrollY < 50) {
            smoother.scrollTo(scrollY - 80, true); // Scroll up smoothly
          }
        }, 200);
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    })();
  }, []);
}
