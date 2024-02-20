const Skills = () => {
  // Define an array of front-end skills, soft skills, and tools
  const frontEndSkills = [
    "HTML, CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Redux",
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Time Management",
  ];

  const tools = [
    "VSCode",
    "Git",
    "Firebase",
    // Add any additional tools here
  ];

  return (
    <section className="w-screen h-screen px-10 relative flex pt-[200px]">
      <h1 className="md:text-[16rem] font-bold sm:-rotate-90 sm:translate-x-[50%] translate-y-[0%] w-96 text-5xl">
        Skills
      </h1>

      <div className="sm:flex  sm:py-3  w-full flex justify-between px-10">
        {/* Front-end skills */}

        <div>
          <h1 className="sm:text-7xl font-bold border-b border-black text-3xl mb-5">
            Front-end
          </h1>
          <div className=" sm:flex flex-col  gap-5">
            {frontEndSkills.map((skill, index) => (
              <h1
                key={index}
                className="sm:text-3xl font-bold border-b border-black"
              >
                {skill}
              </h1>
            ))}
          </div>
        </div>

        {/* Soft skills */}
        <div>
          <h1 className="sm:text-7xl font-bold border-b border-black text-3xl mb-5">
            Soft Skills
          </h1>
          <div className=" sm:flex flex-col  gap-5">
            {softSkills.map((skill, index) => (
              <h1
                key={index}
                className="sm:text-3xl font-bold border-b border-black"
              >
                {skill}
              </h1>
            ))}
          </div>
        </div>
        {/* Tools */}

        <div>
          <h1 className="sm:text-7xl font-bold border-b border-black text-3xl mb-5">
            Tools
          </h1>
          <div className=" sm:flex flex-col  gap-5">
            {tools.map((skill, index) => (
              <h1
                key={index}
                className="sm:text-3xl font-bold border-b border-black"
              >
                {skill}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
