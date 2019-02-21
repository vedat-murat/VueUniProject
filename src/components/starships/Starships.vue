<template>
    <div class="container pageLayout">
        <st-starships-list></st-starships-list>
    </div>
</template>

<script>
    import StStarshipsList from './StarshipsList';

    export default {
        components: {
            StStarshipsList,
        }    
    }
</script>