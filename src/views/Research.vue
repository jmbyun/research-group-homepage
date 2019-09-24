<template>
  <div class="research">
    <screen>
      <h2>Research</h2>
    </screen>
    <div class="row" v-for="(category, i) in research" :key="i">
      <div class="container">
        <research-category :category="category" :tags="tags" />
      </div>
    </div>
  </div>
</template>

<script>
import Screen from '@/components/Screen.vue'
import ResearchCategory from '@/components/ResearchCategory.vue'

export default {
  name: 'research',
  components: {
    Screen,
    ResearchCategory
  },
  props: {
    research: Array,
    tags: Object,
  },
}
</script>
