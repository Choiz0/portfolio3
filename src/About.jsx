import React from "react";
import profile from "./assets/profile.png";
import Links from "./Links";

const About = () => {
  return (
    <section className="text-gray-800 py-10 px-10 w-screen ">
      <div className=" my-10 flex flex-col  h-full w-full">
        <h1 className="text-[11rem] leading-none font-extrabold uppercase">
          Ab<span className="outline-text">o</span>ut Me
        </h1>
        <div className="grid md:grid-cols-3 gap-4 items-center mt-10">
          {/* Who I Am Section */}
          {/* Profile Image Section */}
          <div className="col-span-1">
            <h3 className="text-4xl font-semibold mb-4">Who I Am</h3>
            <p className="text-3xl">
              I'm Jiyoung, a Front-End Developer with a Computer Science degree,
              exploring opportunities to contribute and grow in the IT industry.
            </p>
          </div>{" "}
          <div className="col-span-1 flex justify-center mb-4">
            <div className="w-40 h-40 md:w-64 md:h-64 overflow-hidden rounded-full bg-gray-300">
              <img
                src={profile}
                alt="Jiyoung"
                className="object-cover object-top w-full h-full grayscale"
              />
            </div>
          </div>
          {/* My Journey Section */}
          <div className="col-span-1">
            <h3 className="text-4xl font-semibold mb-4">My Journey</h3>
            <p className="text-3xl">
              I'm seeking roles where I can apply my knowledge and embrace
              challenges that will expand my capabilities in web development.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 w-full">
          <Links />
        </div>
      </div>
    </section>
  );
};

export default About;
