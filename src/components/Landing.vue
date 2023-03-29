<template>
  <div class="main d-flex flex-column justify-content-center">
    <!-- Heading -->
    <h1 class="text-center ">
      THE WORLD OF LUXURY
    </h1>
    <!-- Container with Landing cards -->
    <div class="d-flex justify-content-center">
      <div 
      class="landing_card m-2 d-flex align-items-center justify-content-center"
    >
      <h3>
        CARS
      </h3>
    </div>
    <div 
      class="landing_card  m-2 d-flex align-items-center justify-content-center"
    >
      <h3>
        REAL ESTATE
      </h3>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing"
}
</script>

<style scoped>
.main{
  height: 90%;
}
h1 {
  color: white;
  opacity: 0.5;
}
.landing_card {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.438);
  min-height: 250px;
  min-width: 25%;
  color: white;
  transition: all 0.5s ease-in-out;
}
.landing_card:hover {
  /* border: 1px white solid; */
  background-color: rgba(0, 0, 0, 0.719);
  transition: 0.5s;
}
</style>