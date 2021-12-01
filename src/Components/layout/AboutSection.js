import React from "react";
import Heading from "../Heading";
import about from "../../assets/about.svg";
import CountUp from "react-countup";
const AboutSection = () => {
  return (
    <section className="p-10 bg-gray-200 " id="about">
      <Heading title="About Our Hospital" />

      <section className="grid md:grid-cols-5 grid-cols-1  mt-6 ">
        <div className="about-image-container md:col-span-2">
          <img src={about} alt="" className="object-cover" />
        </div>
        <div className="md:col-span-3 md:pl-10 md:mt-0 mt-5 flex flex-col justify-center md:items-start ">
          <h3 className="font-medium text-sky-600 text-2xl uppercase text-center md:text-left">
            We are Alpha Hospitals
          </h3>
          <p className="text-gray-600 py-2 text-center md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            veritatis, aspernatur soluta delectus architecto sint a, voluptas
            voluptatibus iusto vitae officiis doloribus perspiciatis. Cum
            molestiae beatae iure dolorum commodi cupiditate quo recusandae
          </p>
          <div className="grid md:grid-cols-4  mt-6 gap-3">
            <div className="p-2 border-t-8 border-gray-800 rounded-b-md bg-primary shadow text-center">
              <h4 className="font-medium uppercase">Patients Treated</h4>
              <h1 className="font-bold text-3xl mt-2">
                <CountUp start={0} end={50000} duration={2} />+
              </h1>
            </div>
            <div className="p-2 border-t-8 border-gray-800 rounded-b-md bg-primary shadow text-center">
              <h4 className="font-medium uppercase">Surgery's Done</h4>
              <h1 className="font-bold text-3xl mt-2">
                <CountUp start={0} end={10000} duration={2} />+
              </h1>
            </div>
            <div className="p-2 border-t-8 border-gray-800 rounded-b-md bg-primary shadow text-center">
              <h4 className="font-medium uppercase">Doctor's</h4>
              <h1 className="font-bold text-3xl mt-2">
                <CountUp start={0} end={20} duration={2} />+
              </h1>
            </div>
            <div className="p-2 border-t-8 border-gray-800 rounded-b-md bg-primary shadow text-center">
              <h4 className="font-medium uppercase">Staff</h4>
              <h1 className="font-bold text-3xl mt-2">
                <CountUp start={0} end={200} duration={2} />+
              </h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
