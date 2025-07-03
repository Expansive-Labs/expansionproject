import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import "98.css";

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

            <div className="w-full flex flex-col items-center min-h-[600px] transition-all duration-300 ease-in-out">
              <div className="w-full max-w-2xl mx-auto p-6 bg-[#0a0a0a] rounded-xl border border-[#1a1a1a] shadow-2xl">
                <a
                  className="bit-widget-initializer"
                  data-artist-name="id_15563537"
                  data-events-to-display=""
                  data-background-color="rgba(10,10,10,1)"
                  data-separator-color="rgba(80,253,154,0.15)"
                  data-text-color="rgba(246,243,237,1)"
                  data-font="monospace"
                  data-font-size="14px"
                  data-auto-style="false"
                  data-button-label-capitalization="capitalize"
                  data-header-capitalization="capitalize"
                  data-location-capitalization="uppercase"
                  data-venue-capitalization="capitalize"
                  data-local-dates-position="tab"
                  data-display-details="false"
                  data-display-lineup="false"
                  data-display-start-time="false"
                  data-social-share-icon="false"
                  data-display-limit="all"
                  data-date-format="MMM. D, YYYY"
                  data-date-orientation="horizontal"
                  data-date-border-color="rgba(80,253,154,0.5)"
                  data-date-border-width="1px"
                  data-date-border-radius="0px"
                  data-date-capitalization="capitalize"
                  data-date-text-color="rgba(246,243,237,1)"
                  data-event-ticket-cta-size="medium"
                  data-event-ticket-text="Buy Tickets"
                  data-event-ticket-icon="false"
                  data-event-ticket-cta-text-color="rgba(0,0,0,1)"
                  data-event-ticket-cta-bg-color="rgba(192,192,192,1)"
                  data-event-ticket-cta-border-color="rgba(255,255,255,1)"
                  data-event-ticket-cta-border-width="2px"
                  data-event-ticket-cta-border-radius="0px"
                  data-sold-out-button-text-color="rgba(128,128,128,1)"
                  data-sold-out-button-background-color="rgba(192,192,192,1)"
                  data-sold-out-button-border-color="rgba(128,128,128,1)"
                  data-sold-out-button-clickable="false"
                  data-event-rsvp-position="left"
                  data-event-rsvp-cta-size="medium"
                  data-event-rsvp-only-show-icon="false"
                  data-event-rsvp-text="RSVP"
                  data-event-rsvp-icon="false"
                  data-event-rsvp-cta-text-color="rgba(0,0,0,1)"
                  data-event-rsvp-cta-bg-color="rgba(192,192,192,1)"
                  data-event-rsvp-cta-border-color="rgba(255,255,255,1)"
                  data-event-rsvp-cta-border-width="2px"
                  data-event-rsvp-cta-border-radius="0px"
                  data-follow-section-position="top"
                  data-follow-section-alignment="center"
                  data-follow-section-header-text="Get updates on new shows, new music, and more"
                  data-follow-section-header-text-color="rgba(246,243,237,1)"
                  data-follow-section-background-color="rgba(10,10,10,1)"
                  data-follow-section-cta-size="medium"
                  data-follow-section-cta-text="Follow"
                  data-follow-section-cta-icon="false"
                  data-follow-section-cta-text-color="rgba(0,0,0,1)"
                  data-follow-section-cta-bg-color="rgba(80,253,154,1)"
                  data-follow-section-cta-hover-text-color="rgba(0,0,0,1)"
                  data-follow-section-cta-hover-bg-color="rgba(96,255,170,1)"
                  data-follow-section-cta-transition-duration="0.1s"
                  data-play-my-city-position="bottom"
                  data-play-my-city-alignment="center"
                  data-play-my-city-header-text="Don't see a show near you?"
                  data-play-my-city-header-text-color="rgba(246,243,237,1)"
                  data-play-my-city-background-color="rgba(10,10,10,1)"
                  data-play-my-city-cta-size="medium"
                  data-play-my-city-cta-text="Request a Show"
                  data-play-my-city-cta-icon="false"
                  data-play-my-city-cta-text-color="rgba(0,0,0,1)"
                  data-play-my-city-cta-bg-color="rgba(192,192,192,1)"
                  data-play-my-city-cta-hover-text-color="rgba(0,0,0,1)"
                  data-play-my-city-cta-hover-bg-color="rgba(216,216,216,1)"
                  data-play-my-city-cta-transition-duration="0.1s"
                  data-language="en"
                  data-layout-breakpoint="900"
                  data-bit-logo-position="bottom"
                  data-bit-logo-alignment="center"
                  data-bit-logo-color="rgba(113,116,119,0.5)"
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
      </div>
    </section>
  );
};

export default AboutSection;
