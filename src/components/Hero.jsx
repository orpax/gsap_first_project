import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });
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
      .to(".right-leaf", { y: -300 }, 0)
      .to(".left-leaf", { y: -300 }, 0);

    const startValue = isMobile ? "top 80%" : "center 60%";
    const endValue = isMobile ? "160% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        { currentTime: videoRef.current.duration, ease: "none" },
        0
      );
    };
  }, []);
  return (
    <div>
      <section id="hero" className="noisy">
        <h1
          className="title
              "
        >
          Arak | Bali
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
              <p className="subtitle text-lime-400/80 text-left">
                Lancarkan Hidup <br />
                Dengan Arak Dari Bali
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
                <span className="rounded-2xl cursor-pointer text-lime-400/80">
                  <a href="#">Views Arak Bali</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Video */}
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        ></video>
      </div>
    </div>
  );
};

export default Hero;
