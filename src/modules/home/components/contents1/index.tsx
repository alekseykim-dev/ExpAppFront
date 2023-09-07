import React, { useState, useEffect, useRef } from "react"
import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import Link from "next/link"

const roasteryImages = ["/heroc4.webp", "/heroc5.jpeg", "/heroc6.jpeg"] // Add the paths to your hero images
const SWIPE_THRESHOLD = 50 // easier to trigger slide changes with swipes

const Contents = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

 // swipe
 const [dragging, setDragging] = useState(false)
 const [dragStartX, setDragStartX] = useState(0)
 const sliderRef = useRef<HTMLDivElement | null>(null)
 useEffect(() => {
   const interval = setInterval(() => {
     if (!dragging) {
       setCurrentImageIndex(
         (prevIndex) => (prevIndex + 1) % roasteryImages.length
       )
     }
   }, 5000)

   return () => clearInterval(interval)
 }, [dragging])

 const handleDotClick = (index: number) => {
   setCurrentImageIndex(index)
 }

 const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
   e.preventDefault()
   setDragging(true)
   setDragStartX("touches" in e ? e.touches[0].clientX : e.clientX)
 }

 const handleDragEnd = () => {
   setDragging(false)
 }

 const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
   if (!sliderRef.current) {
     return
   }

   if (dragging) {
     const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
     const dragDistance = clientX - dragStartX

     if (Math.abs(dragDistance) >= SWIPE_THRESHOLD) {
       const direction = dragDistance > 0 ? -1 : 1
       const newIndex =
         (currentImageIndex + direction + roasteryImages.length) %
         roasteryImages.length

       setCurrentImageIndex(newIndex)
       setDragStartX(clientX) // ensures smoother and more intuitive swipes
     }
   }
 }

  return (
    <div
    className="cursor-grab"
    ref={sliderRef}
    onMouseDown={handleDragStart}
    onMouseUp={handleDragEnd}
    onMouseMove={handleDrag}
    onMouseLeave={handleDragEnd}
    onTouchStart={handleDragStart}
    onTouchEnd={handleDragEnd}
    onTouchMove={handleDrag}
  >
     <div className=" px-4 mt-[86px] mb-3  text-black text-[18px] font-semibold leading-normal">
      이번 시즌에 만 만나볼 수 있는 원두
      </div>
      <div className="h-[360px] w-360px relative my-6">
        <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
          <Link href="/roastery"></Link>
          {/* /store */}
          {/* TODO: click logic */}
        </div>

        <div className="absolute inset-0">
          {roasteryImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              loading="eager"
              priority={true}
              quality={90}
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              draggable="true"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          {roasteryImages.map((_, index) => (
            <button
              key={index}
              className={`h-[2px] w-[16px] rounded-full mx-1 transition-all ${
                index === currentImageIndex ? "bg-white" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
     

      <div className="flex items-center justify-center">
        <button className="w-[320px] h-[44px] rounded-md border border-gray-300 bg-white flex justify-center my-3 ">
          <Link href={"/roastery"}>
            {" "}
            <div className="font-semibold text-gray-700 my-2.5 flex flex-row text-[14px] ">
              보러가기
              <img src="/arrow_right.svg" alt="arrow" />
            </div>
          </Link>
        </button>
      </div>

  
    </div>
  )
}

export default Contents
