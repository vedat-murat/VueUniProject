<template>
  <div style="width: 25%; padding: 10px;">
    <div class="starshipItemCard">
    <img class="card-img-top img-fluid starshipItemCardimage" src="..\..\..\src\assets\starship.jpg" alt="Card image cap">
    <div class="card-body">
      <h3 class="card-title">{{ name }}</h3>
      <p class="card-text">{{ manufacturer }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><span class="font-weight-bold">Model: </span> {{ model }}</li>
      <li class="list-group-item"><span class="font-weight-bold">Starship Class: </span> {{ starship_class }}</li>
      <li class="list-group-item"><span class="font-weight-bold">Cost: </span> {{ cost_in_credits }}</li>
    </ul>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            id: Number,
            name: String,
            model: String,
            manufacturer: String,
            cost_in_credits: String,
            starship_class: String
        },
        name: 'st-starship-item',
    }
</script>