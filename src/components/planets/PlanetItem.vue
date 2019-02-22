<template>
<div class="card mb-3 planetItemCard">
  <img class="card-img-top img-fluid planetItemCardimage img-thumbnail" src="..\..\..\src\assets\planets.jpg" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title text-center">{{ name }}</h2>
    <table class="table">
    	<thead>
        <tr>
          <th scope="col">Rotation Period</th>
          <th scope="col">Orbital Period</th>
          <th scope="col">Diameter</th>
          <th scope="col">Climate</th>
          <th scope="col">Gravity</th>
          <th scope="col">Terrain</th>
          <th scope="col">Surface Water</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ rotation_period }}</td>
          <td>{{ orbital_period }}</td>
          <td>{{ diameter }}</td>
          <td class="text-capitalize">{{ climate }}</td>
          <td>{{ gravity }}</td>
          <td class="text-capitalize">{{ terrain }}</td>
          <td>{{ surface_water }}</td>
        </tr>
      </tbody>
    </table>
    <hr>
    <p class="text-center"><span class="font-weight-bold">Population: </span>{{ population }}</p>
  </div>
</div>
</template>

<script>
  export default {
    props: {
      id: Number,
      name: String,
      rotation_period: String,
      orbital_period: String,
      diameter: String,
      population: String,
      climate: String,
      gravity: String,
      terrain: String,
      surface_water: String,
    },
    name: 'st-planet-item',
    }
</script>