import { useState, useEffect } from "react";
import profile from "./assets/sky1.png";
import { FaArrowDown } from "react-icons/fa";
import Links from "./Links";

const Home = ({
  aboutRef,
  projectsRef,
  contactRef,
  scrollToSection,
  skillsRef,
  homeRef,
}) => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-screen h-screen overflow-hidden mx-auto flex flex-col ">
      <header
        className={`flex items-center justify-between h-[70px] w-full px-10 transition-all duration-500 ease-in-out ${
          isSticky ? "fixed z-[1000] bg-slate-300 h-[70px]" : ""
        }`}
      >
        <div className="flex gap-10 w-full items-center">
          <p className="text-3xl font-bold">Jiyoung Choi</p>

          <p className="text-3xl font-bold">Based in Melbourne</p>

          <Links />
        </div>

        <nav className="flex">
          <button
            className="text-3xl font-bold mx-2"
            onClick={() => scrollToSection(homeRef)}
          >
            Home,
          </button>
          <button
            className="text-3xl font-bold mx-2"
            onClick={() => scrollToSection(projectsRef)}
          >
            Projects,
          </button>
          <button
            className="text-3xl font-bold mx-2"
            onClick={() => scrollToSection(skillsRef)}
          >
            Skills,
          </button>
          <button
            className="text-3xl font-bold mx-2"
            onClick={() => scrollToSection(aboutRef)}
          >
            About,
          </button>
        </nav>
      </header>

      <div className="flex-grow flex items-baseline px-10 ">
        <div className="w-2/3 flex flex-col justify-center items-start ">
          <h1 className="text-[11rem] uppercase font-extrabold leading-none ">
            Fr<span className=" outline-text ">o</span>ntEnd
          </h1>
          <h1 className="text-[11rem] uppercase font-extrabold leading-none ">
            Devel<span className="outline-text ">o</span>per
          </h1>
        </div>

        <div className="w-1/3 flex flex-col justify-center pr-10">
          <h1 className="text-2xl font-bold">Hello, I'm Jiyoung.</h1>
          <p className="text-2xl font-bold mt-4">
            I love to create beautiful and functional websites.
          </p>
          <p className="text-2xl font-bold mt-4">
            I'm passionate about learning new technologies and improving my
            skills.
          </p>
          <p className="text-2xl font-bold mt-4">
            I'm currently looking for a new role.
          </p>
        </div>
      </div>

      <div className="flex justify-between mb-10 px-10">
        <div className="w-[500px] h-[200px]">
          <img
            src={profile}
            className=" grayscale block w-full object-cover object-center h-[230px] "
            alt="Profile"
          />
        </div>
        <div className="absolute left-[calc(50%-72px)] items-end pb-10 w-full bottom-0 ">
          <FaArrowDown className="text-7xl animate-bounce" />
        </div>

        <div className="w-4/5 flex flex-col items-end justify-center">
          <div className="text-[7rem] uppercase font-extrabold leading-none text-right">
            Jiyoung
            <br /> Sarah
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
