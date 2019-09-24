<template>
  <div class="research-item" :class="{ hidden: isHidden() }">
    <div class="title-row">
      <h4 class="title">{{ item.title }}</h4>
      <template v-for="tagId in item.tags">
        <div 
          class="tag"
          v-if="tagId in tags"
          :key="tagId"
          :style="{ backgroundColor: tags[tagId].color }"
        >
          {{ tags[tagId].tag }}
        </div>
      </template>
    </div>
    <div class="authors">{{ item.authors }}</div>
    <div class="booktitle">{{ item.booktitle }}</div>
    <div class="links member-links">
      <vue-markdown :source="sanitizeUrls(item.links)" :breaks="false" />
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
const BASE_URL = process.env.BASE_URL;
export default {
  name: 'research-item',
  components: {
    VueMarkdown
  },
  props: {
    item: Object,
    tags: Object,
    activeTagId: String
  },
  data() {
    return {
      baseUrl: BASE_URL
    }
  },
  methods: {
    isHidden() {
      return (this.activeTagId !== null) && !this.item.tags.includes(this.activeTagId)
    },
    sanitizeUrls(text) {
      if (!text) {
        return ''
      }
      return text.replace(/@\//g, this.baseUrl)
    },
  }
}
</script>

<style scoped>
.research-item {
  padding: 0.3em 0;
  color: var(--text-color);
  max-height: 13rem;
  transition: max-height 2s ease;
}
.research-item.hidden {
  max-height: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.title-row {
  margin: 0;
  padding: 0 0 0.3rem 0;
  overflow: auto;
}
.title {
  display: block;
  float: left;
  margin: 0 0.3rem 0 0;
  font-size: 1rem;
  line-height: 1.1rem;
  font-weight: bold;
}
.tag {
  display: block;
  float: left;
  padding: 0 0.2rem;
  margin-right: 0.3rem;
  background-color: var(--grey-color);
  border-radius: 4px;
  color: var(--white-color);
  line-height: 1.1rem;
  height: 1.1rem;
  font-size: 0.7rem;
  font-weight: bold;
}
.authors {
  padding: 0;
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--grey-color);
}
.booktitle {
  padding: 0;
  font-size: 0.8rem;
  font-weight: normal;
  font-style: italic;
  color: var(--grey-color);
}
.links {
  display: block;
  padding: 0.3rem 0;
}
.links /deep/ p {
  padding: 0;
  margin: 0;
}
.links /deep/ a {
  display: inline-block;
  padding: 0.2rem 0.3rem;
  margin-right: 0.1rem;
  border-radius: 4px;
  background-color: var(--main-color);
  color: var(--white-color);
  text-decoration: none;
  font-size: 0.7rem;
  transition: background-color 0.5s ease;
}
.links /deep/ a:hover {
  background-color: var(--link-color);
}
</style>