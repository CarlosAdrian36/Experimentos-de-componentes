<script setup lang="ts">
import BaseModal from '@/modules/common/components/BaseModal.vue'
import ConfirmeDelete from '@/modules/common/components/modals/ConfirmeDelete.vue'
import SearchItems from '@/modules/common/components/modals/SearchItems.vue'
import UserForm from '@/modules/common/components/modals/UserForm.vue'
import { useModalStore } from '@/modules/common/stores/modalStore'

const modal = useModalStore()

const userDemo = { id: 15, nombre: 'Carlos Arroyo' }

function abrirConfirmacion() {
  modal.openModal(ConfirmeDelete, { user: userDemo }, [
    { label: 'Cancelar', variant: 'outline', action: modal.closeModal },
    {
      label: 'Confirmar',
      variant: 'error',
      action: () => {
        alert('Usuario eliminado ✅')
        modal.closeModal()
      },
    },
  ])
}

function abrirFormulario() {
  modal.openModal(UserForm, {}, [
    { label: 'Cancelar', variant: 'outline', action: modal.closeModal },
    {
      label: 'Guardar',
      variant: 'primary',
      action: () => {
        alert('Usuario guardado ✅')
        modal.closeModal()
      },
    },
  ])
}
function abrirBuscador() {
  modal.openModal(SearchItems, {})
}

function AbrirModalConInformacion() {
  alert('Aquí se abriría un modal con un formulario para ingresar nueva información.')
}
</script>

<template>
  <BaseModal />
  <div class="space-x-2">
    <button class="btn btn-error" @click="abrirConfirmacion">Eliminar</button>
    <button class="btn btn-primary" @click="abrirFormulario">Nuevo Usuario</button>
    <button class="btn btn-primary" @click="AbrirModalConInformacion">Nuevo Formulario</button>
  </div>

  <div class="relative w-full sm:w-auto">
    <button class="btn w-[307px] btn-outline flex justify-between mt-2" @click="abrirBuscador">
      <div class="flex justify-between">
        <div class="flex text-sm">Buscar...</div>
      </div>
      <div>
        <kbd class="kbd"> Ctrl </kbd> +
        <kbd class="kbd"> K </kbd>
      </div>
    </button>
  </div>
</template>
