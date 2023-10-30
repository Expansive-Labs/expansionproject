import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Festivals",
    id: "festivals",
    content: (
      <ul className="list-disc pl-2 centered-text determination-mono-font">
        <li style={{ color: "#50fd9a", fontSize: 16 }}>
          Night Lights Music Festival
        </li>
        <li style={{ color: "#50fd9a", fontSize: 16 }}>
          Art Jam Music Festival
        </li>
        <li style={{ color: "#50fd9a", fontSize: 16 }}>
          Philadelphia Funk Fest
        </li>
      </ul>
    ),
  },
  {
    title: "Upcoming",
    id: "upcoming",
    content: (
      <ul className="list-disc pl-2 centered-text determination-mono-font">
        <li style={{ color: "#50fd9a", fontSize: 16 }}>The Butter Lounge</li>
        <li style={{ color: "#50fd9a", fontSize: 16 }}>Cosmic Art Studio</li>
        <li style={{ color: "#50fd9a", fontSize: 16 }}>The Grape Room</li>
      </ul>
    ),
  },
  {
    title: "Past",
    id: "past",
    content: (
      <ul className="list-disc pl-2 centered-text determination-mono-font">
        <li style={{ color: "#50fd9a", fontSize: 16 }}>The Moose</li>
        <li style={{ color: "#50fd9a", fontSize: 16 }}>The Pickle</li>
        <li style={{ color: "#50fd9a", fontSize: 16 }}>The Fire</li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Parallax speed={10} opacity={[-2, 1, "easeOutBack"]}>
          <Image
            src="/images/wissPicLive.webp"
            alt="Expansion Project"
            width={500}
            height={500}
            style={{
              borderRadius: "10%",
              filter: "drop-shadow(0 0 44px #bababa)",
            }}
          />
        </Parallax>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-center font-bold determination-mono-font mb-4 text-[#50fd9a]">
            About Us
          </h2>
          <p className="text-base text-center text-[#bababa] lg:text-lg determination-mono-font">
            Expansion Project grew out of the passion longtime friends Anthony
            Tilotta and Matthew Silva have for creating music. Zamere Williams
            joined the band in 2016. The chemistry in and out of their
            Philadelphia studio was as if the power trio had been playing
            together for years. Expansion Project&apos;s evolving sound can be
            described through their influences, which could range from
            jazz-fusion icons to modern progressive rock jambands. They take the
            most pride in their live shows, when creativity and raw passion for
            music collide and form a truly unique experience.
          </p>
          <p className="text-center text-4xl font-bold text-[#50fd9a] mt-12 mb-0 md:mb-2 determination-mono-font">
            Shows
          </p>

          <div className="flex flex-row justify-center mt-8 tab-buttons-container">
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
              Upcoming{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("past")}
              active={tab === "past"}
            >
              {" "}
              Past{" "}
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
