<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { introVideoUrl } from '../data/event.js'

const { smAndDown } = useDisplay()
const introOpen = ref(false)
</script>

<template>
  <section id="inicio" aria-labelledby="hero-title">
    <v-parallax src="/assets/rail-hero.png" height="700">
      <v-container class="fill-height d-flex align-center">
        <v-row>
          <v-col cols="12" md="7" lg="6" :class="smAndDown ? 'bg-surface pa-5 rounded-lg' : ''">
            <p class="text-subtitle-1 text-md-h6 font-weight-bold text-primary mb-1">
              2° Congreso Ferroviario Internacional Logístico
            </p>
            <v-chip color="primary" variant="flat" size="x-large" prepend-icon="mdi-calendar-month-outline" class="mb-3 text-subtitle-1 text-md-h6 font-weight-bold">
              12 y 13 de noviembre de 2026
            </v-chip>
            <p class="text-subtitle-1 text-primary mb-4">
              <v-icon icon="mdi-map-marker" color="secondary" size="small" /> Celaya, Guanajuato
            </p>
            <h1 id="hero-title" class="text-h3 text-md-h2 font-weight-black text-primary mb-5">
              El futuro se mueve sobre <span class="text-primary">rieles</span>
            </h1>
            <div class="d-flex flex-wrap ga-3">
              <v-btn v-if="introVideoUrl" color="primary" variant="outlined" size="large" rounded="pill" class="text-none" @click="introOpen = true">
                Ver video introductorio <v-icon end icon="mdi-play-circle-outline" />
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>

    <v-dialog v-model="introOpen" max-width="900">
      <v-card v-if="introOpen">
        <v-toolbar color="primary" title="Video introductorio">
          <v-btn icon="mdi-close" aria-label="Cerrar video introductorio" @click="introOpen = false" />
        </v-toolbar>
        <video controls playsinline class="w-100">
          <source :src="introVideoUrl" type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>
      </v-card>
    </v-dialog>
  </section>
</template>
