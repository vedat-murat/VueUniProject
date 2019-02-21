<template>
    <div>
        <h3 class="starWarsStyle text-center sub-title">Star wars</h3>
        <h1 class="starWarsStyle text-warning text-center title">People</h1>
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
        <div class="row mt-3 starWarsStyle sub-title text-center" v-if="!people || !people.length">
            Wait for a while...<br>
            Sorry about that!<br>
            We tried so hard, but in the end, nothing was found...
        </div>
        <div class="row mt-3">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Birth Year</th>
                        <th scope="col">Height</th>
                        <th scope="col">Mass</th>
                        <th scope="col">Hair Color</th>
                        <th scope="col">Skin Color</th>
                        <th scope="col">Eye Color</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                        <st-people-item
                            v-for="person in people"
                            :key="person.id"
                            :id="person.id"
                            :name="person.name"
                            :birth_year="person.birth_year"
                            :height="person.height"
                            :mass="person.mass"
                            :hair_color="person.hair_color"
                            :skin_color="person.skin_color"
                            :eye_color="person.eye_color"
                            :gender="person.gender">
                        </st-people-item>
                </tbody>
            </table>
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
        },
        clear(){
            this.searchValue='';
            this.$refs.searchInput.value = null;
            this.search();
        }
    },
    components: {
      StPeopleItem,
    }
  };
</script>