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
          <v-tooltip top>
          <v-btn flat small left @click="sortBy('title')" slot="activator">
            <v-icon left>folder</v-icon>
            <span class="caption text-lowercase">By projects</span>
          </v-btn>
          <span>Order by projects</span>
          </v-tooltip>

          <v-tooltip top>
          <v-btn flat small letf @click="sortBy('person')" slot="activator">
            <v-icon left>person</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          <span>Order by person</span>
          </v-tooltip>

        </v-layout>

        <v-card flat v-for="project in projects" :key="project.id">
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
import db from '@/fb'

  export default {
    data(){
      return{
        projects:[]
      }
    },
    methods:{
      sortBy(order){
        this.projects.sort((a,b) => a[order] < b[order]? -1 : 1)
      }
    },
    created(){
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })

      })
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
