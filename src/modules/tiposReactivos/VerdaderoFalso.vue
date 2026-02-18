<script setup>
import { ref } from 'vue'
const valor = ref(null)
</script>

<template>
  <div class="p-4 border border-base-300 rounded-lg">
    <h3 class="font-semibold mb-2">Verdadero / Falso</h3>
    <div class="flex gap-4">
      <label class="flex items-center gap-2 cursor-pointer">
        <input type="radio" class="radio" :value="true" v-model="valor" />
        <span>Verdadero</span>
      </label>

      <label class="flex items-center gap-2 cursor-pointer">
        <input type="radio" class="radio" :value="false" v-model="valor" />
        <span>Falso</span>
      </label>
    </div>

    <div class="mt-3 opacity-70">Valor: {{ valor }}</div>
  </div>
</template>
