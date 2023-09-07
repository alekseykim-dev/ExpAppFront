import React, { useRef } from "react";
import { fetchProductsList } from "@lib/data";
import usePreviews from "@lib/hooks/use-previews";
import { StoreGetProductsParams } from "@medusajs/medusa";
import Button from "@modules/common/components/button";
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview";
import { useCart } from "medusa-react";
import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import ProductPreview from "../product-preview";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

type RelatedProductsProps = {
  product: PricedProduct;
};

const RelatedProducts = ({ product }: RelatedProductsProps) => {
  const { cart } = useCart();
  const scrollContainerRef = useRef(null);

  const queryParams: StoreGetProductsParams = useMemo(() => {
    const params: StoreGetProductsParams = {};

    if (cart?.id) {
      params.cart_id = cart.id;
    }

    if (product.collection_id) {
      params.collection_id = [product.collection_id];
    }

    if (product.tags) {
      params.tags = product.tags.map((t) => t.value);
    }

    params.is_giftcard = false;

    return params;
  }, [product, cart?.id]);

  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery(
    [`infinite-products-${product.id}`, queryParams, cart],
    ({ pageParam }) => fetchProductsList({ pageParam, queryParams }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  const previews = usePreviews({ pages: data?.pages, region: cart?.region });

  return (
    <div className="product-page-constraint mb-[100px]">
      <div className="flex flex-col">
        {/* <span className="text-base-regular text-gray-600 mb-6">
          Related products
        </span> */}
        <p className="text-xl-regular text-gray-900 text-[20px]">
          테이스터들이 함께 찾은 원두
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto no-scrollbar flex space-x-4 p-4"
      >
        {previews.map((p) => (
          <div
            key={p.id}
            className="flex-none w-[208px]" // Adjust the width as needed
          >
            <ProductPreview {...p} />
          </div>
        ))}
      </div>

      {/* {hasNextPage && (
        <div className="flex items-center justify-center mt-8">
          <Button
            isLoading={isLoading}
            onClick={() => fetchNextPage()}
            className="w-72"
          >
            Load more
          </Button>
        </div>
      )} */}
    </div>
  );
};

export default RelatedProducts;
