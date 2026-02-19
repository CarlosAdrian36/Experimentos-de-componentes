<script setup lang="ts">
import Sidebarclose from '@/common/icons/sidebarclose.vue'
import Sidebaropen from '@/common/icons/sidebaropen.vue'

const emit = defineEmits(['toggle'])
</script>

<template>
  <!-- <div class="navbar bg-base-100 border-b border-solid border-primary/10 px-6 shrink-0 h-16">
    <button class="btn btn-ghost" @click="emit('toggle')">☰</button>
    <div class="navbar">
      
      <label class="toggle text-base-content">
        <input type="checkbox" value="dark" class="theme-controller" />

        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </g>
        </svg>

        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </g>
        </svg>
      </label>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a class="justify-between"> Perfil </a>
          </li>
          <li><a>Configuracion</a></li>
          <li><a>Cerrar Sesion</a></li>
        </ul>
      </div>
    </div>
  </div> -->

  <div class="navbar bg-base-100 border-b border-primary/10 px-6 shrink-0 h-[65px] min-h-0">
    <div class="flex-none">
      <label class="btn btn-ghost btn-circle swap">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" @click="emit('toggle')" />

        <!-- hamburger icon -->
        <div class="swap-on">
          <Sidebarclose />
        </div>

        <!-- close icon -->
        <div class="swap-off">
          <Sidebaropen />
        </div>
      </label>
    </div>
    <div class="flex-1"></div>
    <div class="flex-none">
      <label class="toggle text-base-content">
        <input type="checkbox" value="dark" class="theme-controller" />

        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </g>
        </svg>

        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </g>
        </svg>
      </label>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a class="justify-between"> Perfil </a>
          </li>
          <li><a>Configuracion</a></li>
          <li><a>Cerrar Sesion</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
