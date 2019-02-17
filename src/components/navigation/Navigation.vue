<template>
    <b-navbar toggleable="md" type="dark" variant="dark" class="nav">
        <div class="container">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/about">Vue Project</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/people">People</b-nav-item>
                    <b-nav-item to="/planets">Planets</b-nav-item>
                    <b-nav-item to="/starships">Starships</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<style>
  .nav {
    position: absolute;
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
</style>