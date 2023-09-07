import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Link from "next/link"
import { Fragment } from "react"
const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="pt-12 pb-6">
      <div className="py-6">
        <div className="flex flex-wrap items-center">
          <div className="flex justify-start w-[165px] text-black-600 mb-6 ml-[20px] text-black text-[18px] font-semibold leading-normal">
            재구매율이 많은 원두
          </div>

          {/* <UnderlineLink href="/store">Explore products</UnderlineLink> */}
        </div>
        <div>
          <div className="flex flex-col items-start px-6 py-8">
            {data
              ?  data.slice(0, 3).map((product) => (
                  <Fragment key={product.id}>
                        <Link href={`/products/${product.handle}`}>

                    <div className="flex flex-row items-center w-[87vw] justify-around">
                      <img
                        src={product.thumbnail || "/default_image_path.png"}
                        alt={product.title || ""}
                        className=" h-[70px] w-[70px] bg-slate-300 rounded-full"
                      />

                      <div className="px-4">
                        <p className="text-[#333] font-suite text-[14px] font-semibold leading-normal tracking-tighter">
                          {product.title || "Product Name"}
                        </p>
                        <p className="text-[#666] font-[Noto Sans] text-[12px] font-normal leading-normal tracking-tighter">
                          {product.price?.original_price}
                        </p>
                      </div>

                      <div className="ml-auto">
                          <img src="/arrow_right.svg" alt="" />
                      </div>
                    </div>
                    </Link>

                    {/* Line under each product */}
                    <div className="flex justify-end py-6">
                      <div className="w-[93.4vw] h-[1px] flex-shrink-0 bg-[#333]"></div>
                    </div>
                  </Fragment>
                ))
              : Array.from(Array().keys()).map((i) => (
                  <div key={i}>
                    <SkeletonProductPreview />
                  </div>
                ))}
          </div>
        </div>

        {/* <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul> */}
      </div>
    </div>
  )
}

export default FeaturedProducts
