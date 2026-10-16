<script setup>
import { previousContact } from '../data/event.js'

const contacts = [
  { title: 'Teléfono', icon: 'mdi-phone-outline', value: previousContact.phoneDisplay, href: previousContact.phoneHref },
  { title: 'Correo', icon: 'mdi-email-outline', value: previousContact.email, href: `mailto:${previousContact.email}` },
  { title: 'Oficinas CCE Celaya', icon: 'mdi-map-marker-outline', value: previousContact.office },
]
</script>

<template>
  <section id="contacto" aria-labelledby="contact-title" class="mt-16 pt-8">
    <v-container class="py-16 py-md-24">
      <h2 id="contact-title" class="text-h4 text-md-h3 font-weight-bold text-primary mb-8 text-center">Contacto</h2>
      <v-row>
        <v-col v-for="contact in contacts" :key="contact.title" cols="12" md="4">
          <v-card border flat rounded="lg" height="100%" class="text-center pa-6">
            <v-icon :icon="contact.icon" color="secondary" size="36" class="mb-4" />
            <h3 class="text-h6 text-primary mb-3">{{ contact.title }}</h3>
            <a v-if="contact.href" :href="contact.href" class="text-body-1 text-primary">{{ contact.value }}</a>
            <p v-else class="text-body-1 text-primary mb-0">{{ contact.value }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
