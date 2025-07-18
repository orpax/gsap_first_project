import React from "react";
import { allCocktails } from "../../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Menu = () => {
  const contentRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  useGSAP(() => {
    const heroSplit = new SplitText("#title", { type: "words" });
    const paragraphSplit = new SplitText(".details", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    // paragraphSplit.lines.forEach((line) => line.classList.add(""));
    //   Animated title
    gsap.from(heroSplit.words, {
      y: 450,
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

    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);
  const goToSlide = (index) => {
    const newIndex = (index + allCocktails.length) % allCocktails.length;

    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset) => {
    return allCocktails[
      (currentIndex + indexOffset + allCocktails.length) % allCocktails.length
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const nextCocktail = getCocktailAt(1);
  const prevCocktail = getCocktailAt(-1);
  return (
    <div id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Menu Arak
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-lime-500 border-lime-400"
                  : "text-amber-50 border-amber-50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} alt="" className="object-contain" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p className="text-xl">Recipe Arak:</p>
            <p id="title" className="text-lime-400/80">
              {currentCocktail.name}
            </p>
          </div>

          <div className="details">
            <h2 className="text-lime-400/80">{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
