<template>
  <div class="main v-padded">
    <h3 class="row-title">Latest Publications</h3>
    <template v-if="research.length > 0">
      <research-item 
        v-for="(item, i) in research[0].items.slice(0, listSize)" 
        :key="i" 
        :item="item" 
        :tags="tags" 
        :activeTagId="null" 
      />
    </template>
    <div class="link-buttons link-buttons-large">
      <router-link class="more-button" to="/research">See All</router-link>
    </div>
  </div>
</template>

<script>
import ResearchItem from '@/components/ResearchItem.vue'

const LIST_SIZE = 7

export default {
  name: 'research-category',
  components: {
    ResearchItem
  },
  props: {
    research: Array,
    tags: Object
  },
  data() {
    return {
      listSize: LIST_SIZE
    }
  }
}
</script>

<style scoped>
.link-buttons {
  padding-top: 2.5rem;
}
</style>