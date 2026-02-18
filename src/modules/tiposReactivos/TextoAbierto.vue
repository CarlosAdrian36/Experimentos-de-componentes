<script setup>
import { ref } from 'vue'
const texto = ref('')
</script>

<template>
  <div class="p-4 border border-base-300 rounded-lg">
    <h3 class="font-semibold mb-2">Texto abierto</h3>
    <textarea
      class="textarea textarea-bordered w-full"
      v-model="texto"
      placeholder="Escribe algo..."
    ></textarea>
  </div>
</template>