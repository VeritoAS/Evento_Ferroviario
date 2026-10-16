<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <v-footer color="primary" class="py-7">
    <v-container class="text-center">
      <a href="https://www.gruporac.com.mx/" target="_blank" rel="noopener noreferrer" class="text-body-2 text-white">
        © {{ year }} Grupo RAC. Todos los derechos reservados.
      </a>
    </v-container>
  </v-footer>
</template>
