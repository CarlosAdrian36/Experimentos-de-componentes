<script setup lang="ts">
import type { User } from '../../interface/User.interface'

const props = defineProps<{ user: User }>()
</script>

<template>
  <div>
    <h3 class="font-bold text-lg">Confirmar eliminación</h3>
    <p class="py-4">
      ¿Estás seguro de que deseas eliminar al usuario
      <span class="font-semibold">{{ props.user.nombre }}</span>
      con ID: <span class="font-semibold">{{ props.user.id }}</span
      >?
    </p>
  </div>
</template>
