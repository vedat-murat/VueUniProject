<template>
    <div class="container">
  </div>
</template>

<script>
import dataService from '../../api/data-service';

export default {
    name: 'planet',
    data(){
        return {
            planet: []
        }
    },
    created() {
        dataService.getPlanetsRequest().then(
           response =>{
               this.planet = response.data.results;
           }
       );
    }
}
</script>