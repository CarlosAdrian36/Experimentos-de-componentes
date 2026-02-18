<!-- <template>
  <div class="drawer lg:drawer-open border-2 max-w-[375px]">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <label for="my-drawer-3" class="btn drawer-button lg:hidden"> Open drawer </label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template> -->
<template>
  <div class="drawer lg:drawer-open h-full">
    <input id="reactivos-drawer" type="checkbox" class="drawer-toggle" />

    <!-- Contenido -->
    <div class="drawer-content p-6">
      <label for="reactivos-drawer" class="btn btn-primary lg:hidden mb-4"> Abrir menú </label>

      <h1 class="text-2xl font-bold">Reactivos</h1>
    </div>

    <!-- Sidebar interno -->
    <div class="drawer-side">
      <label for="reactivos-drawer" class="drawer-overlay"></label>
      <ul class="menu bg-base-100 w-64 min-h-full p-4">
        <li><a>Sección 1</a></li>
        <li><a>Sección 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
