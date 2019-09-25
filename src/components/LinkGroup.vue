<template>
  <div class="group">
    <h3 class="title">{{ group.category }}</h3>
    <template v-for="(link, i) in group.links" >
      <link-item :key="i" :link="link" />
    </template>
  </div>
</template>

<script>
import LinkItem from '@/components/LinkItem.vue'

export default {
  name: 'LinkGroup',
  components: {
    LinkItem
  },
  props: {
    group: Object
  }
}
</script>

<style scoped>
.group {
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
