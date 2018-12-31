import Home from './components/Home.vue';
import Yo from './components/Yo.vue';
import Imagenes from './components/Imagenes.vue';

export const routes = [
    {path:'/', component:Home},
    {path:'/imagenes', component:Imagenes},
    {path:'/yo', component:Yo},
];