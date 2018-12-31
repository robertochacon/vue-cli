<template>

<div>
<center>
<template v-if="info">

  <div class="row">
    <div class="card" v-for="datos in info">
        <img :src="datos.picture.large" alt="">
    </div>
  </div>

</template>
<span v-else><h2>Cargando..</h2></span>
</center>
</div>
</template>

<script>

import Axios from 'axios';

export default {
  name: 'Imagenes',
  mounted(){
       let url = 'https://randomuser.me/api/?results=20';
      Axios.get(url).then((res) => {
        this.info = res.data.results;
        console.log(this.info);
      })
  },
  data(){
    return {
      info: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row{
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
  }
  .card{
    width: 20%;
    text-align: center;
    background: slateblue;
    margin: 4px;
    padding: 5px;
    box-sizing: border-box;
    box-shadow: 0px 2px 3px black;
    transition: all .5s;
  }
  img{
    border-radius: 100%;
  }
  .card:hover{
    transform: scale(1.2);
    background: black;
    cursor: pointer;
  }
</style>
