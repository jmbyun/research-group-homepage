<template>
  <div class="members">
    <screen>
      <h2>Members</h2>
    </screen>
    <div class="row" v-for="(group, i) in members" :key="i">
      <div class="container">
        <member-group :group="group"/>
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
