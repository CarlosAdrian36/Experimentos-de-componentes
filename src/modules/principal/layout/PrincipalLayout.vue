<script setup lang="ts">
import FooterComponent from '../common/FooterComponent.vue'
import TopMenu from '../common/TopMenu.vue'
</script>

<template>
  <div class="drawer h-screen">
    <input id="drawer-1" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content overflow-auto">
      <div class="flex flex-col min-h-screen">
        <div class="sticky top-0 z-50">
          <TopMenu />
        </div>
        <main class="flex-1 pb-6 bg-base-200">
          <RouterView />
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </div>
    <div class="drawer-side">
      <label for="drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-100 min-h-full w-80 p-4 mt-[62px]">
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
          <!-- <router-link :to="{ name: 'Editor' }"> Editor de Texto</router-link> -->
        </li>
        <li>
          <router-link :to="{ name: 'Objetos' }"> Objetos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'DrawSide' }"> Draw Side</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Reactivos' }"> Reactivos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Themes' }"> Themes</router-link>
        </li>
        <!-- <li>
          <router-link :to="{ name: 'Quill' }"> Quill</router-link>
        </li> -->
      </ul>
    </div>
  </div>
</template>
