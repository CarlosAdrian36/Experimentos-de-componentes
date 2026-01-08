<script setup lang="ts">
import { ref } from 'vue'
const name = ref('')
</script>

<template>
  <div>
    <h3 class="font-bold text-lg">Nuevo Usuario</h3>
    <input v-model="name" placeholder="Nombre" class="input input-bordered w-full my-2" />
  </div>
</template>
