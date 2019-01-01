<template>
    <v-dialog max-width="600px" v-model="dialog">
        <v-btn flat slot="activator" class="blue">
            <v-icon left>add</v-icon>
            <span>Add project</span>
        </v-btn>
        <v-card>
            <v-card-title>
                <h1>Add project now</h1>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Titulo" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Content" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
                    <v-menu>
                        <v-text-field :value="formatedDate" slot="activator" label="Date" prepend-icon="date_range" :rules="inputRules"></v-text-field>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-0 mt-3 green white--text" @click="submit()" :loading="loading">Save project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

import format from 'date-fns/format'
import db from '@/fb'

export default {
    data(){
        return {
            title:'',
            content:'',
            due:null,
            inputRules:[
                v => v.length >= 5 || 'Minimum length is 5 charters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                
                //loading del boton
                this.loading = true;

                //objeto de datos insertados para guardar
                const project = {
                    title: this.title,
                    content: this.content,
                    due: this.due,
                    person: 'Roberto Chacon A',
                    status: 'ongoing'
                }

                //guardando y verificando los datos
                db.collection('projects').add(project).then(() => {
                    console.log('Agregado correctamente')
                    this.loading = false;
                    setTimeout(() => {this.dialog = false;},1000);
                    this.$emit('addProject');
                })
            }
        }
    },
    computed:{
        formatedDate(){
            return this.due ? format(this.due, 'Do MMM YYY') : ''
        }
    }
}
</script>
