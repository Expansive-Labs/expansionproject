// "use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Wissahickon Brewery | Live Recap",
    description: "Wissahickon Brewery live show recap | Philadelphia PA",
    image: "/images/projects/wissThumbnail.webp",
    tag: ["All", "Live", "Recap"],
    gitUrl: "https://youtu.be/RuI-TDbnUX0?si=l0x_RFemRgP5ZBXh",
  },
  {
    id: 2,
    title: "Pub Webb | Live Recap",
    description: "Pub Webb live show recap | Philadelphia PA",
    image: "/images/projects/liveRecap.webp",
    tag: ["All", "Live", "Recap"],
    gitUrl: "https://youtu.be/Um_VF3GP_mQ",
  },
  {
    id: 3,
    title: "Live at Wissahickon Brewery",
    description:
      "Expansion Project | Golden > Ghostbusters recorded Live in Philadelphia",
    image: "/images/projects/wissahiconBrew.webp",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/n-8jbdDxo4o",
  },
  {
    id: 4,
    title: "The Psychedelic Shindig",
    description:
      "Expansion Project | Lincoln Boulevard recorded Live at Cosmic Art Studio",
    image: "/images/projects/psyshindig.webp",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/OX4BN2sJ9mo",
  },
  {
    id: 5,
    title: "Emagination (Official Music Video)",
    description:
      "Expansion Project | Inspired by the film 'Willy Wonka & the Chocolate Factory (1971)'",
    image: "/images/projects/emaginationThumbnail.webp",
    tag: ["All", "Studio"],
    gitUrl: "https://youtu.be/Mflab1MxKaI",
  },
  {
    id: 6,
    title: "Royal Chords",
    description: "Expansion Project | Royal recorded Live in Philadelphia",
    image: "/images/projects/royalChordsThumbnail.webp",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/dWAWSzwb4rA",
  },
  {
    id: 7,
    title: "Lincoln Boulevard (Official Music Video)",
    description: "Expansion Project |  Lincoln Boulevard",
    image: "/images/projects/linkBThumbnail.webp",
    tag: ["All", "Studio"],
    gitUrl: "https://youtu.be/CADFoemU5Jo",
  },
  {
    id: 8,
    title: "Roloway Live at Pub Webb",
    description: "Expansion Project | Roloway recorded Live in Philadelphia",
    image: "/images/projects/rolothumb.webp",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/CADFoemU5Jo",
  },
  {
    id: 9,
    title: "Conscious Tour Live Recap",
    description: " Expansion Project | Conscious Tour 2019 Recap",
    image: "/images/projects/ctourThumb.webp",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/33Z-kHOVQ64",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="music">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Music
      </h2>

        {/* Audio Player */}
        {/* <div
          style={{
            width: 355,
            height: 155,
            margin: "0 auto",
            marginBottom: 0,
          }}
          className="window"
        >
          <div className="title-bar">
            <div className="title-bar-text" style={{ letterSpacing: "1px" }}>
              Music Player - Now playing.. Royal
            </div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>
{/* 
          <div className="window-body">
            <p
              style={{
                textAlign: "center",
                color: "black",
                paddingTop: "2px",
                letterSpacing: "1px",
              }}
            >
              Play Count: {audioCount}
            </p>

            <div className="field-row" style={{ justifyContent: "center" }}>
              <button onClick={() => setAudioCount(audioCount + 1)}>▶️</button>
              <button onClick={() => setAudioCount(audioCount)}>⏩</button>
              <button onClick={() => setAudioCount(0)}>⏹️</button>
            </div>

            <div
              class="field-row"
              style={{
                paddingTop: "4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  marginBottom: "1px",
                  fontWeight: "bold",
                }}
              >
                Volume:
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <label
                  for="range26"
                  style={{
                    paddingLeft: "13px",
                    letterSpacing: "1px",
                  }}
                >
                  Low
                </label>

                <label
                  for="range27"
                  style={{
                    paddingRight: "13px",
                    letterSpacing: "1px",
                  }}
                >
                  High
                </label>
              </div>
              <input
                id="range26"
                type="range"
                min="1"
                max="11"
                value={audioVolume}
                onChange={(e) => setAudioVolume(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>

            <p
              style={{
                textAlign: "center",
                color: "black",
                paddingTop: "3px",
                letterSpacing: "1px",
              }}
            >
              Visitor Count: {visitorCount}
            </p>
          </div> */}
        {/* </div> */}

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Studio"
          isSelected={tag === "Studio"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Live"
          isSelected={tag === "Live"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      {/* SEO METADATA */}
      <p style={{ opacity: 0.1 }}>
        Expansion Project, Band, Music, Philadelphia, Philly Band, Philly Music
        Scene, Jazz Fusion, Funk, Rock, Progressive Rock, Jam, Jambands, Power
        Trio, Lotus, Octave Cat, Dopapod, Tauk, Papadosio, Sunsquabi, Umphreys
        Mcgee, Disco Biscuts, Pigeons Playing Ping Pong, Cory Wong, Cory Henry
        Funk Apostles, Bad Bad Not Good, Snarky Puppy, Jaco, Herbie, George Duke
      </p>
    </section>
  );
};

export default ProjectsSection;
