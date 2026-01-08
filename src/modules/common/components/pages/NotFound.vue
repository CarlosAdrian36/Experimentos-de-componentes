<template>
  <!-- <div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
    <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center pt-8 sm:justify-start sm:pt-0">
        <div class="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">404</div>
        <div class="ml-4 text-lg text-gray-500 uppercase tracking-wider">Not Found</div>
      </div>
      <div class="flex justify-center pt-9">
        <router-link replace :to="{ name: 'Default' }"
          ><button class="btn btn-outline">Regresar</button>
        </router-link>
      </div>
    </div>
  </div> -->
  <main class="flex flex-1 flex-col items-center justify-center px-4 py-30 text-center">
    <div class="flex flex-col items-center gap-8">
      <div class="flex flex-col items-center gap-4">
        <h1
          class="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-base-content tracking-tighter"
        >
          404
        </h1>
        <div class="flex max-w-[480px] flex-col items-center gap-3">
          <p
            class="text-text-light dark:text-text-dark text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center"
          >
            Pagina no encontrada
          </p>
          <p
            class="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal max-w-[480px] text-center"
          >
            Lo sentimos, la página que estás buscando no existe o no tienes permiso.
          </p>
        </div>
      </div>
      <router-link :to="{ name: 'Default' }">
        <button
          class="btn btn-outline flex min-w-[84ypx] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 font-bold leading-normal tracking-[0.015em] shadow-md hover:bg-opacity-90 transition-colors"
        >
          <span class="truncate">Inicio</span>
        </button>
      </router-link>
    </div>
  </main>
</template>
