<template>
  <div
    class="main"
  >
    <img src="../image/banner2.png"/>
    <div class="details text-center">
      <h2>
        Book My Dream Luxury
      </h2>
      <h5 class="my-3">
        Lorem ipsum dolor sit amet consectetur. Elementum leo tortor aliquam turpis magna. Id sagittis adipiscing  
      </h5>
      <button
        type="button" 
        class="btn btn-light px-4"
      >
        EXPLORE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
}
</script>

<style scoped>
img {
  width: 99vw;
}
button {
  border-radius: 0px !important
}
.main {
  max-width: 100vw;
  position: relative;
}
.details {
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>