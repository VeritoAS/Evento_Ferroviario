<script setup>
import { ticketTypes } from '../data/event.js'

defineEmits(['buy'])
</script>

<template>
  <section id="accesos" aria-labelledby="tickets-title" class="mt-16 pt-8">
    <v-sheet color="surface-variant" class="py-16 py-md-24">
      <v-container>
        <p class="text-overline text-secondary mb-2 text-center">Accesos</p>
        <h2 id="tickets-title" class="text-h4 text-md-h3 font-weight-bold text-primary mb-8 text-center">Compra tus boletos</h2>
        <v-row>
          <v-col v-for="ticket in ticketTypes" :key="ticket.name" cols="12" md="6">
            <v-card border flat rounded="lg" height="100%" class="d-flex flex-column">
              <v-sheet color="primary" class="pa-5 d-flex align-center justify-center">
                <v-icon :icon="ticket.icon" size="32" class="mr-4" />
                <h3 class="text-h5 font-weight-bold text-center">{{ ticket.name }}</h3>
              </v-sheet>
              <v-card-text class="flex-grow-1 pa-6">
                <v-row>
                  <v-col cols="12" sm="6" class="text-center">
                    <div class="text-h3 text-md-h2 font-weight-bold text-secondary">
                      {{ ticket.presale }} <span class="text-h6 text-md-h5">MXN</span>
                    </div>
                    <div class="text-body-2">preventa</div>
                  </v-col>
                  <v-col cols="12" sm="6" class="text-center">
                    <div class="text-h3 text-md-h2 font-weight-bold text-primary">
                      {{ ticket.regular }} <span class="text-h6 text-md-h5">MXN</span>
                    </div>
                    <div class="text-body-2">precio regular</div>
                  </v-col>
                </v-row>
                <v-divider class="my-5" />
                <v-list density="compact" aria-label="Beneficios incluidos">
                  <v-list-item v-for="benefit in ticket.benefits" :key="benefit" :title="benefit" prepend-icon="mdi-check" />
                </v-list>
              </v-card-text>
              <v-card-actions class="pa-6 pt-0">
                <v-btn color="secondary" variant="flat" block size="large" rounded="pill" class="text-none" @click="$emit('buy')">
                  Comprar boletos <v-icon end icon="mdi-arrow-right" />
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-alert color="surface" border="start" border-color="secondary" class="mt-6 text-center" icon="mdi-ticket-outline">
          <strong>Preventa hasta el 20 de octubre.</strong> Compra y registro a través de NexoraPro.
        </v-alert>
      </v-container>
    </v-sheet>
  </section>
</template>
