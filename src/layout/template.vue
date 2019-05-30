<template lang="pug">
  div
    header
        p Aquí es el header que estará en todas las paginas
    // BODY
    router-view
    footer
        p Aquí estara el footer que estará en todas las paginas
</template>
<script>

import Inicio from '@/components/Inicio'

export default {
  data () {
    return {}
  },
  methods: {},
  created () {
  },
  components: {
    // 'header-ti': Header,
    'inicio': Inicio
  }
}
</script>
