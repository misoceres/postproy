<template>
  <div class="hello">
    <div class="container" >
      <h2>{{ msg }}</h2>
      <div class="container-fluid">
        
          <div class="row">
            <div class="col my-1">
              <b-card title="Diplomado en Impuestos">
                <img class="img-fluid" src="../assets/diplomadoImpuestos.jpg" alt="" >
                <b-card-text>
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
                <template #footer>
                  <b-button variant="primary">Detalles</b-button>
                </template>
              </b-card>
              </div>
            <div class="col my-1">
              <b-card title="Title">
                <img class="img-fluid" src="../assets/diplomadoImpuestos.jpg" alt="" >
                <b-card-text>
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
                <template #footer>
                  <b-button variant="primary">Detalles</b-button>
                </template>
              </b-card>
            </div>
            <div class="col my-1">
              <b-card title="Title">
                <img class="img-fluid" src="../assets/diplomadoImpuestos.jpg" alt="" >
                <b-card-text>
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
                <template #footer>
                  <b-button variant="primary">Detalles</b-button>
                </template>
              </b-card>
            </div>
          </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'InicioPost',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  

</style>
