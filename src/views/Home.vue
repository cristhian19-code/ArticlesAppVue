<template>
  <div>
    <div class="portada flex justify-content-center"></div>
    <div class="flex flex-column align-items-center my-5">
      <h1 class="">FEATURES</h1>
      <div class="flex flex-wrap justify-content-center align-items-center">
        <div class="col-12 md:col-5 p-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
            reiciendis ducimus? Eum inventore accusantium molestias, nisi nemo omnis,
            nostrum sit blanditiis eveniet dicta esse fugiat possimus mollitia iste alias
            iusto.
          </p>
          <ul class="list-none">
            <li>Security</li>
            <li>Update</li>
            <li>Maintenance</li>
            <li>Attention 25 hours</li>
          </ul>
        </div>
        <div class="col-12 md:col-4 text-center">
          <img src="@/assets/completed.png" alt="" height="300" width="300" />
        </div>
      </div>
      <div class="flex flex-column align-items-center">
        <h1>Plans</h1>
        <PricesVue />
      </div>
    </div>
  </div>
</template>

<script>
import PricesVue from "../components/Prices.vue";

export default {
  components: {
    PricesVue,
  },
};
</script>

<style scoped>
.portada {
  position: relative;
  background-image: url(https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
}

@media (max-width: 900px) {
  .portada {
    height: 50vh;
  }
}
</style>
