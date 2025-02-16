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

  // Update useEffect to load Bandsintown script
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
            Expansion Project
          </h2>
          <p className="text-base text-center text-[#bababa] lg:text-lg determination-mono-font">
            Philadelphia based fusion trio Anthony Tilotta on bass, Matthew
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

            <div className="w-full flex flex-col items-center">
              <a
                className="bit-widget-initializer"
                data-artist-name="id_15563537"
                data-events-to-display=""
                data-background-color="rgba(18,18,18,1)"
                data-separator-color="rgba(0,0,0,1)"
                data-text-color="rgba(192,192,192,1)"
                data-font="American Typewriter"
                data-font-size="14px"
                data-auto-style="true"
                data-button-label-capitalization="uppercase"
                data-header-capitalization="uppercase"
                data-location-capitalization="uppercase"
                data-venue-capitalization="uppercase"
                data-local-dates-position="tab"
                data-display-details="false"
                data-display-lineup="false"
                data-display-start-time="false"
                data-social-share-icon="true"
                data-display-limit="all"
                data-date-format="MMM. D, YYYY"
                data-date-orientation="horizontal"
                data-date-border-color="#4A4A4A"
                data-date-border-width="1px"
                data-date-capitalization="capitalize"
                data-date-border-radius="10px"
                data-event-ticket-cta-size="medium"
                data-event-ticket-text="BUY TICKETS"
                data-event-ticket-icon="false"
                data-event-ticket-cta-text-color="rgba(255,255,255,1)"
                data-event-ticket-cta-bg-color="rgba(74,74,74,1)"
                data-event-ticket-cta-border-color="rgba(74,74,74,1)"
                data-event-ticket-cta-border-width="0px"
                data-event-ticket-cta-border-radius="2px"
                data-sold-out-button-text-color="rgba(255,255,255,1)"
                data-sold-out-button-background-color="rgba(74,74,74,1)"
                data-sold-out-button-border-color="rgba(74,74,74,1)"
                data-sold-out-button-clickable="true"
                data-event-rsvp-position="left"
                data-event-rsvp-cta-size="medium"
                data-event-rsvp-only-show-icon="false"
                data-event-rsvp-text="RSVP"
                data-event-rsvp-icon="false"
                data-event-rsvp-cta-text-color="rgba(74,74,74,1)"
                data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
                data-event-rsvp-cta-border-color="rgba(74,74,74,1)"
                data-event-rsvp-cta-border-width="1px"
                data-event-rsvp-cta-border-radius="2px"
                data-follow-section-position="top"
                data-follow-section-alignment="center"
                data-follow-section-header-text="Get updates on new shows, new music, and more"
                data-follow-section-cta-size="medium"
                data-follow-section-cta-text="FOLLOW"
                data-follow-section-cta-icon="false"
                data-follow-section-cta-text-color="rgba(81,251,154,1)"
                data-follow-section-cta-bg-color="rgba(18,18,18,1)"
                data-follow-section-cta-hover-text-color="rgba(192,192,192,1)"
                data-follow-section-cta-hover-bg-color="rgba(18,18,18,1)"
                data-follow-section-cta-transition-duration="0.3s"
                data-play-my-city-position="bottom"
                data-play-my-city-alignment="center"
                data-play-my-city-header-text="Don't see a show near you?"
                data-play-my-city-cta-size="medium"
                data-play-my-city-cta-text="REQUEST A SHOW"
                data-play-my-city-cta-icon="false"
                data-play-my-city-cta-text-color="rgba(81,251,154,1)"
                data-play-my-city-cta-bg-color="rgba(18,18,18,1)"
                data-play-my-city-cta-hover-text-color="rgba(192,192,192,1)"
                data-play-my-city-cta-hover-bg-color="rgba(18,18,18,1)"
                data-play-my-city-cta-transition-duration="0.3s"
                data-language="en"
                data-layout-breakpoint="900"
                data-bit-logo-position="bottom"
                data-bit-logo-alignment="center"
                data-bit-logo-color="rgba(192,192,192,1)"
                style={{
                  display: "block",
                  margin: "0 auto",
                  fontSize: "14px",
                  textAlign: "center",
                  width: "100%",
                  "--bit-button-hover-transition": "all 0.3s ease-in-out",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
