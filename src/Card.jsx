import { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";

const Card = ({
  progress,
  range,
  targetScale,
  title,
  objective,
  keyTasks,
  technologies,
  githubLink,
  deploymentLink,
  image,
  color,
  i,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="] flex items-center justify-center sticky top-60"
    >
      <motion.div
        className="shadow-xl flex flex-col relative h-[600px] w-[80%] rounded-[25px] p-10 mb-12"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="text-center text-5xl mb-5">{title}</h2>
        <div className="flex sm:h-full gap-[50px] justify-between items-center">
          <div className="sm:w-4/5 flex gap-10">
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-semibold">Objective</h3>
              <p className="text-lg leading-relaxed">{objective}</p>
              <h3 className="text-xl font-semibold">Key Tasks</h3>
              <ul className="text-lg leading-relaxed">
                {keyTasks.map((task, i) => (
                  <li key={i}>- {task}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-semibold">Technologies</h3>
              <ul className="text-lg leading-relaxed">
                {technologies.map((tech, i) => (
                  <li key={i}>- {tech}</li>
                ))}
              </ul>
              <button
                onClick={() => window.open(githubLink, "_blank")}
                className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition duration-300 text-lg font-medium shadow-md"
              >
                Github
              </button>

              <button
                onClick={() => window.open(deploymentLink, "_blank")}
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300 text-lg font-medium shadow-md mt-4"
              >
                View Demo
              </button>
            </div>
          </div>
          <div className="relative sm:w-[40%] sm:h-3/5 rounded-[25px] overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={image}
                className="w-full h-full object-contain object-center "
                alt={title}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
