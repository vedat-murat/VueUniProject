import Vue from 'vue';
import Router from "vue-router";
import Navigation from './components/navigation/Navigation';
import People from "./components/people/People";
import About from "./components/about/About";
import Planets from "./components/planets/Planets";
import Starships from "./components/starships/Starships";
import Footer from './components/footer/Footer';

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
                navigation: Navigation,
                default: People,
                footer: Footer,
            }    
        },
        {
            path: '/about',
            name: 'about',
            components: {
                navigation: Navigation,
                default: About,
                footer: Footer,
            } 
        },
        {
            path: '/planets',
            name: 'planets',
            navigation: Navigation,
                default: Planets,
                footer: Footer,
        },
        {
            path: '/starships',
            name: 'starships',
            navigation: Navigation,
                default: Starships,
                footer: Footer,
        }
    ]
});