<template>
  <div class="tag-selector v-padded">
    <h3 class="row-title">Topics</h3>
    <div class="link-buttons link-buttons-large">
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
.tags {
  padding: 0.3em 0;
  overflow: auto;
}
.tag {
  opacity: 0.6;
}
.tag.active {
  opacity: 1;
  cursor: disabled;
}
.tag:hover {
  opacity: 1;
}
</style>
