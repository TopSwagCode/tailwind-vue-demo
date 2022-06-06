<template>
  <nav class="justify-center flex bg-yellow-300 items-center">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/counter">Counter</router-link> |
    <router-link to="/table">Table</router-link> |
    <router-link to="/pokemon">Pokemon</router-link>
  </nav>
  <router-view />
</template>

<style></style>
