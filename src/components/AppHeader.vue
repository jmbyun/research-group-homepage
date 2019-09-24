<template>
  <header 
    class="header" 
    :class="{ 'header-scrolled': scrolled  }"
  >
    <div class="content">
      <div class="logo">
        <div class="logo-text">USERS &amp;<br />INFORMATION</div>
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
        <router-link class="menu-item" to="/research">
          Links
        </router-link>
        <router-link class="menu-item" to="/research">
          Contact
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    scrolled: Boolean,
  },
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  margin: 0;
  padding: 0;
  z-index: 999;
  transition: height 1s ease, background-color 1s ease;
}
.header-scrolled {
  height: 3.75rem;
  background-color: var(--header-scrolled-bg-color);
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
  height: 100%;
  max-width: var(--max-width);
  border-bottom: 1px solid var(--header-border-color);
}
.header-scrolled .content {
  border-bottom=color: var(--grey-color);
}
.logo {
  flex: 0 0 auto;
}
.logo-text {
  display: block;
  padding: 0 0.5rem;
  font-size: 1.1rem;
  line-height: 1.2em;
  font-weight: bold;
  color: var(--white-color);
  transition: color 1s ease;
}
.header-scrolled .logo-text {
  color: var(--text-color);
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
  transition: color 1s ease;
}
.header-scrolled .menu-item {
  color: var(--grey-color);
}
.menu-item:hover {
  color: var(--header-text-highlight-color);
}
.header-scrolled .menu-item:hover {
  color: var(--text-color);
}

</style>
