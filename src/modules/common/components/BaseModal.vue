<template>
  <dialog class="modal" :open="isOpen">
    <div class="modal-box">
      <!-- Contenido dinámico -->
      <component :is="component" v-bind="props" v-if="component" />

      <div class="modal-action flex justify-end gap-2">
        <!-- Botones dinámicos -->
        <button
          v-for="(btn, i) in buttons"
          :key="i"
          class="btn"
          :class="{
            'btn-primary': btn.variant === 'primary',
            'btn-error': btn.variant === 'error',
            'btn-outline': btn.variant === 'outline',
          }"
          @click="btn.action ? btn.action() : modal.closeModal()"
        >
          {{ btn.label }}
        </button>
      </div>
    </div>

    <form method="dialog" class="modal-backdrop" @click="modal.closeModal()">
      <button></button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useModalStore } from '../stores/modalStore'

const modal = useModalStore()
const { isOpen, component, props, buttons } = storeToRefs(modal)
</script>
