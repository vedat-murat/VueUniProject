<template>
    <div class="container">
    <st-people></st-people>
  </div>
</template>

<script>
import dataService from '../../api/data-service';
import PeopleList from './PeopleList';

export default {
    name: 'people',
    data(){
        return {
            people: []
        }
    },
    created() {
        dataService.getPeopleRequest().then(
           response =>{
               this.people = response.data.results;
           }
       );
    },
    components: {
        'st-people-list': PeopleList
    }
}
</script>
