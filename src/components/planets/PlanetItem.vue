<template>
  <div class="col-md-4">
      <b-card :title="name"
          tag="article"
          class="mb-2">
        <span>Rotation Period: {{ rotation_period }}</span>      
        <p class="card-text">
          <span>Orbital Period: {{ orbital_period }}</span><br>
          <span>Diameter: {{ diameter }}</span>
        </p>
      </b-card>
  </div>
</template>

<script>
  export default {
    props: {
      id: Number,
      name: String,
      rotation_period: String,
      orbital_period: String,
      diameter: String
    },
    name: 'st-planet-item',
    }
</script>