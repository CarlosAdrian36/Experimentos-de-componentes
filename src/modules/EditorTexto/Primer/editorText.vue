<template>
  <!-- <froala :tag="'textarea'" v-model="html" :config="config" /> -->
  <div class="collapse collapse-plus bg-base-100 border border-base-300">
    <input type="checkbox" name="my-accordion-3" />
    <div class="collapse-title font-semibold flex justify-center">Crear Reactivo</div>
    <div class="collapse-content text-sm">
      <div class="flex flex-row p-6">
        <div class="basis-1/12 flex justify-center items-center">
          <p class="text-2xl">1.-</p>
        </div>
        <div class="basis-11/12 pl-4">
          <froala :tag="'textarea'" v-model="html" :config="config" />
        </div>
      </div>
      <!--  -->
      <!-- <div class="flex flex-row p-6">
        <button class="btn btn-sm btn-outline" @click="toggleToolbarB">
          {{ showToolbarB ? 'Ocultar herramientas' : 'Mostrar herramientas' }}
        </button>
        <div :class="['froala-toggle', { 'is-open': showToolbarB }]">
          <froala :tag="'textarea'" v-model="htmlB" :config="config" />
        </div>
      </div> -->
      <!--  -->
      <div class="flex flex-row p-6">
        <div class="basis-1/12"></div>
        <div class="basis-11/12">
          <div class="p-6">
            <div class="flex flex-row">
              <div class="basis-1/12 flex justify-center items-center">
                <input type="checkbox" class="checkbox checkbox-success" />
              </div>
              <div class="basis-11/12">
                <div class="flex flex-row p-6 w-full items-start gap-2">
                  <div
                    :class="['froala-toggle', { 'is-open': MostrarToolbar }]"
                    class="flex-1 min-w-0"
                  >
                    <froala :tag="'textarea'" v-model="htmlB" :config="config" />
                  </div>
                  <button class="btn btn-sm" @click="toggleToolbar">
                    <edit />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="collapse collapse-plus bg-base-100 border border-base-300">
    <input type="checkbox" checked />
    <div class="collapse-title font-semibold flex justify-center">Crear Reactivo Tipos</div>

    <div class="collapse-content text-sm">
      <div class="grid grid-cols-3 gap-4 m-8 place-items-center">
        <!-- Botón -->
        <button class="btn btn-outline btn-info w-[335px] flex items-center gap-3 justify-start">
          <span class="w-6 flex justify-center">
            <font-awesome-icon icon="circle-dot" />
          </span>
          <span>Opción múltiple</span>
        </button>

        <button class="btn btn-outline btn-info w-[335px] flex items-center gap-3 justify-start">
          <span class="w-6 flex justify-center">
            <font-awesome-icon icon="font" />
          </span>
          <span>Texto abierto</span>
        </button>

        <button class="btn btn-outline btn-info w-[335px] flex items-center gap-3 justify-start">
          <span class="w-6 flex justify-center">
            <font-awesome-icon icon="check-double" />
          </span>
          <span>Respuesta múltiple</span>
        </button>

        <button class="btn btn-outline btn-info w-[335px] flex items-center gap-3 justify-start">
          <span class="w-6 flex justify-center">
            <font-awesome-icon icon="arrow-right-arrow-left" />
          </span>
          <span>Verdadero / Falso</span>
        </button>

        <button class="btn btn-outline btn-info w-[335px] flex items-center gap-3 justify-start">
          <span class="w-6 flex justify-center">
            <font-awesome-icon icon="arrows-turn-to-dots" />
          </span>
          <span>Relacionar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Edit from '@/common/icons/edit.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

const html = ref('<p>Hola Froala</p>')
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
const MostrarToolbar = ref(false)
const toggleToolbar = () => (MostrarToolbar.value = !MostrarToolbar.value)
</script>
<style>
.froala-toggle .fr-toolbar {
  max-height: 0;
  opacity: 0;
  transform: translateY(-6px);
  overflow: hidden;

  transition:
    max-height 220ms ease,
    opacity 180ms ease,
    transform 180ms ease;
}

.froala-toggle.is-open .fr-toolbar {
  max-height: 120px;
  opacity: 1;
  transform: translateY(0);
}

.froala-toggle:not(.is-open) .fr-box.fr-basic .fr-wrapper {
  border-top: 1px solid RGB(204, 204, 204) !important;
}

.froala-toggle.is-open .fr-box.fr-basic .fr-wrapper {
  border-top: inherit !important;
}
</style>
