<script setup lang="ts">
import BaseModal from '@/modules/common/components/BaseModal.vue'
import ConfirmeDelete from '@/modules/common/components/modals/ConfirmeDelete.vue'
import Formulario from '@/modules/common/components/modals/Formulario.vue'
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
  modal.openModal(
    UserForm,
    {
      onSubmit: (data: any) => {
        alert(`Usuario guardad!!o: ${data.name} ✅`)
        modal.closeModal()
      },
    },
    [
      { label: 'Cancelar', variant: 'outline', action: modal.closeModal, type: 'button' },
      {
        label: 'Guardar',
        variant: 'primary',
        type: 'submit',
      },
    ],
  )
}
function abrirBuscador() {
  modal.openModal(SearchItems, {})
}

function AbrirModalConInformacion() {
  modal.openModal(Formulario, { texto: 'Información adicional' }, [
    { label: 'Cerrar', variant: 'outline' },
    {
      label: 'Guardar',
      variant: 'primary',
      action: () => {
        ;(alert('Guardado!'), modal.closeModal())
      },
    },
  ])
}
</script>

<template>
  <BaseModal />
  <div class="space-x-2">
    <button class="btn btn-error" @click="abrirConfirmacion">Eliminar</button>
    <button class="btn btn-primary" @click="abrirFormulario">Nuevo Usuario</button>
    <button class="btn btn-primary" @click="AbrirModalConInformacion">
      Nuevo despues de vacaciones
    </button>
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

  <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!BORRAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

  <input
    class="w-full rounded-xl border border-base-200 bg-base-100 px-3 py-2 text-sm shadow-sm placeholder:text-base-content/40 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 focus:outline-none"
  />
</template>
