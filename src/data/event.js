// Completar este enlace cuando NexoraPro entregue la página de compra.
export const ticketUrl = 'https://nexorapro.mx/eventos/Mg=='
// Se mostrará como botón que abre un diálogo, sin reproducción automática.
export const introVideoUrl = ''

export const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Boletos', href: '#accesos' },
  { label: 'Innovación', href: '#congreso' },
  { label: 'Invitaciones', href: '#invitaciones' },
  { label: 'Programa', href: '#programa' },
  { label: 'Patrocinadores', href: '#patrocinadores' },
  { label: 'Contacto', href: '#contacto' },
]

export const sponsorSpaces = [
  { id: 'cce-celaya', label: 'Consejo Coordinador Empresarial de Celaya', src: '/assets/sponsor-cce-celaya.png' },
  { id: 'tecnm-celaya', label: 'Tecnológico Nacional de México · Celaya', src: '/assets/sponsor-tecnm-celaya.png' },
  { id: 'corporativo-sr', label: 'Corporativo SR', src: '/assets/sponsor-corporativo-sr.png' },
  { id: 'sabes', label: 'Universidad SABES', src: '/assets/sponsor-sabes.png' },
]

export const invitations = [
  { name: 'Ernesto Lugo', src: '/videos/invitacion-ernesto-lugo.mp4', poster: '/assets/rail-tracks.png' },
  { name: 'Jorge Gámez', src: '/videos/invitacion-jorge-gamez.mp4', poster: '/assets/canva-tren-aereo.jpg' },
  { name: 'Jorge y Ernesto', src: '/videos/invitacion-jorge-y-ernesto.mp4', poster: '/assets/canva-locomotora.jpg' },
]

export const ticketTypes = [
  {
    name: 'Empresarios',
    icon: 'mdi-briefcase-outline',
    presale: '$850',
    regular: '$1,000',
    benefits: ['Todas las conferencias', 'Kit de bienvenida', 'Cena de cierre'],
  },
  {
    name: 'Estudiantes',
    icon: 'mdi-school-outline',
    presale: '$200',
    regular: '$300',
    benefits: ['Acceso a las conferencias', 'Kit de bienvenida'],
  },
]

// Estos datos aparecen en la web de la primera edición; confirmar vigencia.
export const previousContact = {
  phoneDisplay: '+52 461 206 1503',
  phoneHref: 'tel:+524612061503',
  email: 'congresoferroviario@ccecelaya.org',
  office: 'Av. Ignacio Borunda 110, Fovissste, 38010 Celaya, Gto.',
}
