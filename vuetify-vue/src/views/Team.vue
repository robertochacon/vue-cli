<template>
  <div class="team">
    <h1 class="subhiding grey--text">Team</h1>
      <v-container class="my-2">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="team in teams" :key="team.name">
            <v-card class="text-xs-center ma-3">
              <v-responsive class="pt-4">
                Imagen
              </v-responsive>
              <v-card-text>
                <div class="subhiding">{{ team.name }}</div>
                <div class="caption grey--text">{{ team.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="grey">
                  <v-icon small left>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      teams:[
        {name:'Daniel',role:'Disenador web'},
        {name:'Daniel',role:'Disenador web'},
        {name:'Daniel',role:'Disenador web'},
        {name:'Daniel',role:'Disenador web'},
        {name:'Daniel',role:'Disenador web'}
      ]
    }
  }
}
</script>
