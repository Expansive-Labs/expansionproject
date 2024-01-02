// "use client";
import React, { useState } from "react";
import FacebookIcon from "../../../public/facebook-icon-w2.svg";
import InstagramIcon from "../../../public/instagram-icon-w2.svg";
// import AppleMusicIcon from "../../../public/applemusic-icon-w2.svg";
// import SpotifyIcon from "../../../public/spotify-icon-w2.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  // not applied
  const iconStyle = {
    fill: "black",
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className=" from-[#50fd9a] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-[#f6f3ed] my-2 determination-mono-font flex items-center">
          {" "}
          Let&apos;s Connect.
          <Image
            src="/images/aimLogo.webp"
            alt="Let's Connect Image"
            width={25} // Adjust the width as needed
            height={25} // Adjust the height as needed
            className="ml-2 rounded-md" // Add margin to separate the image from the text
          />
        </h5>
        <p className="text-[#ADB7BE] text-sm mb-8 max-w-md determination-mono-font">
          {" "}
          Greetings! We&apos;re always on the lookout for new and exciting
          connections. Whether you have a question or just want to say hello,
          our inbox is open. Feel free to get in touch with us about
          collaborations, bookings, or just to have an interesting conversation!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link
            href="https://www.facebook.com/expansionproject?mibextid=MKOS29"
            target="_blank"
          >
            <Image src={FacebookIcon} alt="Facebook Icon" style={iconStyle} />
          </Link>
          <Link
            href="https://www.instagram.com/expansionproject/"
            target="_blank"
          >
            <Image src={InstagramIcon} alt="Instagram Icon" style={iconStyle} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-[#f6f3ed] block mt-8 mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#82878d] text-gray-600 text-sm rounded-lg block w-full p-2.5"
              placeholder="youremail@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-[#f6f3ed] block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#82878d] text-gray-600 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hello!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-[#f6f3ed] block text-sm mb-2 font-medium"
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
            className="bg-[#38d57c] hover:bg-[#8fffbf] text-black font-medium py-4 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-[#50fd9a] text-lg mt-2 determination-mono-font">
              Your message has been sent to Expansion Project!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
