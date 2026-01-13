<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

import { useForm } from 'vee-validate'
import * as yup from 'yup'

import { useModalStore } from '../../stores/modalStore'
import CustomInput from '../CustomInput.vue'

const validationSchema = yup.object({
  name: yup
    .string()
    .required('El nombre es obligatorio')
    .min(3, 'El nombre debe tener al menos 3 caracteres'),
  Descripcion: yup
    .string()
    .required('La descripción es obligatoria')
    .min(10, 'La descripción debe tener al menos 10 caracteres'),
})

type FromValues = {
  name: string
  Descripcion: string
}

const props = defineProps<{
  onSubmit: (data: FromValues) => void
}>()

const { values, defineField, errors, handleSubmit } = useForm<FromValues>({
  validationSchema,
})
const [name, nameAttrs] = defineField('name')
const [Descripcion, DescripcionAttrs] = defineField('Descripcion')

const modal = useModalStore()

const submitForm = handleSubmit((data) => {
  props.onSubmit?.(data)
})

onMounted(() => {
  modal.setSubmitFN(submitForm)
})
onBeforeUnmount(() => {
  // Limpiar la función de envío del modal al desmontar el componente
  modal.setSubmitFN(null)
})
</script>

<template>
  <div>
    <h3 class="font-bold text-lg">Nuevo Usuario</h3>
    <div class="py-4">
      <label class="floating-label">
        <CustomInput
          v-model="name"
          v-bind="nameAttrs"
          :error="errors.name"
          type="text"
          placeholder="Nombre del usuario"
          class="input-large"
        />
        <span>Nombre</span>
      </label>
    </div>
    <div class="py-4">
      <label class="floating-label">
        <CustomInput
          v-model="Descripcion"
          v-bind="DescripcionAttrs"
          :error="errors.Descripcion"
          type="text"
          placeholder="Descripción del usuario"
          class="input-large"
        />
        <span>Descripción</span>
      </label>
    </div>
  </div>

  <pre>values: {{ values }}</pre>
  <div class="text-sm text-error mt-1">{{ errors }}</div>
</template>
