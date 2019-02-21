<template>
    <div>
        <h3 class="starWarsStyle text-center sub-title">Star wars</h3>
        <h1 class="starWarsStyle text-warning text-center title">Starships</h1>
        <div class="clearfix mt-3">
            <form @submit.prevent="search">
                <div class="float-left min-width-300">
                    <input v-model="searchValue" class="form-control" placeholder="Search by Name and Model...">
                </div>
                <div class="float-left ml-2">
                    <button class="btn btn-outline-secondary">Search</button>
                </div>
            </form>
        </div>
        <div class="row mt-3 starWarsStyle sub-title text-center" v-if="!starships || !starships.length">
            Wait for a while...<br>
            Sorry about that!<br>
            We tried so hard, but in the end, nothing was found...
        </div>
        <div class="row mt-3">
            <st-starship-item
                v-for="starship in starships"
                :key="starship.id"
                :id="starship.id"
                :name="starship.name"
                :model="starship.model"
                :manufacturer="starship.manufacturer"
                :cost_in_credits="starship.cost_in_credits">
            </st-starship-item>
        </div>
    </div>
</template>

<script>
    import dataService from '../../api/data-service';
    import StStarshipItem from './StarshipItem';

    export default {
    name: 'st-starships-list',
    data(){
        return {
            starships: [],
            searchValue: ''
        }
    },
    created() {
        /* eslint-disable */
        NProgress.start();
        dataService.getStarships().then(
           response =>{
               this.starships = response.data.results;
               NProgress.done();
           }
       );
    },
    methods: {
        search() {
            NProgress.start();
            dataService.getStarshipsByName(this.searchValue).then(
                response => {
                    this.starships = response.data.results;
                    NProgress.done();
                }
            );
        }
    },
    components: {
      StStarshipItem,
    }
  };
</script>