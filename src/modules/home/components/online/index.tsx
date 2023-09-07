import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Link from "next/link"

const OnlineRoastery = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="pt-12 pb-6"> 
    <div className="flex justify-start mb-6 px-6  text-black text-[18px] font-semibold leading-normal">
    온라인에서 처음 만나봐요
          </div>
      <div className="flex flex-row justify-evenly mb-3">
        <div className="relative flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast1.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_n.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #부산
          </div>
        </div>
        <div className="relative flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast2.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_n.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #서울
          </div>

        </div>
        <div className="relative flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast3.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_a.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #제주
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly mb-3">
        <div className="relative flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast1.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_n.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #부산
          </div>
        </div>
        <div className="relative flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast2.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_a.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #서울
          </div>

        </div>
        <div className="relative flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast3.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_n.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #제주
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
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

export default OnlineRoastery
