"use client";
import React, { useState } from "react";
import FacebookIcon from "../../../public/facebook-icon-sq.svg";
import InstagramIcon from "../../../public/instagram-icon-w2.svg";
// import LinktreeIcon from "../../../public/linktree-icon-w2.svg";
import BandcampIcon from "../../../public/BandcampIconLogo.svg";
// import AppleMusicIcon from "../../../public/applemusic-icon-w2.svg";
// import SpotifyIcon from "../../../public/spotify-icon-w2.svg";
import Link from "next/link";
import Image from "next/image";

/// EMAIL SECTION ///

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, operator: "+" });
  const [captchaToken, setCaptchaToken] = useState("");

  // Generate a new captcha question on component mount and after each submission
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    // Hard-coded captcha: 3 + 0 = 3
    const num1 = 3;
    const num2 = 0;
    const operator = "+";

    setCaptchaQuestion({ num1, num2, operator });
    setCaptchaAnswer("");

    // Generate a unique token for this captcha instance
    const token = `${num1}-${operator}-${num2}-${Date.now()}`;
    setCaptchaToken(token);
  };

  const verifyCaptcha = () => {
    const { num1, num2, operator } = captchaQuestion;
    let correctAnswer;

    if (operator === "+") {
      correctAnswer = num1 + num2;
    } else if (operator === "-") {
      correctAnswer = num1 - num2;
    } else { // multiplication
      correctAnswer = num1 * num2;
    }

    return parseInt(captchaAnswer) === correctAnswer;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if captcha is verified
    if (!verifyCaptcha()) {
      alert("Please solve the math problem correctly to verify you're not a robot.");
      generateCaptcha(); // Generate new captcha on failed attempt
      return;
    }

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      captchaToken: captchaToken,
      captchaAnswer: captchaAnswer,
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

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        generateCaptcha(); // Generate new captcha after successful submission
      } else {
        console.error("Error sending message:", resData);
        alert(`Failed to send message: ${resData.error || "Unknown error"}`);
        if (resData.error && resData.error.includes("Captcha")) {
          generateCaptcha(); // Generate new captcha on captcha-related errors
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending your message. Please try again.");
    }
  };

  // not applied
  const iconStyle = {
    fill: "black",
  };

  const handleSocialIconClick = (e, url) => {
    e.preventDefault();
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 200);
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
          Greetings! We&apos;re on the lookout for new and exciting connections.
          Whether you have a question about the band or just want to say hello,
          our inbox is always open. Feel free to get in touch with us about
          bookings, collaborations, or just to have an interesting conversation!
        </p>
        <div className="socials flex flex-row gap-4 items-center"> {/* Added items-center for vertical alignment */}
          <a
            href="https://www.instagram.com/expansionproject/"
            onClick={(e) =>
              handleSocialIconClick(
                e,
                "https://www.instagram.com/expansionproject/"
              )
            }
            className="social-icon-button"
          >
            <Image
              src={InstagramIcon}
              alt="Instagram Icon"
              width={40}  // Reverted from 50 to 40
              height={40} // Reverted from 50 to 40
            />
          </a>
          <a
            href="https://www.facebook.com/expansionproject?mibextid=MKOS29"
            onClick={(e) =>
              handleSocialIconClick(
                e,
                "https://www.facebook.com/expansionproject?mibextid=MKOS29"
              )
            }
            className="social-icon-button"
          >
            <Image
              src={FacebookIcon}
              alt="Facebook Icon"
              width={44}  // Increased from 40 to 44
              height={44} // Increased from 40 to 44
              style={{
                filter: 'brightness(0) saturate(100%) invert(83%) sepia(29%) saturate(1080%) hue-rotate(86deg) brightness(104%) contrast(103%)',
              }}
            />
          </a>
          {/* Linktree icon removed */}
          <a
            href="https://expansionproject.bandcamp.com/"
            onClick={(e) =>
              handleSocialIconClick(e, "https://expansionproject.bandcamp.com/")
            }
            className="social-icon-button ml-8" // Increased from ml-4 to ml-8 for more margin-left
          >
            <Image
              src={BandcampIcon}
              alt="Bandcamp Icon"
              width={85}  // Increased from 75 to 85
              height={85} // Increased from 75 to 85
              style={{
                filter: 'brightness(0) saturate(100%) invert(83%) sepia(29%) saturate(1080%) hue-rotate(86deg) brightness(104%) contrast(103%)',
                transform: 'scale(2)', // Increased from 1.8 to 2
                margin: '0 5px',
              }}
            />
          </a>
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
              className="bg-[#18191E] border border-[#33353F] placeholder-[#D3D3D3] text-lg font-bold rounded-lg block w-full p-2.5"
              style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
              placeholder="youremail@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-[#f6f3ed] block text-sm mb-2 font-medium"
            >
              Subject Title
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#D3D3D3] text-lg font-bold rounded-lg block w-full p-2.5"
              style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
              placeholder="Just saying hello!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-[#f6f3ed] block text-sm mb-2 font-medium"
            >
              Message to the band
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-[#50fd9a] text-xl rounded-lg block w-full p-4"
              placeholder="Let's talk about..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="captcha"
              className="text-[#f6f3ed] block text-sm mb-2 font-medium"
            >
              Verify you&apos;re human
            </label>
            <div className="p-4 bg-[#18191E] border border-[#33353F] rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-[#f6f3ed] text-lg font-semibold">
                  {captchaQuestion.num1} {captchaQuestion.operator} {captchaQuestion.num2} =
                </span>
                <input
                  type="number"
                  id="captcha"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  required
                  className="bg-white border border-[#50fd9a] text-lg font-bold rounded-lg p-2 w-20 focus:ring-[#50fd9a] focus:ring-2"
                  style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
                  placeholder="?"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="send-message-button bg-gradient-to-br from-[#38d57c] to-[#50fd9a] text-[#121212] font-bold determination-mono-font py-4 px-5 rounded-lg w-full relative overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
          >
            <span className="relative z-10 text-lg tracking-wide">
              Send Message
            </span>
          </button>
          {emailSubmitted && (
            <div className="mt-4 p-4 bg-[#50fd9a] bg-opacity-20 rounded-lg">
              <p className="text-[#50fd9a] text-lg font-semibold kallisto-lined-font">
                Thank you for contacting Expansion Project!
              </p>
              <p className="text-[#ADB7BE] text-sm mt-2 determination-mono-font">
                Your message was sent to the band.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
