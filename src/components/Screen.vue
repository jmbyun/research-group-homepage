<template>
  <section class="screen" :class="{ 'screen-large': size === 'large' }">
    <div class="content">
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    size: String,
  },
}
</script>

<style scoped>
.screen {
  padding: 8rem 1rem 4rem 1rem;
  background-image: linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),
        url("../assets/kaist.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 120;
}
.screen-large {
  padding: 9.5rem 1rem 5.5rem 1rem;
}
.content {
  margin: 0 auto;
  max-width: var(--max-width);
  color: var(--header-text-highlight-color);
  text-align: center;
}
.content /deep/ h1 {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  font-weight: bold;
}
.content /deep/ h2 {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  font-weight: bold;
}
.content /deep/ small {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  font-weight: normal;
}
</style>
