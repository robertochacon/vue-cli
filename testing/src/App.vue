<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <h2>Consumiendo api rando user</h2> -->
    <!-- <Imagenes/> -->
    <hr><br>
    <router-link to="/" class="btn" exact>Home</router-link>
    <router-link to="/imagenes" class="btn">Images</router-link>
    <router-link to="/yo" class="btn">About me</router-link>
    <br><br><hr>
    
  <transition>
    <router-view></router-view>
  </transition>

  </div>
</template>

<script>
// import Imagenes from './components/Imagenes.vue'

export default {
  name: 'app',
  // components: {
  //   Imagenes
  // }
}
</script>

<style>
body{
  background: #f3f3f3;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.btn{
  padding: 8px;
  margin: 5px;
  border-radius: 4px;
  box-shadow:0px 2px 3px black;
  text-decoration: none;
  transition: all .4s;
  color: black;
}
.btn:hover{
  background: teal;
}


.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/*active links*/
.router-link-active{
  background: green;
}

</style>
