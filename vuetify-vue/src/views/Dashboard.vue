<template>
  <div class="home">
    <h1 class="subhiding grey--text">Dashboard</h1>

    <v-container class="my-2">

          <!-- <v-btn fab class="yellow black--text">
          <v-icon>settings</v-icon>
          </v-btn> -->

        <!-- <v-layout row wrap justify-space-around>
            <v-flex xs12 md5>
              <v-btn outline block class="red">Boton</v-btn>
            </v-flex>
            <v-flex xs12 md5>
              <v-btn outline block class="red">Boton 2</v-btn>
            </v-flex>
        </v-layout> -->

        <v-layout class="mb-3">
          <v-btn flat small left @click="sortBy('title')">
            <v-icon>folder</v-icon>
            <span class="caption text-lowercase">By projects</span>
          </v-btn>
          <v-btn flat small letf @click="sortBy('person')">
            <v-icon>person</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
        </v-layout>

        <v-card flat v-for="project in projects" :key="project.title">
          <v-layout row wrap :class="'pa-3 '+project.status">
            <v-flex xs12 md6>
              <div class="caption grey--text">Title</div>
              <div>{{ project.title }}</div>
            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Persona</div>
              <div>{{ project.person }}</div>
            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Day</div>
              <div>{{ project.day }}</div>
            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="right">
                <v-chip small :class="'white--text chip '+project.status">{{ project.status }}</v-chip>
              </div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-card>

    </v-container>
    
  </div>
</template>

<script>
  export default {
    data(){
      return{
        projects:[
          {title:'Sistema escolar',person:'Roberto',day:'1st jan 2019',status:'complete'},
          {title:'Pagina estudiantil',person:'Angel',day:'1st jan 2019',status:'ongoing'},
          {title:'Comer cena navidena',person:'Roberto',day:'1st jan 2019',status:'overdue'},
          {title:'Aprender vue',person:'manuel',day:'1st jan 2019',status:'ongoing'},
          {title:'Esperar ano nuevo',person:'Roberto',day:'1st jan 2019',status:'complete'},
        ]
      }
    },
    methods:{
      sortBy(order){
        this.projects.sort((a,b) => a[order] < b[order]? -1 : 1)
      }
    }
  }
</script>

<style>
.complete{
  border-left: 4px solid green;
}
.ongoing{
  border-left: 4px solid blue;
}
.overdue{
  border-left: 4px solid red;
}

/*chips*/
.chip.complete{
  background: green;
}
.chip.ongoing{
  background: blue;
}
.chip.overdue{
  background: red;
}
</style>
