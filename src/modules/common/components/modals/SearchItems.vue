<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  data: Array<{ id: number | string; name: string }>
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'select', item: any): void
}>()

const query = ref('')
const showDropdown = ref(false)

const filteredResults = computed(() => {
  if (!query.value) return []
  const term = query.value.toLowerCase()
  return props.data.filter((item) => item.name.toLowerCase().includes(term))
})

// cerrar dropdown si no hay texto
watch(query, (val) => {
  showDropdown.value = val.length > 0
})
</script>

<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Input estilo DaisyUI -->
    <div class="join w-full">
      <input
        type="text"
        class="input input-bordered join-item w-full"
        v-model="query"
        :placeholder="placeholder || 'Buscar...'"
      />
      <button class="btn join-item btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z"
          />
        </svg>
      </button>
    </div>

    <!-- Dropdown de resultados -->
    <ul
      v-if="showDropdown && filteredResults.length"
      class="menu bg-base-100 rounded-box shadow-lg absolute mt-2 w-full z-50 border border-base-300"
    >
      <li v-for="item in filteredResults" :key="item.id">
        <a @click="emit('select', item)">
          {{ item.name }}
        </a>
      </li>
    </ul>

    <!-- Sin resultados -->
    <div
      v-else-if="showDropdown && !filteredResults.length"
      class="absolute mt-2 w-full bg-base-200 rounded-box text-center p-2 border border-base-300 text-sm text-gray-500"
    >
      Sin resultados
    </div>
  </div>
</template>
