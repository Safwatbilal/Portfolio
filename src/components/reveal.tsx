"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Adds `.in` to .rv / .hl-draw / .draw / .hero-in elements as they scroll into view, and
// `.is-scrolled` to the header. Content is visible by default; the `js` class (set before
// paint in layout.tsx) is what hides it first, so nothing is lost without JavaScript.
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll<HTMLElement>(".rv, .hl-draw, .draw, .hero-in");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const top = document.getElementById("top");
    const update = () => top?.classList.toggle("is-scrolled", scrollY > 8);
    update();
    addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, [pathname]);

  return null;
}
