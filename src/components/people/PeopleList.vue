<template>
    <div>
        <div class="row mt-3" v-if="!people || !people.length">
            Ooops, sorry!<br>
            We tried hard but in the end nothing was found...
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
            people: []
        }
    },
    created() {
        dataService.getPeople().then(
           response =>{
               this.people = response.data.results;
               /* eslint-disable */
               console.log(response.data.results);
           }
       );
    },
    components: {
      StPeopleItem,
    }
  };
</script>