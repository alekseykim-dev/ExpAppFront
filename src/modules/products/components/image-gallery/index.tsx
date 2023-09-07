import { Image as MedusaImage } from "@medusajs/medusa";
import Image from "next/image";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";

type ImageGalleryProps = {
  images: MedusaImage[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  return (
    <div className="flex items-start relative">
      <div className="hidden small:flex flex-col gap-y-4 sticky top-20">
      </div>
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4 relative cursor-grab">
      <SwipeableViews
        enableMouseEvents
        index={selectedImageIndex}
        onChangeIndex={(index: number) => setSelectedImageIndex(index)}
        onSwitching={(index: number) => {
          let newIndex = index;

          if (index < 0) {
            newIndex = images.length - 1;
          } else if (index >= images.length) {
            newIndex = 0;
          } 

          setSelectedImageIndex(newIndex);
        }}
      >
          
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[29/34] w-full"
            >
              <Image
                src={image.url}
                priority={index <= 2}
                className="absolute inset-0"
                alt={`Product image ${index + 1}`}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </SwipeableViews>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-[16px] h-[2px] mx-1 rounded-full ${
                index === selectedImageIndex ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => setSelectedImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
