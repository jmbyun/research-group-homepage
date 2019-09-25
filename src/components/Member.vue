<template>
  <div class="row-card-item">
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
        <div class="link-buttons">
          <vue-markdown :source="member.links" :breaks="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
const BASE_URL = process.env.BASE_URL;
export default {
  name: 'Member',
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
  padding: 1rem 1rem 1rem 9.8rem;
  min-height: 12rem;
  color: var(--text-color);
  font-size: 0.9rem;
}
.image {
  position: absolute;
  left: 0;
  border-radius: 1rem;
  width: 9rem;
  height: 9rem;
  background-size: cover;
}
.name {
  margin: 0;
  padding: 0 0 0.2rem 0;
  font-size: 1rem;
  font-weight: bold;
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
  font-size: 0.85rem;
}
</style>
