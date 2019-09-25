<template>
  <div class="research">
    <screen />
    <div class="row">
      <div class="container">
        <tag-selector :tags="tags" v-model="activeTagId" />
      </div>
    </div>
    <div class="row" v-for="(category, i) in research" :key="i">
      <div class="container">
        <research-category 
          :category="category" 
          :tags="tags" 
          :activeTagId="activeTagId"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Screen from '@/components/Screen.vue'
import ResearchCategory from '@/components/ResearchCategory.vue'
import TagSelector from '@/components/TagSelector.vue'

export default {
  name: 'research',
  components: {
    Screen,
    ResearchCategory,
    TagSelector
  },
  props: {
    research: Array,
    tags: Object,
  },
  data() {
    return {
      activeTagId: null
    }
  }
}
</script>

