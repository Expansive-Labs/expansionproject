import React from "react";
import FacebookIcon from "../../../public/facebook-icon-w2.svg";
import InstagramIcon from "../../../public/instagram-icon-w2.svg";
import YouTubeIcon from "../../../public/instagram-icon-w2.svg";
import SoundCloudIcon from "../../../public/instagram-icon-w2.svg";
import BandcampIcon from "../../../public/instagram-icon-w2.svg";
import AppleMusicIcon from "../../../public/instagram-icon-w2.svg";
import SpotifyIcon from "../../../public/instagram-icon-w2.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#50fd9a] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect.
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Greetings! we are always looking for new and exciting opportunities.
          Whether you have a question or just want to say hi, our inbox is open.
          Feel free to reach out to us about working together or we can just
          have an interesting conversation!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://www.facebook.com/expansionproject?mibextid=MKOS29"
            target="_blank"
          >
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
          <Link
            href="https://www.instagram.com/expansionproject/"
            target="_blank"
          >
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-lg font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg block w-full p-2.5"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-lg mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hello!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-lg mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-[#50fd9a] text-xl rounded-lg block w-full p-4"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-[#50fd9a] hover:bg-[#8fffbf] text-black font-medium py-4 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
