import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { useState } from 'react';
import Icon from '../../../../../public/icon_tounge_a.svg';  



const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  view, 
}: ProductPreviewType & { view?: string }) => {


  const [iconActive, setIconActive] = useState(false);

  const onIconClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    setIconActive(prevState => !prevState);
    console.log('Icon clicked!');
  };
  const renderProductDetails = () => (
    <div className="text-base-regular mt-2">
      <span>{title}</span>
      <div className="flex items-center gap-x-2 mt-1">
        {price ? (
          <>
            {price.price_type === "sale" && (
              <span className="line-through text-gray-500">
                {price.original_price}
              </span>
            )}
            <span
              className={clsx("font-semibold", {
                "text-rose-500": price.price_type === "sale",
              })}
            >
              {price.calculated_price}
            </span>
          </>
        ) : (
          <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
        )}
      </div>
    </div>
  );



  const renderThumbnailWithIcon = () => (
    <div className="relative ">
      <Thumbnail thumbnail={thumbnail} size="full" />
      <div className="absolute bottom-[-20px] right-2 cursor-pointer" onClick={onIconClick}>
        <img  src={iconActive ? "/icon_tounge_a.svg" : "/icon_tounge_n.svg"} alt="Clickable Icon" />
      </div>
    </div>
  );

  if (view === 'list') {
    return (
      <Link href={`/products/${handle}`}>
        <div className="flex items-center">
          <div className="w-2/4">
            {renderThumbnailWithIcon()}
          </div>
          <div className="w-3/4 pl-4">
            {renderProductDetails()}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/products/${handle}`}>
      <div>
        {renderThumbnailWithIcon()}
        {renderProductDetails()}
      </div>
    </Link>
  );
}
export default ProductPreview
