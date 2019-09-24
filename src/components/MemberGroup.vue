<template>
  <div class="group">
    <h3 class="title">{{ group.title }}</h3>
    <member v-for="(member, i) in group.members" :key="i" :member="member"/>
  </div>
</template>

<script>
import Member from '@/components/Member.vue'

export default {
  name: 'MemberGroup',
  components: {
    Member
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
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--main-color);
}
</style>
