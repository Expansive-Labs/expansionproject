"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Festivals",
    id: "festivals",
    content: (
      <ul className="list-disc pl-2">
        <li>Night Lights</li>
        <li>Funk Fest</li>
        <li>Art Jam</li>
      </ul>
    ),
  },
  {
    title: "Upcoming",
    id: "upcoming",
    content: (
      <ul className="list-disc pl-2">
        <li>Cosmic Art Studio</li>
        <li>Butter Lounge</li>
        <li>Grape Room</li>
      </ul>
    ),
  },
  {
    title: "Past",
    id: "past",
    content: (
      <ul className="list-disc pl-2">
        <li>The Moose</li>
        <li>The Pickle</li>
        <li>The Fire</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("festivals");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/wissPicLive.png"
          alt="/images/mainCPG.png"
          width={500}
          height={500}
          style={{ borderRadius: "3%" }}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
            Expansion Project grew out of the passion longtime friends Anthony
            Tilotta and Matthew Silva had for creating and playing music to a
            live audience. Zamere Williams was introduced to the band in 2016.
            The chemistry in and out of the studio was as if they knew each
            other for years, resulting in a power-trio that has been creating
            music together ever since. Expansion Project&apos;s evolving sound
            can be described as a highly energetic fusion-funk-groove that will
            keep people dancing all night long. They take the most pride in
            their live performances when creativity and raw passion for music
            translate into a truly unique experience!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("festivals")}
              active={tab === "festivals"}
            >
              {" "}
              Festivals{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("upcoming")}
              active={tab === "upcoming"}
            >
              {" "}
              Upcoming Shows{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("past")}
              active={tab === "past"}
            >
              {" "}
              Past Shows{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
