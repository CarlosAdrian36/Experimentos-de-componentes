import { type Component } from 'vue';
<template>
  <div ">
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value ?? '')"
      @blur="$emit('blur')"
      class="w-full rounded-xl border border-base-200 bg-base-100 px-3 py-2 text-sm shadow-sm placeholder:text-base-content/40 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 focus:outline-none"
      :class="[
        {
          'border-red-500': error,
        },
      ]"
    />
    <span class="capitalize text-red-400" v-if="error">{{ error }}</span>
  </div>
</template>
<script setup lang="ts">
interface Props {
  modelValue?: string | number
  error?: string
  type: 'text' | 'password' | 'email' | 'number',
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
})

defineEmits(['update:modelValue', 'blur'])
</script>
<style scoped></style>
