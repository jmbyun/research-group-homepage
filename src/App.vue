<template>
  <div id="app">
    <app-header/>
    <router-view :members="members" />
  </div>
</template>

<script>
import '@/styles/default.css'
import AppHeader from '@/components/AppHeader.vue'
import { loadMembers } from '@/helpers/loader.js'
export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      members: []
    }
  },
  created() {
    loadMembers().then(v => (this.members = v))
  }
}
</script>