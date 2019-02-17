<template>
  <div class="col-md-4">
      <b-card :title="name"
          tag="article"
          class="mb-2">
        <span>{{ birth_date }}</span>      
        <p class="card-text">
          {{ height }}<br>
          {{ gender }}
        </p>
      </b-card>
  </div>
</template>

<script>
  export default {
    props: {
      id: Number,
      name: String,
      birth_date: String,
      height: String,
      gender: String
    },
    name: 'st-people-item',
    }
</script>