<template>
  <div class="home">
    <InicioPost msg="Ofertas Acádemicas"/>
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
