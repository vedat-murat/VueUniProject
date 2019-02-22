<template>
    <tr>
      <td>{{ name }}</td>
      <td>{{ birth_year }}</td>
      <td>{{ height }}</td>
      <td>{{ mass }}</td>
      <td>{{ hair_color }}</td>
      <td>{{ skin_color }}</td>
      <td>{{ eye_color }}</td>
      <td>{{ gender }}</td>
    </tr>
</template>

<script>
  export default {
    props: {
      id: Number,
      name: String,
      birth_year: String,
      height: String,
      mass: String,
      hair_color: String,
      skin_color: String,
      eye_color: String,
      gender: String
    },
      name: 'st-people-item',
    }
</script>