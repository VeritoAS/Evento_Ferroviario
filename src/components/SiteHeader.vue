<script setup>
import { ref } from 'vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { navigation } from '../data/event.js'

defineEmits(['buy'])
const { mdAndUp } = useDisplay()
const drawer = ref(false)
const headerBackground = ref('rgba(6, 61, 49, 0.12)')

function updateHeaderBackground() {
  const hero = document.querySelector('#inicio')
  const heroHeight = hero?.getBoundingClientRect().height ?? window.innerHeight
  const solidAt = Math.max(1, heroHeight - 88)
  const progress = Math.min(1, Math.max(0, window.scrollY / solidAt))
  const opacity = 0.12 + progress * 0.88
  headerBackground.value = `rgba(6, 61, 49, ${opacity.toFixed(3)})`
}

onMounted(() => {
  updateHeaderBackground()
  window.addEventListener('scroll', updateHeaderBackground, { passive: true })
  window.addEventListener('resize', updateHeaderBackground, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateHeaderBackground)
  window.removeEventListener('resize', updateHeaderBackground)
})
</script>

<template>
  <v-app-bar
    flat
    elevation="0"
    absolute
    height="88"
    class="position-fixed text-white"
    :style="{ backgroundColor: headerBackground, color: '#fff', borderBottom: 'none', boxShadow: 'none' }"
  >
    <v-container class="d-flex align-center py-0">
      <a href="#inicio" aria-label="Ir al inicio">
        <v-avatar size="78" image="/assets/logo-congreso.jpg" />
      </a>
      <v-spacer />
      <template v-if="mdAndUp">
        <v-btn v-for="item in navigation" :key="item.href" :href="item.href" color="white" variant="text" size="small" class="text-none mx-1">
          {{ item.label }}
        </v-btn>
        <v-btn color="secondary" variant="flat" rounded="pill" class="text-none ml-4" @click="$emit('buy')">
          Comprar boletos <v-icon end icon="mdi-arrow-top-right" />
        </v-btn>
      </template>
      <v-btn v-else color="white" icon="mdi-menu" aria-label="Abrir menú" @click="drawer = true" />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list nav>
      <v-list-item v-for="item in navigation" :key="item.href" :title="item.label" :href="item.href" @click="drawer = false" />
      <v-list-item title="Comprar boletos" prepend-icon="mdi-ticket-outline" @click="drawer = false; $emit('buy')" />
    </v-list>
  </v-navigation-drawer>
</template>
