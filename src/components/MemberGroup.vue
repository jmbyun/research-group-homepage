<template>
  <div class="group">
    <h3 class="title">{{ group.title }}</h3>
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
