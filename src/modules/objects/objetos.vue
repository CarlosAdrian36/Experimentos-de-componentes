<template>
  <div class="space-y-4">
    <!-- Instrucción -->
    <div>
      <label class="font-semibold">Instrucción</label>
      <input
        v-model="formulario.instruccion"
        class="input input-bordered w-full"
        placeholder="Escribe la instrucción"
      />
    </div>

    <!-- Respuestas -->
    <div>
      <p class="font-semibold mb-2">Respuestas</p>

      <div v-for="(respuesta, index) in formulario.respuestas" :key="index" class="flex gap-2 mb-2">
        <input
          v-model="respuesta.texto"
          class="input input-bordered flex-1"
          :placeholder="`Respuesta ${index + 1}`"
        />

        <button
          v-if="formulario.respuestas.length > 4"
          class="btn btn-error btn-sm"
          @click="eliminarRespuesta(index)"
        >
          ✕
        </button>
      </div>

      <button class="btn btn-outline btn-info" @click="agregarRespuesta">
        + Agregar respuesta
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const formulario = reactive({
  instruccion: '',
  respuestas: [
    { texto: 'Opcion 1', isCorrect: false },
    { texto: 'Opcion 2', isCorrect: true },
    { texto: 'Opcion 3', isCorrect: false },
    { texto: 'Opcion 4', isCorrect: false },
  ],
})

const agregarRespuesta = () => {
  formulario.respuestas.push({ texto: '', isCorrect: false })
}

const eliminarRespuesta = (index: number) => {
  formulario.respuestas.splice(index, 1)
}
</script>
