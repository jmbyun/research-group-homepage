<template>
  <div class="members">
    <screen>
      Hello world
    </screen>
    <div class="row">
      <div class="container">
        <member-group v-for="(group, i) in members" :key="i" :group="group"/>
      </div>
    </div>
  </div>
</template>

<script>
import Screen from '@/components/Screen.vue'
import MemberGroup from '@/components/MemberGroup.vue'

export default {
  name: 'members',
  components: {
    Screen,
    MemberGroup
  },
  props: {
    members: Array
  },
}
</script>
