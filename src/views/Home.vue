<template>
  <div class="home">
    <screen size="large" backgroundSrc="@/images/backgrounds/cs_building_night.jpg">
      <h1>Users &amp; Information Lab. @ KAIST</h1><br />
      <small>Artificial Intelligence | Social Computing | Interactive Computing</small>
    </screen>
    <div class="row">
      <div class="container">
        <latest-publications :research="research" :tags="tags" />
      </div>
    </div>
  </div>
</template>

<script>
import Screen from '@/components/Screen.vue'
import LatestPublications from '@/components/LatestPublications.vue'

export default {
  name: 'home',
  components: {
    Screen,
    LatestPublications
  },
  props: {
    research: Array,
    tags: Object
  }
}
</script>
