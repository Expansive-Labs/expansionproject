"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r to-gray-400 from-gray-300">
              Hello, we are{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Expansion Project",
                3000,
                "Funky.",
                1000,
                "Jazzy.",
                1000,
                "Groovy.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                color: "#50fd9a",
              }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#65686b] text-base sm:text-lg mb-6 lg:text-xl">
            Power fusion trio | Philly Band Philly Grooves
          </p>
          <div>
            <Link
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#50fd9a] hover:bg-slate-700 text-white"
            >
              Book Us
            </Link>
            <Link
              href="#contact"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#50fd9a] to-secondary-900 hover:bg-slate-800 text-white mt-3"
            >
              <span
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
                href="/"
                target="_blank"
              >
                Download EPK
              </span>
            </Link>
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
              src="/images/mainCPG.png"
              alt="/images/mainCPG.png"
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
