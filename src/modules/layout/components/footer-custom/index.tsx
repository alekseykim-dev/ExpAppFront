import clsx from "clsx"
import Link from "next/link";
import { useRouter } from "next/router";




const FooterCustom = () => {
  return (
    <div>
      <div className="lg:hidden fixed bottom-0 w-[100%] h-[65px] bg-black text-white  mx-auto flex items-center">
        <div className="flex justify-around w-[100%]">
          <div className="relative top-[15px] w-[37px]">
          <Link href={"/cart"}> <img src="/cart_icon.svg" alt="" /> </Link>
          </div>
          <div className="relative top-[15px] w-[37px] pl-[7px]">
          <Link href={"/search"}> <img src="/search_icon.svg" alt="" /></Link>
          </div>
          <div className="relative bottom-[17px]">
           <Link href={"/wishlist"}> <img src="/footer_tounge.svg" alt="" className="px-[-15px]"/> </Link>
          </div>
          <div className="relative top-[15px] w-[37px] pl-[6px]">
           <Link href={"/notifications"}> <img src="/notification_icon.svg" alt="" /></Link>
          </div>
          <div className="relative top-[15px] w-[37px] pl-[7px]">
           <Link href={"/account"}> <img src="/page_icon.svg" alt="" /></Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default FooterCustom
