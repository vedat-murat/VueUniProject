<template>
  <div class="col-md-4">
      <b-card :title="name"
          tag="article"
          class="mb-2">
        <span>Model: {{ model }}</span>      
        <p class="card-text">
          <span>Manufacturer: {{ manufacturer }}</span><br>
          <span>Cost in credits: {{ cost_in_credits }}</span>
        </p>
      </b-card>
  </div>
</template>

<script>
    export default {
        props: {
            id: Number,
            name: String,
            model: String,
            manufacturer: String,
            cost_in_credits: String
        },
        name: 'st-starship-item',
    }
</script>