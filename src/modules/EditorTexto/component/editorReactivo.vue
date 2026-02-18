<template>
  <froala :tag="'textarea'" v-model="html" :config="config" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const html = ref('')
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
</script>
