<template>
  <div class="research">
    <screen>
      <h2>Research</h2>
    </screen>
    <div class="row">
      <div class="container">
        <div class="tag-selector">
          <h3 class="title">Topics</h3>
          <div class="tags">
            <a 
              class="tag" 
              :class="{ active: activeTagId === null }"
              @click="() => setActiveTagId(null)"
            >
              Show All
            </a>
            <a
              class="tag" 
              v-for="tagId in Object.keys(tags)"
              :key="tagId" 
              :class="{ active: activeTagId === tagId }"
              :style="{ backgroundColor: tags[tagId].color }"
              @click="() => setActiveTagId(tagId)"
            >
              {{ tags[tagId].title }}
            </a>
          </div>
        </div>
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
  data() {
    return {
      activeTagId: null
    }
  },
  methods: {
    setActiveTagId(tagId) {
      this.activeTagId = tagId
    }
  }
}
</script>

<style scoped>
.tag-selector {
  padding: 1.5rem 0;
}
.title {
  margin: 0;
  padding: 0 0 2rem 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--main-color);
}
.tags {
  padding: 0.3em 0;
  overflow: auto;
}
.tag {
  display: inline-block;
  padding: 0.4rem 0.6rem;
  margin-right: 0.3rem;
  background-color: var(--main-color);
  border-radius: 4px;
  color: var(--white-color);
  font-size: 0.8rem;
  font-weight: bold;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.5s ease;
}
.tag.active {
  opacity: 1;
  cursor: disabled;
}
.tag:hover {
  opacity: 1;
}
</style>
