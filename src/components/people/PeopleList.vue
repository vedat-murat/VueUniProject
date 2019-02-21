<template>
    <div>
        <h3 class="starWarsStyle text-center sub-title">Star wars</h3>
        <h1 class="starWarsStyle text-warning text-center title">People</h1>
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
        <div class="row mt-3 starWarsStyle sub-title text-center" v-if="!people || !people.length">
            Wait for a while...<br>
            Sorry about that!<br>
            We tried so hard, but in the end, nothing was found...
        </div>
        <div class="row mt-3">
            <st-people-item
                v-for="person in people"
                :key="person.id"
                :id="person.id"
                :name="person.name"
                :gender="person.gender"
                :birth_date="person.birth_date"
                :height="person.height">
            </st-people-item>
        </div>
    </div>
</template>

<script>
    import dataService from '../../api/data-service';
    import StPeopleItem from './PeopleItem';

    export default {
    name: 'st-people-list',
    data(){
        return {
            people: [],
            searchValue: ''
        }
    },
    created() {
        /* eslint-disable */
        NProgress.start();
        dataService.getPeople().then(
           response =>{
               this.people = response.data.results;
               NProgress.done();
           }
       );
    },
    methods: {
        search() {
            NProgress.start();
            dataService.getPeopleByName(this.searchValue).then(
                response => {
                    this.people = response.data.results;
                    NProgress.done();
                }
            );
        }
    },
    components: {
      StPeopleItem,
    }
  };
</script>