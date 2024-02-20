import projects from "./data";
import Card from "./Card";
import { useScroll } from "framer-motion";

import { useRef } from "react";
function Hero() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={container}
      className="  sm:p-10 sm:w-full w-[90%] mx-auto pt-[200px]    "
    >
      <h1 className="sm:text-[10rem] font-bold text-5xl sticky top-0 sm:mb-[10vh] text-center pt-[50px]">
        PROJECTS
      </h1>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}

export default Hero;
