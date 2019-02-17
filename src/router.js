import Vue from 'vue';
import Router from "vue-router";
import People from "./components/people/People";
import About from "./components/about/About";
import Planets from "./components/planets/Planets";
import Starships from "./components/starships/Starships";

Vue.use(Router);

const router = new Router({
    routes: [
        { path: '/', redirect: '/about' },
        { path: '/people', name: 'people', component: People },
        { path: '/about', name: 'about', component: About },
        { path: '/planets', name: 'planets', component: Planets},
        { path: '/starships', name: 'starships', component: Starships}
    ]
})

/* eslint-disable */
router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
  })
  
  router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
  })

  export default router