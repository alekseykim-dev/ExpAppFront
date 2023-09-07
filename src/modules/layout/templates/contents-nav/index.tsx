import { useMobileMenu } from "@lib/context/mobile-menu-context"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import backBtn from "../../../../../public/backIcon.png"
import home from "../../../../../public/homeIcon.png"
import search from "../../../../../public/searchIcon.png"
import basket from "../../../../../public/basketIcon.png"
import Image from "next/image"
import router from "next/router"

// TODO: new navbar animation
// Custom hook
function useNavigationLink(path: string, label: string) {
  const { pathname } = useRouter()
  const isActive = pathname === path

  return (
    <Link href={path}>
      <div className="relative w-[80px] text-center group">
        <span
          className={clsx("transition-colors duration-200", {
            "text-black underline": isActive, // Added "underline" class
            "text-gray-600": !isActive,
          })}
        >
          {label}
        </span>
        <div
          className={clsx(
            "absolute left-0 bottom-[-13px] h-[4px] bg-black transform transition-all ease-in-out duration-200",
            {
              "w-[80px]": isActive,
              "w-0": !isActive,
            }
          )}
        ></div>
      </div>
    </Link>
  )
}

const ContentsNav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(true)

  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(true)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  // TODO: think of the contents links
  useEffect(() => {
    pathname === "/contents" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  // Use the custom hook for each navigation link
  const productDescriptionLink = useNavigationLink("/contents/people", "PEOPLE")
  const productDetailsLink = useNavigationLink("/contents/coffee", "COFFEE")
  const cuppingTalkLink = useNavigationLink("/contents/places", "PLACES")
  const inquiryLink = useNavigationLink("/contents/events", "EVENTS")

  return (
    <div className={clsx("top-0 inset-x-0 z-50 group", { "": isHome })}>
      <div className="flex justify-center items-center mt-[12px] h-[46px] text-center text-gray-400 text-[12px] font-['Didot'] border-[1px] border-[#D9D9D9]">
        {productDescriptionLink}
        {productDetailsLink}
        {cuppingTalkLink}
        {inquiryLink}
      </div>
    </div>
  )
}

export default ContentsNav
