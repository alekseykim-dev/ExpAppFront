import { fetchProductsList } from "@lib/data"
import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import { StoreGetProductsParams } from "@medusajs/medusa"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useCart } from "medusa-react"
import { useEffect, useMemo, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";


type InfiniteProductsType = {
  params: StoreGetProductsParams
}

const InfiniteProducts = ({ params }: InfiniteProductsType) => {
  const { cart } = useCart()
  const { ref, inView } = useInView()

  const queryParams = useMemo(() => {
    const p: StoreGetProductsParams = {}

    if (cart?.id) {
      p.cart_id = cart.id
    }

    p.is_giftcard = false

    return {
      ...p,
      ...params,
    }
  }, [cart?.id, params])

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      [`infinite-products-store`, queryParams, cart],
      ({ pageParam }) => fetchProductsList({ pageParam, queryParams }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )

  const previews = usePreviews({ pages: data?.pages, region: cart?.region })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage])

  const [view, setView] = useState("default") // default view is grid
  const gridClasses =
    view === "default"
      ? "grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8 flex-1"
      : "grid grid-cols-1 gap-y-8 flex-1"
      function classNames(...classes: any) {
        return classes.filter(Boolean).join(" ");
      }
      const [selectedOption2, setSelectedOption2] = useState("10g 낮은 가격순");
      const handleOptionClick3 = (option: string) => {
        setSelectedOption2(option);
      };
  return (
    <div className="flex-1 content-container">
       <div className="flex justify-between mb-4 items-center">
        {/* Dropdown Menu for Categories */}
       
        <div><button onClick={() => setView("default")} className="mx-2">
          <img
            src={view === "default" ? "/store_grid_a.svg" : "/store_grid.svg"}
            alt="Grid View"
          />
        </button>
        <button onClick={() => setView("list")} className="mx-2">
          <img
            src={view === "list" ? "/store_list_a.svg" : "/store_list.svg"}
            alt="List View"
          />
        </button></div>
        
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-[142px] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={() => handleOptionClick3("10g당 낮은 가격순")}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-400",
                                  "block px-[15px] py-2 text-sm"
                                )}
                              >
                             10g당 낮은 가격순
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={() =>
                                  handleOptionClick3("10g당 높은 가격순")
                                }
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-400",
                                  "block px-[15px] py-2 text-sm"
                                )}
                              >
                                10g당 높은 가격순
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

      <ul className={gridClasses}>
        {previews.map((p) => (
          <li key={p.id}>
            <ProductPreview {...p} view={view} />
          </li>
        ))}
        {isLoading &&
          !previews.length &&
          repeat(8).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
        {isFetchingNextPage &&
          repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
      </ul>
      <div
        className="py-16 flex justify-center items-center text-small-regular text-gray-700"
        ref={ref}
      >
        <span ref={ref}></span>
      </div>
    </div>
  )
}

export default InfiniteProducts
