<template>
  <div class="category v-padded">
    <h3 class="row-title">{{ category.title }}</h3>
    <template v-for="(item, i) in category.items" >
      <research-item :key="i" :item="item" :tags="tags" :activeTagId="activeTagId" />
    </template>
  </div>
</template>

<script>
import ResearchItem from '@/components/ResearchItem.vue'

export default {
  name: 'research-category',
  components: {
    ResearchItem
  },
  props: {
    category: Object,
    tags: Object,
    activeTagId: String
  },
  data() {
    return {

    }
  }
}
</script>
