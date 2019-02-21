<template>
    <div>
        <h3 class="starWarsStyle text-center sub-title">Star wars</h3>
        <h1 class="starWarsStyle text-warning text-center title">Planets</h1>
        <div class="clearfix mt-3">
            <form @submit.prevent="search">
                <div class="float-left min-width-300">
                    <input v-model="searchValue" class="form-control" placeholder="Search by Name...">
                </div>
                <div class="float-left ml-2">
                    <button class="btn btn-outline-secondary">Search</button>
                </div>
            </form>
        </div>
        <div class="row mt-3 starWarsStyle sub-title text-center" v-if="!planets || !planets.length">
            Wait for a while...<br>
            Sorry about that!<br>
            We tried so hard, but in the end, nothing was found...
        </div>
        <div class="row mt-3">
            <st-planet-item
                v-for="planet in planets"
                :key="planet.id"
                :id="planet.id"
                :name="planet.name"
                :rotation_period="planet.rotation_period"
                :orbital_period="planet.orbital_period"
                :diameter="planet.diameter">
            </st-planet-item>
        </div>
    </div>
</template>

<script>
    import dataService from '../../api/data-service';
    import StPlanetItem from './PlanetItem';

    export default {
    name: 'st-planets-list',
    data(){
        return {
            planets: [],
            searchValue: ''
        }
    },
    created() {
        /* eslint-disable */
        NProgress.start();
        dataService.getPlanets().then(
           response =>{
               this.planets = response.data.results;
               NProgress.done();
           }
       );
    },
    methods: {
        search() {
            NProgress.start();
            dataService.getPlanetsByName(this.searchValue).then(
                response => {
                    this.planets = response.data.results;
                    NProgress.done();
                }
            );
        }
    },
    components: {
      StPlanetItem,
    }
  };
</script>