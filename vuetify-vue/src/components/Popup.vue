<template>
    <v-dialog max-width="600px">
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
                    <v-btn class="mx-0 mt-3 green white--text" @click="submit()">Save project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

import format from 'date-fns/format'

export default {
    data(){
        return {
            title:'',
            content:'',
            due:null,
            inputRules:[
                v => v.length >= 5 || 'Minimum length is 5 charters'
            ]
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
            console.log('Title:'+this.title+' Content:'+this.content+' Date:'+this.due)
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
