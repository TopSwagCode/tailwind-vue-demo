<template>
  <div class="yellow-background">
    <p>
      <strong>Counter:</strong>
      {{ count }}
    </p>
    <p>
      <button @click="increment">Increase</button>
      <button @click="decrease">Decrease</button>
    </p>
  </div>
</template>

<script lang="ts">
// Language: ts
// Path: src\views\CounterView.ts
// Counter component with button to increment the count
import { Vue } from "vue-class-component";

export default class CounterView extends Vue {
  count = 0;

  increment() {
    this.count++;
  }
  decrease() {
    this.count--;
  }
}
</script>

<style scoped></style>
