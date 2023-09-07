import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import DetailNav from "@modules/layout/templates/detail-nav/detailNav"
import Image from "next/image"
import test from '../../public/test4.png';
import share from '../../public/share.png';
import dibsonBig from '../../public/dibsonBig.svg';


const CoffeeDetail = () => {
  return (
    <>
    <DetailNav />
      <div>
        <div className="w-[100%] flex flex-col justify-center items-center">
          <Image src={test} alt="test" width={360} height={410} ></Image>
        </div>

        <div className="flex w-[100%] mt-[16px] justify-center">
          <div className="w-[220px] whitespace-normal mr-[80px]">
            <text className="text-base">[비브레이브] 케냐 AA 띠리쿠 (200g, 500g)</text> 
          </div>
          <div className=" justify-end">
            <Image src={share} alt="share" width={24} height={24} className="mt-[10px]"/>
          </div>
        </div>
        <div className="flex w-[100%] justify-center">
          <div className="mt-[8px] w-[360px]">
            <text className="text-left text-xs ml-[20px]">서브타이틀서브타이틀서브타이틀</text>
          </div>
        </div>
        <div>
          <div className="flex w-[100%] mt-[16px] justify-center">
            <div className="w-[360px]">
              <text className="text-left bold text-base ml-[20px]">13,000</text>
              <text className="text-left bold text-base mt-[4px] ml-[3px]">원~</text>
            </div>
            
          </div>
        </div>
        <div className="flex flex-row w-[100%] mt-[36px] justify-center">
          <Image src={dibsonBig} alt="dibsonBig" width={64} height={52}></Image>
          <div className="flex justify-center items-center w-[276px] h-[44px] bg-black mt-[10px] rounded">
            <text className="text-white">주문하기</text>
          </div>
        </div>
        
        <div className=" mt-[21px] flex justify-center items-center flex-col">
          <Image src={test} width={320} height={320} alt="test"></Image>
          <text className="mt-[16px] text-xl">[비브레이브]Story</text>
          <div className="w-[300px] h-[95px] mt-[24px]">
            <text className="text-sm whitespace-normal text-center gray-color">로스터리 카페의 개성은 블렌드 원두에서 드러납니다. 원산지와 맛, 향기가 각기다른 원두를 어떤 기준으로 조합했는지에 따라 그 카페의 방향성을 짐작해볼 수도 있죠. 비브레이브가 만든 블렌드는 매일 마시기 좋으면서도 맛이 깔끔하고, 깊은 여운을 남겨요.</text>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-[86px]">
          <Image src={test} width={320} height={320} alt="test"></Image>
          <text className="mt-[16px] text-xl">[비브레이브]Story</text>
          <div className="w-[300px] h-[95px] mt-[24px]">
            <text className="text-sm whitespace-normal text-center gray-color">로스터리 카페의 개성은 블렌드 원두에서 드러납니다. 원산지와 맛, 향기가 각기다른 원두를 어떤 기준으로 조합했는지에 따라 그 카페의 방향성을 짐작해볼 수도 있죠. 비브레이브가 만든 블렌드는 매일 마시기 좋으면서도 맛이 깔끔하고, 깊은 여운을 남겨요.</text>
          </div>
        </div>

        <div className=" flex justify-center items-center flex-col mt-[86px]">
          <Image src={test} width={320} height={320} alt="test"></Image>
          <text className="mt-[16px] text-xl">[비브레이브]Story</text>
          <div className="w-[300px] h-[95px] mt-[24px]">
            <text className="text-sm whitespace-normal text-center gray-color">로스터리 카페의 개성은 블렌드 원두에서 드러납니다. 원산지와 맛, 향기가 각기다른 원두를 어떤 기준으로 조합했는지에 따라 그 카페의 방향성을 짐작해볼 수도 있죠. 비브레이브가 만든 블렌드는 매일 마시기 좋으면서도 맛이 깔끔하고, 깊은 여운을 남겨요.</text>
          </div>
        </div>

        <div className="mt-[86px] w-[100%] flex  flex-col  justify-center ml-[20px]">
          <div className="mb-[24px] w-[360px]">
            <text>상품정보</text>
          </div>
          <div className="mb-[16px] w-[360px] flex flex-col justify-start items-start">
            <div >
              <text>판매단위</text> <text>1봉</text>
            </div>
            
            <div>
              <text>원산지</text> <text>상품 설명 / 상제정보 참조</text>
            </div>
            <div >
              <text>유통기한( 또는 소비 기한 ) 정보</text> <text>로스팅일로부터 15일 이내의 원두를 수령하실 수 있습니다.</text>
            </div>
            <div>
              <text>판매단위</text> <text>1봉</text>
            </div>
            <div>
              <text>안내사항</text> <text>[비브레이브] 블렌드 원두 (프루티봉봉) 500g (NEW!) - 2023년 7월 15일 23시 주문 건까지, 제조일자 2023년 6월 30일 상품 출고 원두는 어느정도 가스가 배출되고 난 후 향미가 더욱 선명해집니다. 원두 패키지를 열고 닫았다를 반복하게 되면 공기 중의 산소가 맛과 향을 해치는 요소가 되기도 하오니, 서늘하고 건조한 곳에 홀빈 상태로 밀봉하여 보관해주시고 개봉 후에는 가급적 빠른 시일내에 섭취하시기를 권장 드립니다.</text>
            </div>

          </div>
         
        </div>
      </div>
        
    </>
  )
}



export default CoffeeDetail
