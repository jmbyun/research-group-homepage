<template>
  <div class="tag-selector">
    <h3 class="title">Topics</h3>
    <div class="tags">
      <a 
        class="tag" 
        :class="{ active: value === null }"
        @click="() => $emit('input', null)"
      >
        Show All
      </a>
      <a
        class="tag" 
        v-for="tagId in Object.keys(tags)"
        :key="tagId" 
        :class="{ active: value === tagId }"
        :style="{ backgroundColor: tags[tagId].color }"
        @click="() => $emit('input', tagId)"
      >
        {{ tags[tagId].title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tag-selector',
  props: {
    tags: Object,
    value: String
  },
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
