<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" top color="green">
            <span class="text--upercase">added correctly</span>
            <v-btn flat @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-toolbar flat app>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span>rca</span>
                <span class="font-weight-light">studios</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <v-btn flat color="grey" slot="activator">
                    <span>Menu</span>
                    <v-icon right>expand_more</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-btn flat color="grey">
                <span>Salir</span>
                <v-icon right class="red--text">exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer flat app v-model="drawer" class="black">
            <div>
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100" class="ml-3">
                        <img src="/img/yo.jpg" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1">Roberto Chacon A.</p>
                </v-flex>
            </v-layout>
            <v-layout column align-center>
                <v-flex class="mt-4 mb-3">
                    <Popup @addProject="snackbar = true"/>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon :class="link.color+'--text'">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            </div>
        </v-navigation-drawer>

    </nav>
</template>

<script>
import Popup from './Popup'

export default {
    components:{
        Popup
    },
    data(){
        return{
            drawer:false,
            links:[
                {icon:'dashboard',color:'red',text:'Dashboard',route:'/'},
                {icon:'folder',color:'yellow',text:'My projects',route:'/projects'},
                {icon:'person',color:'purple',text:'Team',route:'/team'},
                {icon:'face',color:'green',text:'Perfil',route:'/perfil'}
            ],
            snackbar:false
        }
    }
}
</script>

