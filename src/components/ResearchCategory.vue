<template>
  <div class="category">
    <h3 class="title">{{ category.title }}</h3>
    <template v-for="(item, i) in category.items" >
      <research-item :key="i" :item="item" :tags="tags" />
    </template>
  </div>
</template>

<script>
import Screen from '@/components/Screen.vue'
import ResearchItem from '@/components/ResearchItem.vue'

export default {
  name: 'research-category',
  components: {
    Screen,
    ResearchItem
  },
  props: {
    category: Object,
    tags: Object
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.category {
  padding: 1.5rem 0;
}
.title {
  margin: 0;
  padding: 0 0 2rem 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--main-color);
}
</style>