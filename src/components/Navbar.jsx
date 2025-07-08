import { navLinks } from "../../constant/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.from(
      "nav",
      {
        y: -400,
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        opacity: 0,
        duration: 2,
        ease: "power1.out",
      },
      {
        y: 0,
        opacity: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(10px)",
        duration: 1.5,
        ease: "power1.out",
      }
    );
  });

  return (
    <nav className="bg-transparent backdrop-blur-xs">
      <div>
        <a href="#" className="flex items-center gap-2 md:flex-row">
          <p className="hover:text-lime-500 duration-300 ease-in">
            Arak | Bali
          </p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="hover:text-lime-500 duration-300 ease-in"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
