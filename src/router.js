import Vue from 'vue';
import Router from "vue-router";
import People from "./components/people/People";
import About from "./components/about/About";
import Planets from "./components/planets/Planets";
import Starships from "./components/starships/Starships";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/about'
        },
        {
            path: '/people',
            name: 'people',
            components: {
                default: People
            }    
        },
        {
            path: '/about',
            name: 'about',
            components: {
                default: About
            } 
        },
        {
            path: '/planets',
            name: 'planets',
                default: Planets
        },
        {
            path: '/starships',
            name: 'starships',
                default: Starships
        }
    ]
});