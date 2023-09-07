import { StoreGetProductsParams } from "@medusajs/medusa" // Importing based on the Store component
import RefinementList from "@modules/store/components/refinement-list"

import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { useState } from "react"
import { NextPageWithLayout } from "types/global" // based on the Store component
import Image from "next/image"
import ContentsNav from "@modules/layout/templates/contents-nav"

const Contents: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Coffee"
        description="Shop all available models only at the Tasteit. Worldwide Shipping. Secure Payment."
      />
      <ContentsNav />

      <div className="flex flex-col items-center small:flex-col">
        <div className="flex-grow p-4">
          <div className="relative mb-[20px]">
            {/* Placeholder for Contents specific content */}
            <Image
              src="/contents.png"
              alt="Test Image"
              width={320}
              height={320}
              style={{ borderRadius: "10px" }}
            />
            {/* <img src="./coffeeshop1.png" alt="" /> */}
            {/* You can continue adding your other Images and content here */}
            {/* Continue adding your Contents specific content */}

            <div className="absolute flex flex-col right-[15px] top-[280px]">
              <button>
                {" "}
                <img src="/save_big_a.svg" alt="" />
              </button>
            </div>
            <div className="text-black-500 text-[16px] py-3">
              시간이 멈춘곳, 오금동 커피
            </div>
          </div>
          <div className="relative mb-[20px]">
            {/* Placeholder for Contents specific content */}
            <Image
              src="/contents_1.png"
              alt="Test Image"
              width={320}
              height={320}
              style={{ borderRadius: "10px" }}
            />
            {/* <img src="./coffeeshop1.png" alt="" /> */}
            {/* You can continue adding your other Images and content here */}
            {/* Continue adding your Contents specific content */}

            <div className="absolute flex flex-col right-[15px] top-[280px]">
              <button>
                {" "}
                <img src="/save_big_a.svg" alt="" />
              </button>
            </div>
            <div className="text-black-500 text-[16px] py-3">
              기쁨을 전하는 스토리 텔러, 커피파인더
            </div>
          </div>


          <div className="relative mb-[20px]">
            {/* Placeholder for Contents specific content */}
            <Image
              src="/contents.png"
              alt="Test Image"
              width={320}
              height={320}
              style={{ borderRadius: "10px" }}
            />
            {/* <img src="./coffeeshop1.png" alt="" /> */}
            {/* You can continue adding your other Images and content here */}
            {/* Continue adding your Contents specific content */}

            <div className="absolute flex flex-col right-[15px] top-[280px]">
              <button>
                {" "}
                <img src="/save_big_a.svg" alt="" />
              </button>
            </div>
            <div className="text-black-500 text-[16px] py-3">
              시간이 멈춘곳, 오금동 커피
            </div>
          </div>
          <div className="relative mb-[20px]">
            {/* Placeholder for Contents specific content */}
            <Image
              src="/contents_1.png"
              alt="Test Image"
              width={320}
              height={320}
              style={{ borderRadius: "10px" }}
            />
            {/* <img src="./coffeeshop1.png" alt="" /> */}
            {/* You can continue adding your other Images and content here */}
            {/* Continue adding your Contents specific content */}

            <div className="absolute flex flex-col right-[15px] top-[280px]">
              <button>
                {" "}
                <img src="/save_big_a.svg" alt="" />
              </button>
            </div>
            <div className="text-black-500 text-[16px] py-3">
              기쁨을 전하는 스토리 텔러, 커피파인더
            </div>
          </div>

          <div className="relative mb-[20px]">
            {/* Placeholder for Contents specific content */}
            <Image
              src="/contents.png"
              alt="Test Image"
              width={320}
              height={320}
              style={{ borderRadius: "10px" }}
            />
            {/* <img src="./coffeeshop1.png" alt="" /> */}
            {/* You can continue adding your other Images and content here */}
            {/* Continue adding your Contents specific content */}

            <div className="absolute flex flex-col right-[15px] top-[280px]">
              <button>
                {" "}
                <img src="/save_big_a.svg" alt="" />
              </button>
            </div>
            <div className="text-black-500 text-[16px] py-3">
              시간이 멈춘곳, 오금동 커피
            </div>
          </div>
          <div className="relative mb-[20px]">
            {/* Placeholder for Contents specific content */}
            <Image
              src="/contents_1.png"
              alt="Test Image"
              width={320}
              height={320}
              style={{ borderRadius: "10px" }}
            />
            {/* <img src="./coffeeshop1.png" alt="" /> */}
            {/* You can continue adding your other Images and content here */}
            {/* Continue adding your Contents specific content */}

            <div className="absolute flex flex-col right-[15px] top-[280px]">
              <button>
                {" "}
                <img src="/save_big_a.svg" alt="" />
              </button>
            </div>
            <div className="text-black-500 text-[16px] py-3">
              기쁨을 전하는 스토리 텔러, 커피파인더
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Contents.getLayout = (page) => <Layout>{page}</Layout>

export default Contents
