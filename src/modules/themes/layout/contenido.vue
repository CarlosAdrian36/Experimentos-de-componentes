<script setup lang="ts">
const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme')

  document.documentElement.setAttribute(
    'data-theme',
    current === 'nexuslight' ? 'nexusdark' : 'nexuslight',
  )
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center relative overflow-hidden from-primary/20 via-secondary/20 to-accent/20 transition-all duration-500"
  >
    <!-- Botón cambio de tema -->
    <button
      @click="toggleTheme"
      class="absolute top-6 right-6 bg-base-100/70 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition"
    >
      Cambiar tema
    </button>

    <!-- Contenido -->
    <div class="relative z-10 w-full max-w-md px-6">
      <div
        class="backdrop-blur-xl bg-base-100/70 border border-white/20 shadow-2xl rounded-3xl p-8 md:p-10 transition-all duration-500"
      >
        <h1 class="text-2xl font-bold text-base-content mb-6 text-center">Bienvenido a Nexus</h1>

        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium mb-2"> Usuario </label>
            <input
              type="text"
              placeholder="1234567"
              class="w-full px-4 py-3 bg-base-100/50 border border-base-content/10 rounded-xl focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2"> Contraseña </label>
            <input
              type="password"
              placeholder="••••••••"
              class="w-full px-4 py-3 bg-base-100/50 border border-base-content/10 rounded-xl focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <button
            type="submit"
            class="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98]"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
