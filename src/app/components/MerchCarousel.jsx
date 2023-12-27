import React from "react";

const MerchCarousel = () => {
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
    <section id="merch" style={sectionStyle}>
      <h2
        style={titleStyle}
        className="text-center text-4xl font-bold text-[#50fd9a] mt-4 mb-8 md:mb-12 determination-mono-font"
      >
        Merch (coming soon!)
      </h2>
    </section>
  );
};

export default MerchCarousel;
