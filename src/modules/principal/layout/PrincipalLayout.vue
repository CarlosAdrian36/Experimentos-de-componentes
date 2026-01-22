<script setup lang="ts">
import FooterComponent from '../common/FooterComponent.vue'
import TopMenu from '../common/TopMenu.vue'
</script>

<template>
  <div class="drawer">
    <input id="drawer-1" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="flex flex-col min-h-screen">
        <div class="fixed top-0 left-0 w-full z-50">
          <TopMenu />
        </div>
        <main class="grow pt-16 pb-6 bg-base-200">
          <RouterView />
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </div>
    <div class="drawer-side pt-16">
      <label for="drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-100 min-h-full w-80 p-4">
        <li>
          <router-link :to="{ name: 'Default' }"> Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Dialog' }"> Dialog</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'exercise' }"> Ejercicio de api</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Formulario' }"> Formulario de Creacion de Banco</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Editor' }"> Editor de Texto</router-link>
        </li>
        <!-- <li>
          <router-link :to="{ name: 'Quill' }"> Quill</router-link>
        </li> -->
      </ul>
    </div>
  </div>
</template>
