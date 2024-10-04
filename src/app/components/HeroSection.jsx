import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

/// LANDING PAGE VIEW ///

const HeroSection = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const handleMusicIconClick = (e, url) => {
    e.preventDefault();
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-[#f6f3ed] mb-4 text-2xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <br></br>
            <span className=" text-transparent bg-clip-text bg-gradient-to-r to-gray-400 from-gray-300">
              <TypeAnimation
                sequence={[
                  "Expansion Project",
                  3000,
                  "funky",
                  1000,
                  "jazzy",
                  1000,
                  "groovy",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1em",
                  fontFamily: "Kallisto Lined",
                  display: "inline-block",
                  color: "#50fd9a",
                }}
                repeat={Infinity}
              />
            </span>
          </h1>
          <div className="text-[#65686b] text-base sm:text-lg mb-6 lg:text-xl determination-mono-font">
            fusion_trio /// philadelphia_pa
            <div className="mt-4 flex justify-center sm:justify-start">
              <a
                href="https://open.spotify.com/artist/4qBVPcT7Wo61vUkymokvyx?si=86dLWpyUQhyqEnlgoniqHw&nd=1&dlsi=7f3de69325eb463b"
                onClick={(e) =>
                  handleMusicIconClick(
                    e,
                    "https://open.spotify.com/artist/4qBVPcT7Wo61vUkymokvyx?si=86dLWpyUQhyqEnlgoniqHw&nd=1&dlsi=7f3de69325eb463b"
                  )
                }
                className="mx-2 music-icon-button"
              >
                <Image
                  src="/spotify-icon-w2.svg"
                  alt="Expansion Project on Spotify"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://music.apple.com/us/artist/expansion-project/1353151967"
                onClick={(e) =>
                  handleMusicIconClick(
                    e,
                    "https://music.apple.com/us/artist/expansion-project/1353151967"
                  )
                }
                className="mx-2 music-icon-button apple-music-icon"
              >
                <Image
                  src="/appleMusic-icon-w2.svg"
                  alt="Expansion Project on Apple Music"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>

          <div>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="contact-button px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 text-[#121212] font-bold determination-mono-font transition-all duration-300 ease-in-out relative overflow-hidden transform hover:-translate-y-1 active:translate-y-0"
            >
              <span className="relative z-10">Contact Us</span>
            </a>

            {/* <a
              href="/pdfs/Expansion_Project_EPK.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#50fd9a] to-secondary-900 hover:bg-slate-800 text-[#f6f3ed] mt-3 transition duration-500 ease-in-out"
              download="Expansion Project EPK"
              target="_blank"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 determination-mono-font transition duration-500 ease-in-out">
                Download EPK
              </span>
            </a> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/mainCPGv2.webp"
              alt="Expansion Project main band photo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
