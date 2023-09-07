import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Link from "next/link"
import { useCollectionProductsQuery } from "@lib/hooks/use-layout-data"

const Beans = () => {
  const collectionId = "pcol_01H7A1CV1DFF3J1EVT4V75VQRV"; // Replace this with the actual collection ID
  const { data: productsFromCollection } = useCollectionProductsQuery(collectionId);
  
  return (
    <div className="pt-12 pb-6">
      <div className="flex justify-start mb-6 font-semibold leading-normal px-6  text-black text-[18px]">
        제주도 푸른밤을 머금은 커피
      </div>
     <div className="mb-3">
     <div className="grid grid-cols-3 gap-x-4 gap-y-8 mx-4 ">
     {productsFromCollection
  ? productsFromCollection.map((product) => (
      <div key={product.id}>
        <ProductPreview {...product} />
      </div>
    ))
  : Array.from({ length: 6 }, (_, i) => (
      <div key={i}>
        <SkeletonProductPreview />
      </div>
    ))}

      </div>
     </div>
     
      <div className="flex items-center justify-center py-4">
        <button className="w-[320px] h-[44px] rounded-md border border-gray-300 bg-white flex justify-center my-3 ">
          <Link href={"/products"}>
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

export default Beans
 