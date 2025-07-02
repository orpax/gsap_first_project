import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    // paragraphSplit.lines.forEach((line) => line.classList.add(""));
    //   Animated title
    gsap.from(heroSplit.chars, {
      y: -550,
      duration: 2,
      ease: "expo.out",
      stagger: 0.2,
    });

    // Animated subtitle
    gsap.from(paragraphSplit.lines, {
      y: 400,
      opacity: 10,
      duration: 2,
      ease: "expo.out",
      delay: 1,
      stagger: 0.03,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 700 }, 0)
      .to(".left-leaf", { y: -300 }, 0);
  }, []);
  return (
    <div>
      <section id="hero" className="noisy">
        <h1
          className="title
              "
        >
          Arak | Kopi
        </h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left leaf"
          className="left-leaf"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="right leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p className="subtitle text-lg fw-bold">Anget. Pait. Kenceng</p>
              <p className="subtitle text-lime-400/80">
                Lancarkan Hidup <br />
                Dengan Arak Dan Kopi
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle mb-[20px]">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.{" "}
                <span className="rounded-2xl cursor-pointer text-lime-400/80">
                  <a href="#">Views Arak Bali</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
