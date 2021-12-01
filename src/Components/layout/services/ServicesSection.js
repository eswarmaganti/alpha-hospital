import React from "react";
import Heading from "../../Heading";
import Card from "./Card";
import covid from "../../../assets/covid.svg";
import lungs from "../../../assets/lungs.svg";
import heart from "../../../assets/heart.svg";
import medicine from "../../../assets/medicine.svg";
import steth from "../../../assets/steth.svg";
import hospital from "../../../assets/hospital.svg";
import baby from "../../../assets/baby.svg";
import lab from "../../../assets/lab.svg";

const ServicesSection = () => {
  const servicesData = [
    {
      icon: hospital,
      title: "24/7 Emergency Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, sint.",
    },
    {
      icon: steth,
      title: "General Health Checkup",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, sint.",
    },
    {
      icon: medicine,
      title: "24/7 Pharmacy Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, sint.",
    },
    {
      icon: lab,
      title: "24/7 Laboratory Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, sint.",
    },
    {
      icon: heart,
      title: "Cardiology Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, sint.",
    },
    {
      icon: lungs,
      title: "Respiratory Related Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, sint.",
    },
    {
      icon: covid,
      title: "Covid Related Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, sint.",
    },

    {
      icon: baby,
      title: "pediatric Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, sint.",
    },
  ];

  return (
    <section className="p-10" id="services">
      <Heading title="Services we provide" />

      <div className="grid md:grid-cols-4 gap-7 my-10 ">
        {servicesData.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
