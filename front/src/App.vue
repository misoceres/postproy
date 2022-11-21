<template>
  <div id="app">
    <div class="container">
        <nav>
          <img class="dpic" src="./assets/DPIC-sin-fondo.png" alt="#">
          <router-link to="/">Inicio</router-link> |
          <router-link to="/about">¿Quienes somos?</router-link>
       </nav>
      <router-view/>
    </div>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}

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
