<script setup>
import { ref } from 'vue'
const ejemplo = ref('')
</script>

<template>
  <div class="p-4 border border-base-300 rounded-lg">
    <h3 class="font-semibold mb-2">Respuesta múltiple</h3>
    <input
      class="input input-bordered w-full"
      v-model="ejemplo"
      placeholder="Estado de prueba..."
    />
  </div>
</template>
