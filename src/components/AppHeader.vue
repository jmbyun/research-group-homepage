<template>
  <header 
    class="header" 
    :class="{ 'header-float': float  }"
  >
    <div class="content">
      <div class="logo">
        <img class="logo-image" src="../assets/uilab-title-white.png"/>
      </div>
      <div class="menu">
        <router-link class="menu-item" to="/">
          Home
        </router-link>
        <router-link class="menu-item" to="/members">
          Members
        </router-link>
        <router-link class="menu-item" to="/research">
          Research
        </router-link>
      </div>
    </div>
  </header>
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
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
}
.header-float {
  height: 3.75rem;
}
.content {
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: transparent;
  width: 100%;
  height: 5rem;
  max-width: var(--max-width);
  border-bottom: 1px solid var(--header-border-color);
}
.logo {
  flex: 0 0 auto;
}
.logo-image {
  height: 2.5rem;
  width: auto;
}
.menu {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.menu-item {
  padding: 1rem 1rem;
  text-decoration: none;
  color: var(--header-text-color);
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.menu-item:hover {
  color: var(--header-text-highlight-color);
}

</style>
