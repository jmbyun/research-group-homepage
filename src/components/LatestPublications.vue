<template>
  <div class="main">
    <h3 class="title">Latest Publications</h3>
    <template v-if="research.length > 0">
      <research-item 
        v-for="(item, i) in research[0].items.slice(0, listSize)" 
        :key="i" 
        :item="item" 
        :tags="tags" 
        :activeTagId="null" 
      />
    </template>
    <div class="links">
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
.main {
  padding: 1.5rem 0;
}
.title {
  margin: 0;
  padding: 0 0 2rem 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--main-color);
}
.links {
  padding: 2rem 0;
}
.more-button {
  padding: 0.4rem 0.6rem;
  margin-right: 0.3rem;
  background-color: var(--main-color);
  border-radius: 4px;
  color: var(--white-color);
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.5s ease;
  text-decoration: none;
}
.more-button:hover {
  background-color: var(--link-color);
}
</style>