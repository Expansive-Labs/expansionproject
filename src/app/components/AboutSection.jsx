"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import dynamic from "next/dynamic";
import "98.css";

const LazyBandsintown = dynamic(() => import("./LazyBandsintown"), {
  loading: () => <div className="w-full h-[600px] bg-[#0a0a0a] rounded-xl animate-pulse" />,
  ssr: false
});

/// ABOUT SECTION ///
const TAB_DATA = [
  {
    title: "Upcoming",
    id: "upcoming",
    content: (      
      <ul className="list-disc pl-2 centered-text determination-mono-font">
        <li style={{ color: "#50fd9a", fontSize: 16 }} className="mb-2">
          Into The Pines Music Festival, NJ 8.23
        </li>
        <li style={{ color: "#50fd9a", fontSize: 16 }} className="mb-2">
          TBA
        </li>
        <li style={{ color: "#50fd9a", fontSize: 16 }} className="mb-2">
          TBA
        </li>
      </ul>
    ),
  },
  {
    title: "Previous",
    id: "previous",
    content: (
      <ul className="list-disc pl-2 centered-text determination-mono-font">
        <li style={{ color: "#50fd9a", fontSize: 16 }} className="mb-2">Funktoberfest</li>
        <li style={{ color: "#50fd9a", fontSize: 16 }} className="mb-2">The Butter Lounge</li>
        <li style={{ color: "#50fd9a", fontSize: 16 }}>Cosmic Art Studio</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("upcoming");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const sectionStyle = {
    backgroundColor: "#121212",
    padding: "20px",
  };

  const titleStyle = {
    color: "#50fd9a",
    textAlign: "center",
    fontSize: "3em",
    marginTop: "2em",
    marginBottom: "2em",
  };



  return (
    <section className="text-[#f6f3ed]" id="about">
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
              marginTop: "-80px",
            }}
          />
        </Parallax>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2
            className="text-4xl text-center font-bold kallisto-lined-font mb-4 text-[#50fd9a]"
            style={sectionStyle}
          >
            Expansion Project
          </h2>
          <p className="text-base text-center text-[#bababa] lg:text-lg determination-mono-font">
          Expansion Project is a Philadelphia-based jazz-funk fusion trio blending groove-heavy rhythms with virtuosic improvisation. Featuring Anthony Tilotta (bass), Matthew Silva (keys), and Zamere Williams (drums), they channel influences like Yussef Dayes Experience, Snarky Puppy and Moses Yoofee Trio. Known for high-energy live shows and genre-blurring studio work, they’re redefining modern fusion across the East Coast.
          </p>

          <p
            className="text-center text-4xl font-bold text-[#50fd9a] mt-8 mb-4 kallisto-lined-font"
            id="tour"
          >
            Tour
          </p>

          <div className="flex flex-row justify-center mb-6 tab-buttons-container gap-6">
            <TabButton
              selectTab={() => handleTabChange("upcoming")}
              active={tab === "upcoming"}
            >
              Upcoming
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("previous")}
              active={tab === "previous"}
            >
              Previous
            </TabButton>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-8 min-h-[120px] flex items-center justify-center transition-all duration-300 ease-in-out">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>

            <LazyBandsintown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
