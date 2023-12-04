import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import QRCode from "qrcode.react"; // Import the QR code component

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Live Shows",
    value: "250",
    postfix: "+",
  },
  {
    metric: "Tap or scan. Stream new song",
  },
  {
    metric: "Earth Years",
    value: "7",
    postfix: "",
  },
];

const AchievementsSection = () => {
  const qrCodeSize = 128; // Adjust the size as needed
  const albumQRLink = "https://expansionproject.bandcamp.com/track/emaginaiton"; // Replace with your actual link

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-[#f6f3ed] text-4xl mb-2 font-bold flex flex-row determination-mono-font">
              {achievement.prefix}
              {achievement.metric === "Tap or scan. Stream new song" ? (
                <a href={albumQRLink} target="_blank" rel="noopener noreferrer">
                  <QRCode value={albumQRLink} size={qrCodeSize} />
                </a>
              ) : (
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-[#f6f3ed] text-4xl font-bold"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
              )}
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base text-center determination-mono-font">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
