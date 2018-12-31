<template>
    <div class="projects">
      <h1 class="subhiding grey--text">my projects</h1>
      <v-container class="my-2">
        
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-content :class="project.status">
            <div slot="header">{{ project.title }}</div>
            <v-card>
              <v-card-text class="py-3">
                <div class="font-weight-bold grey--text">{{ project.status }}</div>
                <div class="grey--text">here and now</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-divider></v-divider>

      </v-container>
    </div>
</template>

<script>
export default {
    data(){
      return {
        projects:[
          {title:'Sistema escolar',person:'Roberto',day:'1st jan 2019',status:'complete'},
          {title:'Pagina estudiantil',person:'Angel',day:'1st jan 2019',status:'ongoing'},
          {title:'Comer cena navidena',person:'Roberto',day:'1st jan 2019',status:'overdue'},
          {title:'Aprender vue',person:'manuel',day:'1st jan 2019',status:'ongoing'},
          {title:'Esperar ano nuevo',person:'Roberto',day:'1st jan 2019',status:'complete'},
        ]
      }
    },
    computed:{
      myProjects(){
        return this.projects.filter(wathever => {
          return wathever.person === 'Roberto'
        })
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
</style>
