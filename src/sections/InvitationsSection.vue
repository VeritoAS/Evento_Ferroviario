<script setup>
import { ref } from 'vue'
import { invitations } from '../data/event.js'

const activeVideo = ref(null)
</script>

<template>
  <section id="invitaciones" aria-labelledby="invitations-title" class="mt-16 pt-8">
    <v-container class="py-16 py-md-24">
      <p class="text-overline text-secondary mb-2 text-center">Invitaciones</p>
      <h2 id="invitations-title" class="text-h4 text-md-h3 font-weight-bold text-primary mb-8 text-center">
        Voces que impulsan el ferrocarril
      </h2>
      <v-row>
        <v-col v-for="invitation in invitations" :key="invitation.name" cols="12" md="4">
          <v-card
            rounded="lg"
            elevation="2"
            height="100%"
            role="button"
            tabindex="0"
            :aria-label="`Reproducir invitación de ${invitation.name}`"
            @click="activeVideo = invitation"
            @keydown.enter="activeVideo = invitation"
            @keydown.space.prevent="activeVideo = invitation"
          >
            <v-img :src="invitation.poster" cover height="210" :alt="`Vista previa de la invitación de ${invitation.name}`">
              <div class="d-flex align-center justify-center fill-height">
                <v-btn icon="mdi-play" color="primary" size="large" :aria-label="`Reproducir ${invitation.name}`" />
              </div>
            </v-img>
            <v-card-title class="text-primary">{{ invitation.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog :model-value="Boolean(activeVideo)" max-width="560" @update:model-value="activeVideo = null">
      <v-card v-if="activeVideo">
        <v-toolbar color="primary" :title="`Invitación de ${activeVideo.name}`">
          <v-btn icon="mdi-close" aria-label="Cerrar invitación" @click="activeVideo = null" />
        </v-toolbar>
        <video :key="activeVideo.src" autoplay muted controls playsinline class="w-100" :poster="activeVideo.poster">
          <source :src="activeVideo.src" type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>
      </v-card>
    </v-dialog>
  </section>
</template>
