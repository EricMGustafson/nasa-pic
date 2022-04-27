<template>
  <div class="home container-fluid p-4" v-for="p in picture" :key="p.date">
    <NasaPic :picture="p" />
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import { onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import { nasaService } from '../services/NasasService.js'
export default {
  setup(){
    onMounted(() => {
      try {
        nasaService.search()
      } catch (error) {
        logger.error('error')
      }
    })
    return {
      picture: computed(() => AppState.picture)
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  height: 500px;
  width: auto;
  object-fit: cover;
}
</style>