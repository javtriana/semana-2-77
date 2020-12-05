<template>


<div>
    <div class="container">
      <section id="team" class="gupo">
        <div class="card-deck">
          <div
            class="card text-center text-white bg-dark"
            style="width: 18rem;"
          >
            <img 
              :src="image1"
              class="card-img-top"
              alt="error"
            />

            <div class="card-body">
              <h2 class="card-title">{{nombre1}}</h2>


              <h5 class="card-title">{{rol1}}</h5>
              <p class="card-text">{{desc1}}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div
            class="card text-center text-white bg-dark"
            style="width: 18rem;"
          >
            <img
              src="imagenes/int_02.jpg"
              class="card-img-top"
              alt="integrante2"
            />
            <div class="card-body">
              <h2 class="card-title">Gabriel Ardila</h2>
              <h5 class="card-title">Desarrollador Backend</h5>
              <p class="card-text">
                Ingeniero electrónico, egresado de la Universidad Javeriana,
                musica preferida: Pop, Hobby: fotografía
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div
            class="card text-center text-white bg-dark"
            style="width: 18rem;"
          >
            <img
              src="imagenes/int_03.jpg"
              class="card-img-top"
              alt="integrante3"
            />
            <div class="card-body">
              <h2 class="card-title">Javier Triana</h2>
              <h5 class="card-title">Desarrollador Backend</h5>
              <p class="card-text">
                Ingeniero civil, egresado de la Universidad Distristal F.J.C, 31
                años, musica preferida: Rock, Hobby: diseño y dibujo
              </p>
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
      image1 : products[0].image
    }
  }
}

</script>

<style scoped></style>
