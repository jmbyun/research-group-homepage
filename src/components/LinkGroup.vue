<template>
  <div class="group v-padded">
    <h3 class="row-title">{{ group.category }}</h3>
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