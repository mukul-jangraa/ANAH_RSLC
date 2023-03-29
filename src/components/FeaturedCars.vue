<template>
  <div class="main">
    
    <div class="container d-flex flex-column align-items-center">
      <h2>
        Featured Luxury Cars
      </h2>
      <h4 class="text-center mt-3">
        Browse our featured selection of the world's most luxurious cars, including exotic sports cars, supercars, and high-performance vehicles.
      </h4>
    </div>
    <div>
      <!-- Card -->
      <div class="d-flex cards">
        <div class="slide_card">
          <div class="detail_card">
            
          </div>
          <div class="img">
            <img class="align-self-center"  src="../image/car1.png"/>
          </div>
          
          <div class="d-flex justify-content-between details">
            <h6>Mercedes-Maybach GLS 600</h6>
            <div
              class="d-flex flex-column"
            >
              <h6>AED 300</h6>
              <p>PER DAY</p>
            </div>
          </div>
        </div>
        <div class="slide_card">
          <div class="detail_card">
            
          </div>
          <div class="img">
            <img  src="../image/car2.png"/>
          </div>
          <div class="d-flex justify-content-between details">
            <h6>Mercedes-Maybach GLS 600</h6>
            <div
              class="d-flex flex-column"
            >
              <h6>AED 300</h6>
              <p>PER DAY</p>
            </div>
          </div>
        </div>
        <div class="slide_card">
          <div class="detail_card">
            
          </div>
          <div class="img">
            <img  src="../image/car3.png"/>
          </div>
          <div class="d-flex justify-content-between details">
            <h6>Mercedes-Maybach GLS 600</h6>
            <div
              class="d-flex flex-column"
            >
              <h6>AED 300</h6>
              <p>PER DAY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedCars"
}
</script>

<style scoped>
.main {
  margin: 100px 0 0 0;
}
img {
  overflow: hidden;
  transition: all 0.4s ease-in-out;
}
.img {
  
  overflow: hidden;
}
.slide_card {
  margin: 10px 20px;
  position: relative;
  overflow: hidden;
  
}
.slide_card:hover .detail_card {
  display: block;
}
.slide_card:hover img {
  /* zoom: 2; */
   transform: scale(1.3);

  filter: brightness(50%);
  /* filter: grayscale(70%); */
}
.detail_card {
  color: white;
  height: 100%;
  width: 100%;
  z-index: 2;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease-in-out;
}
.details {
  padding: 20px 5px 0 5px;
  width: 100%;
  background-color: #F6F6F8 ;
}
.cards {
  padding: 50px 100px;
}
.cards >div {
  transition: all 0.4s ease-in-out;
}
.cards >div:hover {
  /* transform: scale(1.05); */
  /* transition: 0.5s; */
   /* transform-origin: 0 0; */
}
.container {
  width: 60%;
}
h4 {
  color: gray;
}

</style>