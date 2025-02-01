import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

/// ABOUT SECTION ///

const TAB_DATA = [
  {
    title: "Upcoming",
    id: "upcoming",
    content: (
      <ul className="list-disc pl-2 centered-text determination-mono-font">
        <li style={{ color: "#50fd9a", fontSize: 16 }}>VeloJawn - Philly</li>
        <li style={{ color: "#50fd9a", fontSize: 16 }}>
          Silk City Diner - Philly
        </li>
        <li style={{ color: "#50fd9a", fontSize: 16 }}>
          Into The Pines Music Festival
        </li>
      </ul>
    ),
  },
  {
    title: "Previous",
    id: "previous",
    content: (
      <ul className="list-disc pl-2 centered-text determination-mono-font">
        <li style={{ color: "#50fd9a", fontSize: 16 }}>Funktoberfest</li>
        <li style={{ color: "#50fd9a", fontSize: 16 }}>The Butter Lounge</li>
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

  // Add useEffect to load Bandsintown script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgetv3.bandsintown.com/main.min.js";
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            className="text-4xl text-center font-bold determination-mono-font mb-4 text-[#50fd9a]"
            style={sectionStyle}
          >
            About Us
          </h2>
          <p className="text-base text-center text-[#bababa] lg:text-lg determination-mono-font">
            Philadelphia based fusion trio. Anthony Tilotta on bass, Matthew
            Silva on piano, and Zamere Williams on drums blend elements of funk,
            jazz and rock into an innovative sound that&apos;s as expansive as
            it is deeply rooted in musical tradition. Their sound draws
            inspiration from many sources, forming a unique sonic identity.
            Studio recordings have captured their creative essence on tape,
            while their live shows are events for collaboration that pushes the
            boundaries of music &infin;
          </p>

          <p
            className="text-center text-4xl font-bold text-[#50fd9a] mt-8 mb-4 determination-mono-font"
            id="shows"
          >
            Shows
          </p>

          <div className="flex flex-row justify-center mb-4 tab-buttons-container">
            <TabButton
              selectTab={() => handleTabChange("upcoming")}
              active={tab === "upcoming"}
            >
              {" "}
              Upcoming{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("previous")}
              active={tab === "previous"}
            >
              {" "}
              Previous{" "}
            </TabButton>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>

            <div className="w-full">
              <a
                className="bit-widget-initializer"
                data-artist-name="id_15563537"
                data-background-color="rgba(18,18,18,1)"
                data-separator-color="rgba(80,253,154,0.5)"
                data-text-color="rgba(186,186,186,1)"
                data-font="determination-mono-font"
                data-display-local-dates="true"
                data-display-past-dates="true"
                data-date-color="rgba(80,253,154,1)"
                data-language="en"
                data-display-limit="all"
                style={{ display: "block", margin: "0 auto" }}
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
