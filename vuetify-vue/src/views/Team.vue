<template>
  <div class="team">
    <h1 class="subhiding grey--text">Team</h1>
      <v-container class="my-2">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="team in teams" :key="team.name">
            <v-card class="text-xs-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100">
                    <img :src="team.avatar" :alt="team.name">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subhiding">{{ team.name }}</div>
                <div class="caption grey--text">{{ team.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="grey">
                  <v-icon small left class="blue--text">message</v-icon>
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
        {name:'Roberto',role:'Disenador web',avatar:'/img/avatar-1.jpg'},
        {name:'Daniel',role:'Disenador web',avatar:'/img/avatar-2.png'},
        {name:'Jose',role:'Disenador web',avatar:'/img/avatar-3.jpg'},
        {name:'Kevin',role:'Disenador web',avatar:'/img/avatar-4.jpg'},
        {name:'Marcos',role:'Disenador web',avatar:'/img/avatar-5.jpg'},
        {name:'Ricardo',role:'Disenador web',avatar:'/img/avatar-6.jpg'}
      ]
    }
  }
}
</script>
