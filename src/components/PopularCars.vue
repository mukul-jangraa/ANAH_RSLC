<template>
  <div class="main">
    
    <div class="container d-flex flex-column align-items-center">
      <h2>
        Popular Luxury Cars
      </h2>
      <h4 class="text-center mt-3">
        Browse our most rented selection of the world's most luxurious cars, including exotic sports cars, supercars, and high-performance vehicles.
      </h4>
    </div>
    <div>
      <!-- Card -->
      <div class="d-flex justify-content-between cards">
        <div>
          <img  src="../image/car1.png"/>
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
        <div>
          <img src="../image/car2.png"/>
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
        <div>
          <img src="../image/car3.png"/>
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
  width: 90%;
}
.details {
  padding: 20px 5px 0 5px;
  width: 90%;
  background-color: #F6F6F8 ;
}
.cards {
  margin: 50px 100px;
}
.container {
  width: 60%;
}
h4 {
  color: gray;
}

</style>