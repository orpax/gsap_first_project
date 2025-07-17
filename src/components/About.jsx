import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import React from "react";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "chars, words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        yPercent: 100,
        ease: "expo.inOut",
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          stagger: 0.05,
        },
        "-=0.5);"
      );
  });

  return (
    <div id="about">
      <div className="mb-16  md:px-0 px-5 ">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Arak In Bali</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>{" "}
              from muddel to garnish
            </h2>
          </div>
          <div className="md:col-span-4">
            <div className="sub-content">
              <p>
                Every cocktail we serve is a reflection of our obsession with
                detail — from the first muddle to the final garnish. That care
                is what turns a simple drink into something truly memorable.{" "}
              </p>
              <div>
                <p className="md:text-3xl text-xl font-bold text-lime-400/80 ">
                  <span className="text-lime-400/80">4.5</span>/5
                </p>
                <p className="text-base text-white-100">
                  More than{" "}
                  <span className="text-lime-400/80 text-lg">1000+ </span>
                  Drunks
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="top-grid mt-5">
          <div className="md:col-span-3 cursor-pointer scale">
            <div className="noisy"></div>
            <img src="/images/abt1.png" alt="grid_1" />
          </div>

          <div className="md:col-span-6 cursor-pointer scale">
            <div className="noisy"></div>
            <img src="/images/abt2.png" alt="grid_2" />
          </div>

          <div className="md:col-span-3 cursor-pointer scale">
            <div className="noisy"></div>
            <img src="/images/abt3.png" alt="grid_1" />
          </div>
        </div>

        <div className="bottom-grid">
          <div className="md:col-span-4 cursor-pointer scale">
            <div className="noisy"></div>
            <img src="/images/abt4.png" alt="grid_2" />
          </div>
          <div className="md:col-span-8 cursor-pointer scale">
            <div className="noisy"></div>
            <img src="/images/abt5.png" alt="grid_2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
