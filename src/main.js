import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import {
  VAlert,
  VApp,
  VAppBar,
  VAvatar,
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VCarousel,
  VCarouselItem,
  VCol,
  VContainer,
  VDialog,
  VDivider,
  VFooter,
  VIcon,
  VImg,
  VList,
  VListItem,
  VMain,
  VNavigationDrawer,
  VParallax,
  VRow,
  VSheet,
  VSnackbar,
  VSpacer,
  VToolbar,
} from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'

const vuetify = createVuetify({
  components: {
    VAlert,
    VApp,
    VAppBar,
    VAvatar,
    VBtn,
    VCard,
    VCardActions,
    VCardText,
    VCardTitle,
    VCarousel,
    VCarouselItem,
    VCol,
    VContainer,
    VDialog,
    VDivider,
    VFooter,
    VIcon,
    VImg,
    VList,
    VListItem,
    VMain,
    VNavigationDrawer,
    VParallax,
    VRow,
    VSheet,
    VSnackbar,
    VSpacer,
    VToolbar,
  },
  directives,
  theme: {
    defaultTheme: 'congreso',
    themes: {
      congreso: {
        dark: false,
        colors: {
          primary: '#063D31',
          secondary: '#BD9354',
          background: '#FAF9F5',
          surface: '#FFFFFF',
          'surface-variant': '#F0EEE8',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
