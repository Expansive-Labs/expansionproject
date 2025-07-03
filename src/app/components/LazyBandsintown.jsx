"use client";
import { useEffect, useState } from "react";

export default function LazyBandsintown() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only load the Bandsintown script when the component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoaded) {
          const script = document.createElement("script");
          script.src = "https://widgetv3.bandsintown.com/main.min.js";
          script.charset = "utf-8";
          script.async = true;
          document.body.appendChild(script);
          setIsLoaded(true);
        }
      },
      { rootMargin: "100px" }
    );

    const target = document.getElementById("bandsintown-widget");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [isLoaded]);

  return (
    <div id="bandsintown-widget" className="w-full flex flex-col items-center min-h-[600px] transition-all duration-300 ease-in-out">
      <div className="w-full max-w-2xl mx-auto p-6 bg-[#0a0a0a] rounded-xl border border-[#1a1a1a] shadow-2xl">
        <a
          className="bit-widget-initializer"
          data-artist-name="id_15563537"
          data-events-to-display=""
          data-background-color="rgba(10,10,10,1)"
          data-separator-color="rgba(80,253,154,0.15)"
          data-text-color="rgb(158, 122, 51)"
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
  );
}