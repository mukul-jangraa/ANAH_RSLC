<template>
  <div class="main">
    
    <div class="container d-flex flex-column align-items-center">
      <h2>
        New Luxury Real Estate 
      </h2>
      <h4 class="text-center mt-3">
        Browse our most rented selection of the world's most luxurious cars, including including waterfront properties, penthouses, and private estates.
      </h4>
    </div>
    <div>
      <!-- Card -->
      <div class="d-flex justify-content-between cards">
        <div>
          <img  src="../image/luxEstate1.png"/>
          <div class="d-flex justify-content-between details">
            <h6>Vacant | Chiller Free | Burj Khalifa View</h6>
            <div
              class="d-flex flex-column"
            >
              <h6>AED 140,000</h6>
              <p>ANNUALLY</p>
            </div>
          </div>
        </div>
        <div>
          <img src="../image/luxEstate2.png"/>
          <div class="d-flex justify-content-between details">
            <h6>Open Concept I Sea and Marina Views</h6>
            <div
              class="d-flex flex-column"
            >
              <h6>AED 140,000</h6>
              <p>ANNUALLY</p>
            </div>
          </div>
        </div>
        <div>
          <img src="../image/luxEstate3.png"/>
          <div class="d-flex justify-content-between details">
            <h6>Amazing Full Sea View | 1BR Tiara Residence</h6>
            <div
              class="d-flex flex-column"
            >
              <h6>AED 140,000</h6>
              <p>ANNUALLY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: "FeaturedResidence"
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
.cards >div {
  transition: all 0.4s ease-in-out;
}
.cards >div:hover {
  transform: scale(1.05);
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