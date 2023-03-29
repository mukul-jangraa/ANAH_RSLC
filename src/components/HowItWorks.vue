<template>
  <div class="main">
    <div class="container d-flex flex-column align-items-center pt-5">
      <h2>
        How It Works 
      </h2>
      <h4 class="text-center mt-3">
        Experience Luxury in Just a Few Simple Steps
      </h4>
      <div class="mt-4">
        <h4>REAL ESTATE | CARS</h4>
      </div>
    </div>
    <!-- Cards -->
    <div class="d-flex justify-content-around mx-5 my-5">
      <div class="blur">
        <div class="P_card">
          <!-- Blur -->
        </div>
        <div class="cards">
            <h4
              class="m-4"
            >Step 1
            </h4>
            <div class="mt-5 px-2 pt-4">
              <h6>
                Lorem ipsum 
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vulputate quam facilisi amet urna metus volutpat. Turpis scelerisque semper risus congue ut enim congue cras viverra. 
              </p>
            </div>
          </div>
      </div>
      <div class="blur">
        <div class="P_card">
          <!-- Blur -->
        </div>
        <div class="cards">
            <h4
              class="m-4"
            >Step 1
            </h4>
            <div class="mt-5 px-2 pt-4">
              <h6>
                Lorem ipsum 
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vulputate quam facilisi amet urna metus volutpat. Turpis scelerisque semper risus congue ut enim congue cras viverra. 
              </p>
            </div>
          </div>
      </div>
      <div class="blur">
        <div class="P_card">
          <!-- Blur -->
        </div>
        <div class="cards">
            <h4
              class="m-4"
            >Step 1
            </h4>
            <div class="mt-5 px-2 pt-4">
              <h6>
                Lorem ipsum 
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vulputate quam facilisi amet urna metus volutpat. Turpis scelerisque semper risus congue ut enim congue cras viverra. 
              </p>
            </div>
          </div>
      </div>
      <div class="blur">
        <div class="P_card">
          <!-- Blur -->
        </div>
        <div class="cards">
            <h4
              class="m-4"
            >Step 1
            </h4>
            <div class="mt-5 px-2 pt-4">
              <h6>
                Lorem ipsum 
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vulputate quam facilisi amet urna metus volutpat. Turpis scelerisque semper risus congue ut enim congue cras viverra. 
              </p>
            </div>
          </div>
      </div>
    </div>  
    
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.blur {
  position: relative;
  height: 300px;
  width: 250;
  transition: all 0.2s ease-in-out;
}
.P_card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 250px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.12);

/* white */
border: 2px solid #FFFFFF;
}
.cards {
  z-index: 2;
  position: absolute;
    background-color: inherit;
  background-image: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px white solid;
  height: 300px;
  width: 250px;
  
}
.blur:hover {
  /* backdrop-filter: blur(10px); */
  transform: scale(1.05);
}
.main {
  color: white;
  height: 100%;
  width: 99vw;
  background-size:contain;
  background-image: url("@/image/banner4.png");
  background-repeat: no-repeat;
}
</style>