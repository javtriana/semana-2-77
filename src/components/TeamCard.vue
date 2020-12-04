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
              src="imagenes/int_01.jpg"
              class="card-img-top"
              alt="integrante1"
            />
            <div class="card-body">
              <h2 class="card-title">Andres Portillo</h2>
              <h5 class="card-title">Desarrollador Backend</h5>
              <p class="card-text">
                Docente, egresado de la Universidad de nariño, 30 años, musica
                preferida: Rock, Hobby: Entrenamiento Físico
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
export default {
  name: "TeamCard",
  props: ["member"],
};
</script>

<style scoped></style>
