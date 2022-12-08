<template>
    <div class="container">
        <nav>
          <img class="dpic" src="../assets/DPIC-sin-fondo.png" alt="#">
          <router-link to="/">Inicio</router-link> |
          <router-link to="/about">¿Quienes somos?</router-link> |
          <router-link to="/login">Login</router-link>
       </nav>
      <router-view/>
    </div>
</template>
<script>
export default {
  name: 'MenuPrincipal',

}
</script>

<style scoped>
    .dpic{
    width: 20rem;
    height: 10rem;
    }

    nav {
    background-color: rgba(0, 3, 75, .1);
    }

    nav a {
    font-weight: bold;
    color: #e11a20;
    }

    nav a.router-link-exact-active {
    color: #00034b;
    }
</style>