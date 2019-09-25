<template>
  <div class="group v-padded">
    <h3 class="row-title">{{ group.title }}</h3>
    <template v-for="(member, i) in group.members" >
      <alumnus v-if="member.year" :key="i" :member="member" />
      <member v-else :key="i" :member="member" />
    </template>
  </div>
</template>

<script>
import Member from '@/components/Member.vue'
import Alumnus from '@/components/Alumnus.vue'

export default {
  name: 'MemberGroup',
  components: {
    Member,
    Alumnus
  },
  props: {
    group: Object
  }
}
</script>

