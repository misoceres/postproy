<template>
  <div class="home">
    
    <InicioPost msg="Mensaje de Inicio de Posgrado"/>
  </div>
</template>

<script>
// @ is an alias to /src
import InicioPost from '@/components/InicioPost.vue'

export default {
  name: 'HomeView',
  components: {
    InicioPost
  }
}
</script>
