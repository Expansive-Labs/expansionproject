import React, { useState, useRef } from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

/// PROJECTS SECTION ///

const projectsData = [
  {
    id: 1,
    title: "Wissahickon Brewery | Live Recap",
    description: "Expansion Project | Wissahickon Brewery live show recap",
    image: "/images/projects/wissThumbnail.webp",
    tag: ["All", "Live", "Recap"],
    gitUrl: "https://youtu.be/RuI-TDbnUX0?si=l0x_RFemRgP5ZBXh",
  },
  {
    id: 2,
    title: "Pub Webb | Live Recap",
    description: "Expansion Project | Pub Webb live show recap",
    image: "/images/projects/liveRecap.webp",
    tag: ["All", "Live", "Recap"],
    gitUrl: "https://youtu.be/Um_VF3GP_mQ",
  },
  {
    id: 3,
    title: "Live at Wissahickon Brewery",
    description: "Expansion Project | Recorded live at Wissahickon Brewery",
    image: "/images/projects/wissahiconBrew.webp",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/n-8jbdDxo4o",
  },
  {
    id: 4,
    title: "The Psychedelic Shindig | Expansion Project Live",
    description:
      "Expansion Project | Lincoln Boulevard recorded Live at Cosmic Art Studio, Pottstown PA",
    image: "/images/projects/psyshindig.webp",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/OX4BN2sJ9mo",
  },
  {
    id: 5,
    title: "Emagination (Official Music Video) | Expansion Project",
    description:
      "Expansion Project | Inspired by the film 'Willy Wonka & the Chocolate Factory (1971)'",
    image: "/images/projects/emaginationThumbnail.webp",
    tag: ["All", "Studio"],
    gitUrl: "https://youtu.be/Mflab1MxKaI",
  },
  {
    id: 6,
    title: "Royal Chords | Expansion Project Live",
    description: "Expansion Project | Royal recorded Live in Philadelphia",
    image: "/images/projects/royalChordsThumbnail.webp",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/dWAWSzwb4rA",
  },
  {
    id: 7,
    title: "Lincoln Boulevard (Official Music Video) | Expansion Project",
    description: "Expansion Project |  Lincoln Boulevard",
    image: "/images/projects/linkBThumbnail.webp",
    tag: ["All", "Studio"],
    gitUrl: "https://youtu.be/CADFoemU5Jo",
  },
  {
    id: 8,
    title: "Roloway at Pub Webb Live | Expansion Project Live",
    description: "Expansion Project | Roloway recorded Live in Philadelphia",
    image: "/images/projects/rolothumb.webp",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/CADFoemU5Jo",
  },
  {
    id: 9,
    title: "Conscious Tour Recap | Expansion Project",
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

  // Audio Plays Counter and Audio volume slide
  const [audioCount, setAudioCount] = React.useState(0);
  const [audioVolume, setAudioVolume] = useState(5);

  // Webaite Visitor Counter
  const [visitorCount, setVisitorCount] = useState(0);

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
    <section id="music">
      <h2 className="text-center text-4xl font-bold text-[#50fd9a] mt-4 mb-8 md:mb-12 determination-mono-font">
        Music
      </h2>

      {/* Audio Player */}
      <div
        style={{
          width: "90%",
          maxWidth: "480px",
          margin: "0 auto",
          marginBottom: 0,
        }}
        className="window"
      >
        <div className="title-bar">
          <div className="title-bar-text" style={{ letterSpacing: "1px" }}>
            Audio Media Player
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body">
          <p
            style={{
              textAlign: "center",
              color: "black",
              paddingTop: "2px",
              letterSpacing: "1px",
            }}
          >
            {/* Play Count: {audioCount} */}
          </p>

          {/* <div className="field-row" style={{ justifyContent: "center" }}>
            <button onClick={() => setAudioCount(audioCount + 1)}>Play</button>
            <button onClick={() => setAudioCount(audioCount)}>Pause</button>
            <button onClick={() => setAudioCount(0)}>Stop</button>
          </div> */}

          {/* Audio Media Player embedded link */}
          <iframe
            title="Audio Media Player"
            style={{
              paddingTop: "16px",
            }}
            width="100%"
            height="600"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/623047767&color=%23c0c0c0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            seamless
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          {/* SoundCloud embedded link */}
          {/* <iframe
            width="100%"
            height="600"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/623047767&color=%23c0c0c0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
            <a
              href="https://soundcloud.com/expansionproject"
              title="Expansion Project"
              target="_blank"
              style="color: #cccccc; text-decoration: none;"
            >
              Expansion Project
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/expansionproject/sets/conscious-tortoise"
              title="Conscious Tortoise"
              target="_blank"
              style="color: #cccccc; text-decoration: none;"
            >
              Conscious Tortoise
            </a>
          </div> */}

          {/* Bandcamp embedded link */}
          {/* <iframe
            style="border: 0; width: 350px; height: 470px;"
            src="https://bandcamp.com/EmbeddedPlayer/album=2126036743/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
            seamless
          >
            <a href="https://expansionproject.bandcamp.com/album/conscious-tortoise">
              Conscious Tortoise by Expansion Project
            </a>
          </iframe> */}

          <div
            class="field-row"
            style={{
              paddingTop: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                marginBottom: "1px",
                // fontWeight: "bold",
                color: "black",
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
                  color: "black",
                }}
              >
                Low
              </label>

              <label
                for="range27"
                style={{
                  paddingRight: "13px",
                  letterSpacing: "1px",
                  color: "black",
                }}
              >
                High
              </label>

              {/* Volume Slider */}
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
        </div>
      </div>
      <section id="videos">
        <h2 className="text-center text-4xl font-bold text-[#50fd9a] mt-16 mb-8 md:mb-12 determination-mono-font">
          Videos
        </h2>

        <div className="text-[#f6f3ed] flex flex-row justify-center items-center gap-2 py-6 ">
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
        <ul
          ref={ref}
          className="grid md:grid-cols-3 gap-8 md:gap-12 determination-mono-font"
        >
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
        <p
          style={{
            color: "#c0c0c0",
            fontFamily: "unset",
            fontWeight: "lighter",
          }}
        ></p>
      </section>
    </section>
  );
};

export default ProjectsSection;
