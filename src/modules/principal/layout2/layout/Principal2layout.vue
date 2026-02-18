<script setup lang="ts">
import { ref } from 'vue'
import TopMenu2 from '../../common/v2/TopMenu2.vue'

const isDrawerOpen = ref(true)

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

const closeDrawer = () => {
  isDrawerOpen.value = false
}
</script>
<!-- <TopMenu2 @toggle="toggleDrawer" />  -->

<template>
  <div class="flex flex-col h-screen">
    <TopMenu2 @toggle="toggleDrawer" />

    <div class="drawer lg:drawer-open flex-1">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" v-model="isDrawerOpen" />

      <div class="drawer-content">
        <div class="p-4">Page Content</div>
      </div>

      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay"></label>

        <div
          class="flex h-screen flex-col bg-base-100 transition-all duration-300 border-e border-primary/10 shrink-0"
          :class="isDrawerOpen ? 'w-96' : 'w-0'"
        >
          <ul class="menu w-full grow">
            <li>
              <button>
                <!-- <svg class="size-4"></svg> -->
                <span v-if="isDrawerOpen">Homepage</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
