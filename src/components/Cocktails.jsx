import { cocktailLists } from "../../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Cocktails = () => {
  useGSAP(() => {
    const paralaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 100%",
        scrub: true,
      },
    });
    paralaxTimeline
      .to("#c-left-leaf", { y: -300, duration: 1 })
      .to("#c-right-leaf", { y: -200, duration: 1.5 });
  });

  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="l-leaf"
        id="c-left-leaf"
        className="mt-20 mb-20"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
        className="mt-20 mb-20 "
      />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Arak Bali</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3 className="text-lime-400/80">{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most Loved Drinks In Arak | Bali</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3 className="text-lime-400/80">{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
