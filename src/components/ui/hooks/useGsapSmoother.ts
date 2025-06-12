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
