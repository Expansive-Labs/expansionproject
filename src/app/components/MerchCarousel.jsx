import React from "react";
import Image from "next/image";
import { useState } from "react";

const images = [
  // Sweatshirt
  {
    imageUrl: "/images/merchThumbnails/sweatFIT.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518889/expansion-project-premium-hoodie",
    caption: "Premium Sweatshirt",
  },
  {
    imageUrl: "/images/merchThumbnails/sweatBACK.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518889/expansion-project-premium-hoodie",
    caption: "Premium Sweatshirt",
  },
  {
    imageUrl: "/images/merchThumbnails/sweatM.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518889/expansion-project-premium-hoodie",
    caption: "Premium Sweatshirt",
  },
  {
    imageUrl: "/images/merchThumbnails/sweatF.webp",
    linkUrl:
      "https://expansion-project-merch.printify.me/product/4518889/expansion-project-premium-hoodie",
    caption: "Premium Sweatshirt",
  },
  // T-Shirt
  {
    imageUrl: "/images/merchThumbnails/classicTFRONT.webp",
    linkUrl:
      "https://expansion-projects-merch-store.printify.me/product/4518887/expansion-project-classic-t-shirt",
    caption: "Classic T-Shirt",
  },
  {
    imageUrl: "/images/merchThumbnails/classicTBACK.webp",
    linkUrl:
      "https://expansion-projects-merch-store.printify.me/product/4518887/expansion-project-classic-t-shirt",
    caption: "Classic T-Shirt",
  },
  {
    imageUrl: "/images/merchThumbnails/classicM.webp",
    linkUrl:
      "https://expansion-projects-merch-store.printify.me/product/4518887/expansion-project-classic-t-shirt",
    caption: "Classic T-Shirt",
  },
  {
    imageUrl: "/images/merchThumbnails/classicF.webp",
    linkUrl:
      "https://expansion-projects-merch-store.printify.me/product/4518887/expansion-project-classic-t-shirt",
    caption: "Classic T-Shirt",
  },
  // Long Sleeve
  // {
  //   imageUrl: "/images/merchThumbnails/classicF.webp",
  //   linkUrl:
  //     "https://expansion-projects-merch-store.printify.me/product/4518887/expansion-project-classic-t-shirt",
  //   caption: "Long Sleeve",
  // },
  // {
  //   imageUrl: "/images/merchThumbnails/classicF.webp",
  //   linkUrl:
  //     "https://expansion-projects-merch-store.printify.me/product/4518887/expansion-project-classic-t-shirt",
  //   caption: "Long Sleeve",
  // },
  // {
  //   imageUrl: "/images/merchThumbnails/classicF.webp",
  //   linkUrl:
  //     "https://expansion-projects-merch-store.printify.me/product/4518887/expansion-project-classic-t-shirt",
  //   caption: "Long Sleeve",
  // },
  // {
  //   imageUrl: "/images/merchThumbnails/classicF.webp",
  //   linkUrl:
  //     "https://expansion-projects-merch-store.printify.me/product/4518887/expansion-project-classic-t-shirt",
  //   caption: "Long Sleeve",
  // },
];

const MerchCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <section id="merch" className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-[#50fd9a] mt-12 mb-8 md:mb-12 determination-mono-font">
        Merch
      </h2>
      <div className="relative w-full md:w-[512px] h-64 md:h-[512px] rounded-lg">
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
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
            {images[currentImage].caption}
          </div>
        </a>
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default MerchCarousel;
