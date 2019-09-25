<template>
  <div id="app">
    <app-header :scrolled="scrolled" />
    <section class="body-content">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view 
          :members="members" 
          :research="research" 
          :tags="tags" 
          :links="links"
        />
      </transition>
    </section>
    <app-footer />
  </div>
</template>

<script>
import '@/styles/default.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import * as loader from '@/helpers/loader.js'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      scrolled: false,
      members: [],
      research: [],
      tags: {},
      links: []
    }
  },
  created() {
    loader.loadMembers().then(v => (this.members = v))
    loader.loadResearch().then(v => (this.research = v))
    loader.loadTags().then(v => (this.tags = v))
    loader.loadLinks().then(v => (this.links = v))
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll() {
      const top = window.scrollY
      const threshold = 30
      if (!this.scrolled && top > threshold) {
        this.scrolled = true
      } else if (this.scrolled && top <= threshold) {
        this.scrolled = false
      }
    }
  }
}
</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>