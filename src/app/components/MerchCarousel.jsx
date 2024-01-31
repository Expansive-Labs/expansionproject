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
    imageUrl: "/images/merchThumbnails/sweatM.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518889/expansion-project-premium-hoodie",
    caption: "Premium Sweatshirt (Grey)",
  },
  {
    imageUrl: "/images/merchThumbnails/sweatF.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518889/expansion-project-premium-hoodie",
    caption: "Premium Sweatshirt (Pink)",
  },
  // T-Shirt
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
    imageUrl: "/images/merchThumbnails/classicM.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518887/expansion-project-classic-t-shirt",
    caption: "Classic T-Shirt (Grey)",
  },
  {
    imageUrl: "/images/merchThumbnails/classicF.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518887/expansion-project-classic-t-shirt",
    caption: "Classic T-Shirt (Grey)",
  },
  // Mug
  {
    imageUrl: "/images/merchThumbnails/mug_front.webp",
    linkUrl: "https://expansion-project-merch.printify.me/product/5289177",
    caption: "The Mug | 11oz",
  },
  {
    imageUrl: "/images/merchThumbnails/mug_qr.webp",
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
  {
    imageUrl: "/images/merchThumbnails/tapestry_bluewall.webp",
    linkUrl: "https://expansion-project-merch.printify.me/product/5289674",
    caption: "Moon Tapestry",
  },
  {
    imageUrl: "/images/merchThumbnails/tapestry_wall.webp",
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
      <h2 className="text-4xl font-bold text-[#50fd9a] mt-12 mb-8 md:mb-12 determination-mono-font">
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
            alt="Merch Image"
            className="object-cover w-full h-full rounded-2xl"
            layout="fill"
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
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-black px-4 py-4 rounded-full"
          style={{ backgroundColor: "#c0c0c0" }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-1 transform -translate-y-1/2 text-black px-6 py-4 rounded-full"
          style={{ backgroundColor: "#c0c0c0" }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default MerchCarousel;
