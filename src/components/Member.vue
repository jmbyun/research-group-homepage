<template>
  <div class="member">
    <div 
      class="image" 
      :style="getStyleWithImage(member.image)">
    </div>
    <div class="text">
      <h4 class="name">{{ member.name }}</h4>
      <a class="email" :href="`mailto:${member.email}`">
        {{ member.email }}
      </a>
      <div class="description">
        <vue-markdown :source="member.description"/>
      </div>
      <div class="links member-links">
        <vue-markdown :source="member.links" :breaks="false" />
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
const BASE_URL = process.env.BASE_URL;
export default {
  name: 'MemberGroup',
  components: {
    VueMarkdown
  },
  props: {
    member: Object
  },
  data() {
    return {
      baseUrl: BASE_URL
    }
  },
  methods: {
    sanitizeUrl(url) {
      return url.replace('@/', this.baseUrl);
    },
    getStyleWithImage(url) {
      return { backgroundImage: `url("${this.sanitizeUrl(url)}")` }
    }
  }
}
</script>

<style scoped>
.member {
  position: relative;
  padding: 0.8rem 0 0.8rem 11rem;
  min-height: 12rem;
  color: var(--text-color);
  font-size: 0.9rem;
}
.image {
  position: absolute;
  left: 0;
  border-radius: 1rem;
  width: 10rem;
  height: 10rem;
  background-size: cover;
}
.name {
  margin: 0;
  padding: 0 0 0.2rem 0;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--main-color);
}
.email {
  display: block;
  padding-bottom: 0.3rem;
  text-decoration: none;
  color: var(--text-color);
}
.description {
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.links {
  display: block;
}
</style>

<style>
.links a {
  display: inline-block;
  padding: 0.3rem 0.5rem;
  margin-right: 0.15rem;
  border-radius: 4px;
  /* border: 1px solid var(--button-border-color);
  font-size: 0.8rem;
  color: var(--button-color);
  text-decoration: none; */
  background-color: var(--main-color);
  color: var(--white-color);
  text-decoration: none;
  font-size: 0.7rem;
}
.links a:hover {
  background-color: var(--link-color);
}
</style>
