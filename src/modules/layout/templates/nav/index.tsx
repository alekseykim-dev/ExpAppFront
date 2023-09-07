import { useMobileMenu } from "@lib/context/mobile-menu-context";
import Hamburger from "@modules/common/components/hamburger";
import CartDropdown from "@modules/layout/components/cart-dropdown";
import DropdownMenu from "@modules/layout/components/dropdown-menu";
import MobileMenu from "@modules/mobile-menu/templates";
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


// Custom hook
function useNavigationLink(path:string, label:string) {
  const { pathname } = useRouter();
  const isActive = pathname === path;

  return (
    <Link href={path}>
      <div className="relative w-[80px] text-center group">
        <span className={clsx(
            "transition-colors duration-200",
            {
              "text-black": isActive,
              "text-gray-400": !isActive
            }
          )}
        >
          {label}
        </span>
        <div 
          className={clsx(
            "absolute left-0 bottom-[-13px] h-[4px] bg-black transform transition-all ease-in-out duration-200", 
            {
              "w-[80px]": isActive,
              "w-0": !isActive
            }
          )}
        ></div>
      </div>
    </Link>
  );
}


const Nav = () => {
  const { pathname } = useRouter();
  const [isHome, setIsHome] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(true);
        }
      };

      window.addEventListener("scroll", detectScrollY);

      return () => {
        window.removeEventListener("scroll", detectScrollY);
      };
    }
  }, [isHome]);

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathname]);



  
  // navbar disappears

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop =
  //       window.scrollY || document.documentElement.scrollTop;
  //     const navbar = document.getElementById("navbar");

  //     if (scrollTop > lastScrollTop) {
  //       navbar!.style.top = "-100px";
  //     } else {
  //       navbar!.style.top = "0";
  //     }

  //     lastScrollTop = scrollTop;
  //   };

  //   let lastScrollTop = 0;
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  
  const { toggle } = useMobileMenu();

  // Use the custom hook for each navigation link
  const homeLink = useNavigationLink('/', '홈');
  const storeLink = useNavigationLink('/store', '커피');
  const roasteryLink = useNavigationLink('/roastery', '로스터리');
  const contentsLink = useNavigationLink('/contents', '컨텐츠');

  return (
    <div id="navbar"
  
    >
      <header
        className={clsx(
          "relative h-[58px] px-8 mx-auto transition-colors border-b border-transparent duration-200 group-hover:bg-black group-hover:border-black-200",
          {
            "!bg-black !border-black-200": !isHome || isScrolled,
          }
        )}
      >
        <nav 
          className={clsx(
            "text-gray-900 flex items-center justify-center w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-white group-hover:text-gray-900": isHome && !isScrolled,
            }
          )}
        >
          <div className="flex items-center h-full">
            <Link href="/" className=" mt-[8px]">
              <img src="/logo.svg" alt="logo" />
            </Link>
          </div>
        </nav>
        <MobileMenu />
      </header>
      <div className="flex justify-center mt-[12px] h-[34px] text-center text-[#999] text-[14px] font-semibold leading-normal">
        {homeLink}
        {storeLink}
        {roasteryLink}
        {contentsLink}
      </div>
    </div>
  );
};

export default Nav;
