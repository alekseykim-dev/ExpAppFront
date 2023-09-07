import Head from "@modules/common/components/head";
import { ReactElement } from "react";
import { useState } from "react";

import Image from "next/image";
import Nav from "@modules/layout/templates/nav";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
import { StoreGetProductsParams } from "@medusajs/medusa"
import Layout from "@modules/layout/templates"
import RefinementList from "@modules/store/components/refinement-list"
import { NextPageWithLayout } from "types/global"

const Roastery: NextPageWithLayout = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  // Define state for currently selected option
  const [selectedOption, setSelectedOption] = useState("서울");
  const [selectedOption2, setSelectedOption2] = useState("찜 많은 순");

  // Update 'selectedOption' when an option is clicked
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleOptionClick2 = (option: string) => {
    setSelectedOption2(option);
  };
  return (
    <>
     <Head title="Roastery" description="Discover our coffee origins and roastery locations." />
      <div className="flex flex-col small:flex-row small:items-start">
        <div className="flex-grow p-4">
          <div className="flex h-[46px] justify-between items-center mx-[20px] text-black text-right text-[14px] font-normal leading-normal">
            <div>
              <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm text-gray-900 ">
                      {selectedOption}
                      <ChevronDownIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } -mr-1 h-5 w-5 text-black-400`}
                        aria-hidden="true"
                      />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      //...
                    >
                      <Menu.Items className="absolute left-0 z-10 mt-2 w-[100px] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={() => handleOptionClick("서울")}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-400",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                서울
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={() => handleOptionClick("부산")}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-400",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                부산
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={() => handleOptionClick("제주")}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-400",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                제주
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>

            <div>
              <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm text-gray-900 ">
                      {selectedOption2}
                      <ChevronDownIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } -mr-1 h-5 w-5 text-black-400`}
                        aria-hidden="true"
                      />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      //...
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-[105px] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={() => handleOptionClick2("찜 많은 순")}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-400",
                                  "block px-[15px] py-2 text-sm"
                                )}
                              >
                                찜 많은 순
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={() =>
                                  handleOptionClick2("한글 순 ㄱ-ㅎ")
                                }
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-400",
                                  "block px-[15px] py-2 text-sm"
                                )}
                              >
                                한글 순 ㄱ-ㅎ
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={() =>
                                  handleOptionClick2("영어 순 A-Z제주")
                                }
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-400",
                                  "block px-[15px] py-2 text-sm"
                                )}
                              >
                                영어 순 A-Z
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative mt-[16px] flex items-center flex-col h-[395px] w-[360px]">
            <img
              src="/coffeeshop1.png"
              alt=""
              className="rounded-lg bg-gray-200 w-[320px]"
            />
            <div className="absolute flex flex-col right-[30px] top-[290px]">
              <button>
                {" "}
                <img src="/save_big_a.svg" alt="" />
              </button>
              <div className="flex items-center justify-center text-gray-800 text-sm">
                355
              </div>
            </div>

           <div className="absolute top-[336px] left-[30px] flex flex-col justify-start">
            <div>
              <div className="text-black text-[20px]">
                [비브레이브]
              </div>
            </div>
            <div className=" text-gray-700 text-[14px] font-normal">
              {" "}
              부산 해운대구
            </div>
           </div>
           
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative mt-[16px] flex items-center flex-col h-[395px] w-[360px]">
            <img
              src="/coffeeshop2.png"
              alt=""
              className="rounded-lg bg-gray-200 w-[320px]"
            />
            <div className="absolute flex flex-col right-[30px] top-[290px]">
              <button>
                {" "}
                <img src="/save_big_n.svg" alt="" />
              </button>
              <div className="flex items-center justify-center text-gray-800 text-sm">
                326
              </div>
            </div>

           <div className="absolute top-[336px] left-[30px] flex flex-col justify-start">
            <div>
              <div className="text-black text-[20px]">
                [비브레이브]
              </div>
            </div>
            <div className=" text-gray-700 text-[14px] font-normal">
              {" "}
              부산 해운대구
            </div>
           </div>
           
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative mt-[16px] flex items-center flex-col h-[395px] w-[360px]">
            <img
              src="/coffeeshop3.png"
              alt=""
              className="rounded-lg bg-gray-200 w-[320px]"
            />
            <div className="absolute flex flex-col right-[30px] top-[290px]">
              <button>
                {" "}
                <img src="/save_big_a.svg" alt="" />
              </button>
              <div className="flex items-center justify-center text-gray-800 text-sm">
                355
              </div>
            </div>

           <div className="absolute top-[336px] left-[30px] flex flex-col justify-start">
            <div>
              <div className="text-black text-[20px]">
                [비브레이브]
              </div>
            </div>
            <div className=" text-gray-700 text-[14px] font-normal">
              {" "}
              부산 해운대구
            </div>
           </div>
           
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative mt-[16px] flex items-center flex-col h-[395px] w-[360px]">
            <img
              src="/coffeeshop4.png"
              alt=""
              className="rounded-lg bg-gray-200 w-[320px]"
            />
            <div className="absolute flex flex-col right-[30px] top-[290px]">
              <button>
                {" "}
                <img src="/save_big_n.svg" alt="" />
              </button>
              <div className="flex items-center justify-center text-gray-800 text-sm">
              326
              </div>
            </div>

           <div className="absolute top-[336px] left-[30px] flex flex-col justify-start">
            <div>
              <div className="text-black text-[20px]">
                [비브레이브]
              </div>
            </div>
            <div className=" text-gray-700 text-[14px] font-normal">
              {" "}
              부산 해운대구
            </div>
           </div>
           
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative mt-[16px] flex items-center flex-col h-[395px] w-[360px]">
            <img
              src="/coffeeshop5.png"
              alt=""
              className="rounded-lg bg-gray-200 w-[320px]"
            />
            <div className="absolute flex flex-col right-[30px] top-[290px]">
              <button>
                {" "}
                <img src="/save_big_a.svg" alt="" />
              </button>
              <div className="flex items-center justify-center text-gray-800 text-sm">
                355
              </div>
            </div>

           <div className="absolute top-[336px] left-[30px] flex flex-col justify-start">
            <div>
              <div className="text-black text-[20px]">
                [비브레이브]
              </div>
            </div>
            <div className=" text-gray-700 text-[14px] font-normal">
              {" "}
              부산 해운대구
            </div>
           </div>
           
          </div>
        </div>

        <div className=" flex justify-center items-center mt-[48px] mb-40 w-100% ">
          <div className=" w-[320px] h-[44px] flex justify-center items-center rounded-md border-solid border border-fff">
            펼쳐보기 <img src="/plus.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
Roastery.getLayout = (page) => <Layout>{page}</Layout>

export default Roastery;
