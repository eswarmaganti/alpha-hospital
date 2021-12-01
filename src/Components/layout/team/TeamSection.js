import React from "react";
import Heading from "../../Heading";
import team1 from "../../../assets/team1.jpg";
import team2 from "../../../assets/team2.jpg";
import team3 from "../../../assets/team3.jpg";
import team4 from "../../../assets/team4.jpg";
import TeamCard from "./TeamCard";
const TeamSection = () => {
  const teamData = [
    {
      name: "Helina Jackson",
      designation: "cardiologist",
      image: team1,
    },
    {
      name: "Jonathon Doe",
      designation: "pulmonologist",
      image: team2,
    },
    {
      name: "Lauren sarah",
      designation: "Neurologist",
      image: team3,
    },
    {
      name: "Mikey Tiller",
      designation: "pediatrician",
      image: team4,
    },
  ];

  return (
    <section className="p-10" id="team">
      <Heading title="Our Team" />

      <section className="grid md:grid-cols-4 gap-6 my-10">
        {teamData.map((item, index) => {
          return <TeamCard key={index} item={item} />;
        })}
      </section>
    </section>
  );
};

export default TeamSection;
