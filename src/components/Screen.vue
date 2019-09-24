<template>
  <section class="screen">
    <div class="content">
        <slot/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    float: Boolean,
  },
}
</script>

<style scoped>
.screen {
  padding: 9rem;
  background-image: linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),
        url("../assets/kaist.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  max-width: var(--max-width);
}
</style>
