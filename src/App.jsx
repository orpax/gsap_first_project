import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100dvh] bg-gradient-to-r from-gray-900 to-gray-800">
      <h1 className="text-4xl text-lime-300">Halo Gsap</h1>
    </div>
  );
};

export default App;
