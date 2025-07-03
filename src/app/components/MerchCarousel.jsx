"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

/// MERCH CAROUSEL ///
const images = [
  // Sweatshirt
  {
    imageUrl: "/images/merchThumbnails/sweatFIT.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518889/expansion-project-premium-hoodie",
    caption: "Premium Sweatshirt (Grey)",
  },
  {
    imageUrl: "/images/merchThumbnails/sweatBACK.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518889/expansion-project-premium-hoodie",
    caption: "Premium Sweatshirt (Black)",
  },
  {
    imageUrl: "/images/merchThumbnails/classicTFRONT.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518887/expansion-project-classic-t-shirt",
    caption: "Classic T-Shirt (Grey)",
  },
  {
    imageUrl: "/images/merchThumbnails/classicTBACK.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518887/expansion-project-classic-t-shirt",
    caption: "Classic T-Shirt (Grey)",
  },
  {
    imageUrl: "/images/merchThumbnails/mug_front.webp",
    linkUrl: "https://expansion-project-merch.printify.me/product/5289177",
    caption: "The Mug | 11oz",
  },
  {
    imageUrl: "/images/merchThumbnails/mug_logo.webp",
    linkUrl: "https://expansion-project-merch.printify.me/product/5289177",
    caption: "The Mug | 11oz",
  },
  // Tapestry
  {
    imageUrl: "/images/merchThumbnails/tapestry_whitewall.webp",
    linkUrl: "https://expansion-project-merch.printify.me/product/5289674",
    caption: "Moon Tapestry",
  },
];

const MerchCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentImage((currentImage + 1) % images.length),
    onSwipedRight: () =>
      setCurrentImage((currentImage - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  // Merch Window
  return (
    <section id="merch" className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-[#50fd9a] mt-12 mb-8 md:mb-12 kallisto-lined-font">
        Merch
      </h2>
      <h1
        style={{
          fontSize: "16px",
          textAlign: "center",
          color: "#50fd9a",
          fontFamily: "determination-mono-font",
        }}
      >
        *swipe and click
      </h1>
      <div
        className="relative w-full md:w-[512px] h-64 md:h-[512px] rounded-lg"
        {...handlers}
      >
        <a
          href={images[currentImage].linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={images[currentImage].imageUrl}
            alt={images[currentImage].caption}
            className="object-cover w-full h-full rounded-2xl"
            fill
            sizes="(max-width: 768px) 100vw, 512px"
            priority={currentImage === 0}
            loading={currentImage === 0 ? "eager" : "lazy"}
          />
          <div
            className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2"
            style={{
            }}
          >
            {images[currentImage].caption}
          </div>
        </a>
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#c0c0c0] text-black px-3 py-3 sm:px-4 sm:py-4 rounded-full shadow-lg hover:bg-[#d4d4d4] transition-colors duration-200 text-sm sm:text-base"
          aria-label="Previous image"
        >
          <span className="hidden sm:inline">Previous</span>
          <span className="sm:hidden">‹</span>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#c0c0c0] text-black px-3 py-3 sm:px-6 sm:py-4 rounded-full shadow-lg hover:bg-[#d4d4d4] transition-colors duration-200 text-sm sm:text-base"
          aria-label="Next image"
        >
          <span className="hidden sm:inline">Next</span>
          <span className="sm:hidden">›</span>
        </button>
      </div>
    </section>
  );
};

export default MerchCarousel;
