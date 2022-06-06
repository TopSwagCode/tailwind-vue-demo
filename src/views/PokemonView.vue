<template>
  <div class="yellow-background">
    <img :src="pokemonImg" :alt="pokemonName" :title="pokemonName" />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PokemonView extends Vue {
  pokemonImg = "";
  pokemonName = "";
  intervalIdentifier = 0;

  getRandomPokemon() {
    const randomNumber = Math.floor(Math.random() * 807) + 1;
    const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.pokemonImg = data.sprites.other["official-artwork"].front_default;
        this.pokemonName = data.name;
      });
  }

  beforeUnmount() {
    clearInterval(this.intervalIdentifier);
  }

  beforeMount() {
    this.intervalIdentifier = setInterval(() => {
      this.getRandomPokemon();
    }, 5000);
  }
}
</script>

<style scoped></style>
