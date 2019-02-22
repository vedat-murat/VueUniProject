<template>
    <div>
        <h3 class="starWarsStyle text-center sub-title">Star wars</h3>
        <h1 class="starWarsStyle text-warning text-center title">Planets</h1>
        <div class="clearfix mt-3">
            <form @submit.prevent="search">
                <div class="input-group">
                    <input ref="searchInput" id="search" v-model="searchValue" class="form-control" placeholder="Search by Name...">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="submit"><i class="fas fa-search"></i> Search</button>
                        <button v-on:click.prevent="clear" class="btn btn-outline-secondary" type="button"><i class="fas fa-times"></i> Clear</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="row mt-3">
            <st-planet-item
                v-for="planet in planets"
                :key="planet.id"
                :id="planet.id"
                :name="planet.name"
                :rotation_period="planet.rotation_period"
                :orbital_period="planet.orbital_period"
                :diameter="planet.diameter"
                :climate="planet.climate"
                :gravity="planet.gravity"
                :terrain="planet.terrain"
                :surface_water="planet.surface_water"
                :population="planet.population">
            </st-planet-item>
        </div>
        <div class="row mt-3 starWarsStyle sub-title text-center" v-if="!planets || !planets.length">
            Wait for a while...<br>
            Sorry about that!<br>
            We tried so hard, but in the end, nothing was found...
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
        },
        clear(){
            this.searchValue='';
            this.$refs.searchInput.value = null;
            this.search();
        }
    },
    components: {
        StPlanetItem,
    }
  };
</script>