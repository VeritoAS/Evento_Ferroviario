<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { sponsorSpaces } from '../data/event.js'

const { smAndDown } = useDisplay()
const sponsorWindows = computed(() => {
  const count = smAndDown.value ? 1 : 3
  return sponsorSpaces.map((_, start) =>
    Array.from({ length: count }, (_, offset) => sponsorSpaces[(start + offset) % sponsorSpaces.length]),
  )
})
</script>

<template>
  <section id="patrocinadores" aria-labelledby="sponsors-title" class="mt-16 pt-8">
    <v-container class="py-16 py-md-20">
      <h2 id="sponsors-title" class="text-overline text-secondary text-center mb-5">Patrocinadores</h2>
      <v-carousel cycle :interval="6500" height="190" hide-delimiter-background show-arrows="hover" color="secondary" aria-label="Carrusel de patrocinadores">
        <v-carousel-item v-for="(window, index) in sponsorWindows" :key="index">
          <v-row class="ma-0" justify="center">
            <v-col v-for="space in window" :key="space.id" :cols="smAndDown ? 12 : 4">
              <v-sheet border rounded="lg" height="130" class="d-flex flex-column align-center justify-center" color="surface">
                <v-img :src="space.src" :alt="space.label" width="240" height="112" contain eager />
              </v-sheet>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </section>
</template>
