

// components
import Hero from "@/components/Hero";
import NewLaunches from "@/components/NewLaunches";
import PopularSection from "@/components/PopularSection";
import Section1 from "@/components/Section1";
import ShopByCollection from "@/components/ShopByCollection";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <section className="h-full relative">
      <Toaster/>
      <Hero />
      <Section1 />
      <ShopByCollection />
      <NewLaunches />
      <PopularSection />
    </section>
  )
}

export default Home
