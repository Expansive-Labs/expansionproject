import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MerchSection = () => {
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

  const carouselStyle = {
    width: "600px",
    height: "400px",
    margin: "0 auto",
  };

  const imgStyle = {
    width: window.innerWidth > 768 ? "32%" : "100%",
    height: "auto",
    objectFit: "contain",
  };

  const thumbStyle = {
    width: "60px",
    height: "60px",
    objectFit: "cover",
  };

  return (
    <section id="merch" style={sectionStyle}>
      <h2
        style={titleStyle}
        className="text-center text-4xl font-bold text-[#50fd9a] mt-4 mb-8 md:mb-12 determination-mono-font"
      >
        Merch
      </h2>
      <Carousel
        style={carouselStyle}
        // autoPlay
        axis="horizontal"
        infiniteLoop
        interval={5000}
        statusFormatter={(current, total) => (
          <img
            style={thumbStyle}
            src={`/images/Expansion_Project_PromoPic_${current}.webp`}
            alt={`Merch ${current}`}
          />
        )}
      >
        <div>
          <img
            style={imgStyle}
            src="/images/Expansion_Project_PromoPic_TWO.webp"
            alt="Merch 1"
          />
          <p className="legend">Merch 1</p>
        </div>
        <div>
          <img
            style={imgStyle}
            src="/images/expansion_moon_logo.webp"
            alt="Merch 2"
          />
          <p className="legend">Merch 2</p>
        </div>
        <div>
          <img
            style={imgStyle}
            src="/images/infiniteLogoBlack.webp"
            alt="Merch 3"
          />
          <p className="legend">Merch 3</p>
        </div>
      </Carousel>
    </section>
  );
};

export default MerchSection;
