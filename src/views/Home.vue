<template>
  <div class="background">
    <Navbar/>
    <Landing/>
    <FeaturedResidence/>
    <Banner />
    <FeaturedCars/>
    <LuxuryRealEstate />
    <LuxuryCars />
    <CarBrandsBanner/>
    <LuxuryLocation />
    <how-it-works/>
    <BookMyBanner/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Landing from "@/components/Landing.vue"
import FeaturedResidence from "@/components/FeaturedResidence.vue"
import FeaturedCars from "@/components/FeaturedCars.vue"
import LuxuryRealEstate from "@/components/LuxuryRealEstate.vue"
import LuxuryCars from "@/components/LuxuryCars.vue"
import Banner from "@/components/Banner.vue"
import CarBrandsBanner from "@/components/CarBrandsBanner.vue"
import LuxuryLocation from '../components/LuxuryLocation.vue'
import HowItWorks from '../components/HowItWorks.vue'
import BookMyBanner from '../components/BookMyBanner.vue'
import Footer from "@/components/Footer.vue"
export default {
  name: "Home",
  components: {
    Navbar,
    Landing,
    FeaturedResidence,
    FeaturedCars,
    LuxuryRealEstate,
    LuxuryCars,
    CarBrandsBanner,
    Banner,
    LuxuryLocation,
    BookMyBanner,
    HowItWorks,
    Footer
  }
}
</script>

<style>
.background {
  height: 100vh;
  width: 100%;
  background-size:contain;
  background-image: url("@/image/Landing.png");
  background-repeat: no-repeat;
}
</style>
