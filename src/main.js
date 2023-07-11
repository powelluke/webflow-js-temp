import { gsap } from "gsap";
import barba from "@barba/core";

console.log("barba works");

// Content Animation Function with Fading Out Letters
const contentAnimation = function (container) {
  container.querySelectorAll(".header--tt2").forEach(function (element) {
    let tl = gsap.timeline({ paused: true });
    tl.to(element.querySelectorAll(".char"), {
      opacity: 0,
      duration: 0.15,
      ease: "power4.out",
      stagger: { amount: 0.3, from: "random" },
    });
    createScrollTrigger(element, tl);
  });
};

barba.init({
  preventRunning: true,
  transitions: [
    {
      sync: false,
      beforeLeave(data) {
        contentAnimation(data.current.container);
      },
      leave(data) {
        return gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
      },
      enter(data) {
        return gsap.fromTo(
          data.next.container,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }
        );
      },
    },
  ],
});
