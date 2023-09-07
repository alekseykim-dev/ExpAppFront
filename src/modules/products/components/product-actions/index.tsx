import { useProductActions } from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Button from "@modules/common/components/button"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import Link from "next/link"
import React, { useMemo, useState } from "react"
import { Product } from "types/medusa"

type ProductActionsProps = {
  product: PricedProduct
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions()

  const price = useProductPrice({ id: product.id!, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

   const [iconActive, setIconActive] = useState(false);

  const onIconClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    setIconActive(prevState => !prevState);
    console.log('Icon clicked!');
  };

  return (
    <div className="flex flex-col gap-y-2 mx-[20px]">
      {product.collection && (
        <Link
          href={`/collections/${product.collection.id}`}
          className="text-small-regular text-gray-700"
        >
          {product.collection.title}
        </Link>
      )}
   <div className="flex flex-row text-sm-regular justify-between items-center text-[18px]">{product.title} <img src="/share_icon.svg" alt="" /></div>

      <p className="text-base-regular text-gray-500">{product.description}</p>

      {product.variants.length > 1 && (
        <div className="my-6 flex flex-col gap-y-4">
          {(product.options || []).map((option) => {
            return (
              <div key={option.id}>
                <OptionSelect
                  option={option}
                  current={options[option.id]}
                  updateOption={updateOptions}
                  title={option.title}
                />
              </div>
            )
          })}
        </div>
      )}

      <div className="mb-4">
        {selectedPrice ? (
          <div className="flex flex-col text-black-700">
            <span
              className={clsx("text-[20px]", {
                "text-rose-600": selectedPrice.price_type === "sale",
              })}
            >
              {selectedPrice.calculated_price}
            </span>
            {selectedPrice.price_type === "sale" && (
              <>
                <p>
                  <span className="text-gray-500">Original: </span>
                  <span className="line-through">
                    {selectedPrice.original_price}
                  </span>
                </p>
                <span className="text-rose-600">
                  -{selectedPrice.percentage_diff}%
                </span>
              </>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
{/* product details */}
<div className="flex" >
  <img  src={iconActive ? "/product_wish_a.svg" : "/product_wish_n.svg"} alt="" style={{marginLeft:"-15px"}} onClick={onIconClick}/>
<Button onClick={addToCart} style={{height:"44px", borderRadius:"4px", fontSize:"14px", fontWeight:"600"}}>
        {!inStock ? "Out of stock" : "주문하기"}
      </Button>
</div>
    </div>
  )
}

export default ProductActions
