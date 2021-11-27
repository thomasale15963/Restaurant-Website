gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

const t1 = gsap.timeline();

t1.from(".landing-page-info-container", { xPercent: 100 });

ScrollTrigger.create({
  animation: t1,
  trigger: ".landing-page-container",
  start: "top top",
  end: "+=4000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});
