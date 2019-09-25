<template>
  <div id="app">
    <div v-if="loading" class="spinner-container">
      <spinner />
    </div>
    <app-header :scrolled="scrolled" :loading="loading" />
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
import Spinner from '@/components/Spinner.vue'
import * as loader from '@/helpers/loader.js'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Spinner
  },
  data() {
    return {
      scrolled: false,
      loading: false,
      members: [],
      research: [],
      tags: {},
      links: []
    }
  },
  created() {
    this.loadSheets()
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    async loadSheets() {
      let doneCount = 0
      const done = () => {
        doneCount++
        if (doneCount === 3) {
          this.loading = false
        }
      }
      this.loading = true
      this.research = await loader.loadResearch()
      loader.loadTags().then(v => {
        this.tags = v
        done()
      })
      loader.loadMembers().then(v => {
        this.members = v
        done()
      })
      loader.loadLinks().then(v => {
        this.links = v
        done()
      })
    },
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