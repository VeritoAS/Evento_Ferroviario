<script setup>
import { ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import HomeSection from './sections/HomeSection.vue'
import SponsorsSection from './sections/SponsorsSection.vue'
import AboutSection from './sections/AboutSection.vue'
import InvitationsSection from './sections/InvitationsSection.vue'
import ProgramSection from './sections/ProgramSection.vue'
import TicketsSection from './sections/TicketsSection.vue'
import ContactSection from './sections/ContactSection.vue'
import { ticketUrl } from './data/event.js'

const ticketNotice = ref(false)

function buyTickets() {
  try {
    const url = new URL(ticketUrl)
    if (url.protocol === 'https:') {
      window.location.assign(url.href)
      return
    }
  } catch {
    // La URL de NexoraPro aún no está disponible.
  }
  ticketNotice.value = true
}
</script>

<template>
  <v-app>
    <SiteHeader @buy="buyTickets" />
    <v-main class="pt-0">
      <HomeSection @buy="buyTickets" />
      <TicketsSection @buy="buyTickets" />
      <AboutSection />
      <InvitationsSection />
      <ProgramSection />
      <SponsorsSection />
      <ContactSection />
    </v-main>
    <SiteFooter />

    <v-snackbar v-model="ticketNotice" color="primary" timeout="5000">
      El enlace de compra en NexoraPro estará disponible próximamente.
      <template #actions>
        <v-btn variant="text" @click="ticketNotice = false">Cerrar</v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>
