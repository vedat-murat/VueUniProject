<template>
    <div></div>

</template>

<script>
import dataService from '../../api/data-service';

export default {
    name: 'starship',
    data(){
        return {
            starship: []
        }
    },
    created() {
        dataService.getStarshipsRequest().then(
           response =>{
               this.starship = response.data.results;
           }
       );
    }
}
</script>