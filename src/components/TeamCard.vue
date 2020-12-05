<template>
  <div>
    <div class="container">
      <section id="team" class="gupo">
        <div class="card-deck">
          <div class="card text-center text-white bg-dark" style="width: 18rem">
            <img :src="image1" class="card-img-top" alt="error" />

            <div class="card-body">
              <h2 class="card-title">{{ nombre1 }}</h2>

              <h5 class="card-title">{{ rol1 }}</h5>
              <p class="card-text">{{ desc1 }}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card text-center text-white bg-dark" style="width: 18rem">
            <img :src="image2" class="card-img-top" alt="integrante2" />
            <div class="card-body">
              <h2 class="card-title">{{ nombre2 }}</h2>
              <h5 class="card-title">{{ rol2 }}</h5>
              <p class="card-text">{{ desc2 }}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card text-center text-white bg-dark" style="width: 18rem">
            <img :src="image3" class="card-img-top" alt="integrante3" />
            <div class="card-body">
              <h2 class="card-title">{{ nombre3 }}</h2>
              <h5 class="card-title">{{ rol3 }}</h5>
              <p class="card-text">{{ desc3 }}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import products from "./datos.json";

export default {
  name: "hello",
  data() {
    return {
      nombre1: products[0].nombre,
      desc1: products[0].descripcion,
      rol1: products[0].rol,
      image1: products[0].image,

      nombre2: products[1].nombre,
      desc2: products[1].descripcion,
      rol2: products[1].rol,
      image2: products[1].image,

      nombre3: products[2].nombre,
      desc3: products[2].descripcion,
      rol3: products[2].rol,
      image3: products[2].image,
    };
  },
};
</script>

<style scoped></style>
