import Head from "@modules/common/components/head"
import Beans from "@modules/home/components/beans"
import Contents from "@modules/home/components/contents1"
import Contents2 from "@modules/home/components/contents2"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import OnlineRoastery from "@modules/home/components/online"
import Roastery from "@modules/home/components/roastery-int"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the Tasteit. Worldwide Shipping. Secure Payment."
      />
      <Hero />
      <FeaturedProducts />
      <Roastery/>
      <Beans/>
      <OnlineRoastery/>
      <Contents/>
      <Contents2/>

    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
