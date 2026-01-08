import { defineStore } from 'pinia'
import { ref, type Component } from 'vue'
import type { ModalButton } from '../interface/ModalButton'

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false)
  const component = ref<string | null | Component>(null)
  const props = ref<Record<string, any>>({})
  const buttons = ref<ModalButton[]>([])

  function openModal(
    componentRef: Component,
    componentProps = {},
    modalButton: ModalButton[] = [],
  ) {
    component.value = componentRef
    props.value = componentProps
    isOpen.value = true
    buttons.value = modalButton
  }
  function closeModal() {
    isOpen.value = false
    component.value = null
    props.value = {}

    buttons.value = []
  }

  return { isOpen, component, props, buttons, openModal, closeModal }
})
