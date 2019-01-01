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
                <v-form class="px-3">
                    <v-text-field label="Titulo" v-model="title" prepend-icon="folder"></v-text-field>
                    <v-textarea label="Content" v-model="content" prepend-icon="edit"></v-textarea>
                    <v-btn class="mx-0 mt-3 green white--text" @click="submit()">Save project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return {
            title:'',
            content:'',
        }
    },
    methods:{
        submit(){
            console.log('Title:'+this.title+' content:'+this.content)
        }
    }
}
</script>
