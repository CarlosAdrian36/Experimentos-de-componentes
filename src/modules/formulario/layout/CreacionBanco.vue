<script setup lang="ts">
import BaseModal from '@/modules/common/components/BaseModal.vue'
import { useModalStore } from '@/modules/common/stores/modalStore'
import CrearBancoForm from '../Formulario/CrearBancoForm.vue'

const modal = useModalStore()

function CrearBanco() {
  modal.openModal(CrearBancoForm, {}, [
    { label: 'Cancelar', variant: 'outline', action: modal.closeModal, type: 'button' },
    {
      label: 'Guardar',
      variant: 'primary',
      type: 'submit',
    },
  ])
}
</script>

<template>
  <BaseModal />

  <div>
    <button class="btn btn-primary" @click="CrearBanco">Crear Banco</button>
  </div>
</template>
