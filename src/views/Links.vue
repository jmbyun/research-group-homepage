<template>
  <div class="links">
    <screen />
    <div class="row" v-for="(group, i) in links" :key="i">
      <div class="container">
        <link-group :group="group"/>
      </div>
    </div>
  </div>
</template>

<script>
import Screen from '@/components/Screen.vue'
import LinkGroup from '@/components/LinkGroup.vue'

export default {
  name: 'links',
  components: {
    Screen,
    LinkGroup
  },
  props: {
    links: Array
  },
}
</script>