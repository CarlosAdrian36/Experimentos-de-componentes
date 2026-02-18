<template>
  <div class="flex flex-row p-6">
    <div class="basis-1/12 flex justify-center items-center">
      <p class="text-2xl">1.-</p>
    </div>
    <div class="basis-11/12 pl-4">
      <froala :tag="'textarea'" v-model="ReactivoOpcioMultiple.instruccion" :config="config" />
    </div>
  </div>

  <div class="flex flex-row p-6">
    <div class="basis-1/12"></div>
    <div class="basis-11/12">
      <div class="p-6">
        <button class="btn btn-info" @click="agregarRespuesta">Agregar respuesta</button>
        <div
          class="flex flex-row"
          v-for="(respuesta, index) in ReactivoOpcioMultiple.respuestas"
          :key="index"
        >
          <div class="basis-1/12 flex justify-center items-center">
            <input type="checkbox" class="checkbox checkbox-success" v-model="respuesta.correcta" />
            <span class="font-bold text-lg w-6 text-center"> {{ letraRespuesta(index) }}. </span>
          </div>
          <div class="basis-11/12">
            <div class="flex flex-row p-6 w-full items-start gap-2">
              <div
                :class="['froala-toggle', { 'is-open': MostrarToolbar === index }]"
                class="flex-1 min-w-0"
              >
                <froala :tag="'textarea'" v-model="respuesta.texto" :config="config" />
              </div>
              <button class="btn btn-sm" @click="toggleToolbar(index)">
                <edit />
              </button>
              <button class="btn btn-sm btn-error" @click="eliminarRespuesta(index)">
                <font-awesome-icon icon="trash" />
              </button>
            </div>
          </div>
        </div>
        <button class="btn btn-primary">Guardar Reactivo</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Edit from '@/common/icons/edit.vue'
import { reactive, ref } from 'vue'
import type { Formulario } from './interface'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// const html = ref('<p>Hola Froala</p>')
const htmlB = ref('<p>Editor B</p>')

const config = {
  pastePlain: true,
  toolbarButtons: [
    'bold',
    'italic',
    'underline',
    '|',
    'align',
    '|',
    'formatOL',
    'formatUL',
    '|',
    'paragraphFormat',
    '|',
    'insertTable',
    '|',
    'undo',
    'redo',
  ],
  align: {
    '': 'Predeterminado',
    left: 'Izquierda',
    center: 'Centrado',
    right: 'Derecha',
    justify: 'Justificado',
  },
  paragraphFormat: {
    N: 'Normal',
    H1: 'Título 1',
    H2: 'Título 2',
    H3: 'Título 3',
  },
  tableEditButtons: [
    'tableHeader',
    'tableRemove',
    '|',
    'tableRows',
    'tableColumns',
    'tableCells',
    '|',
    'tableCellBackground',
    'tableCellHorizontalAlign',
    'tableCellVerticalAlign',
  ],
}
const MostrarToolbar = ref<number | null>(null)
const toggleToolbar = (index: number) =>
  (MostrarToolbar.value = MostrarToolbar.value === index ? null : index)

const ReactivoOpcioMultiple = reactive<Formulario>({
  instruccion: '',
  respuestas: [
    { texto: 'Opcion 1', correcta: false },
    { texto: 'Opcion 2', correcta: true },
    { texto: 'Opcion 3', correcta: false },
    { texto: 'Opcion 4', correcta: false },
  ],
})
const agregarRespuesta = () => {
  ReactivoOpcioMultiple.respuestas.push({ texto: '', correcta: false })
}
const eliminarRespuesta = (index: number) => {
  ReactivoOpcioMultiple.respuestas.splice(index, 1)
}

const letraRespuesta = (index: number) => {
  let n = index + 1
  let s = ''
  while (n > 0) {
    const r = (n - 1) % 26
    s = String.fromCharCode(65 + r) + s // 65 = 'A'
    n = Math.floor((n - 1) / 26)
  }
  return s
}
</script>
