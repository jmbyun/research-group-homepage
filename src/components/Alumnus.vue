<template>
  <div class="member">
    <div 
      class="image" 
      :style="getStyleWithImage(member.image)">
    </div>
    <div class="text">
      <div class="main-row">
        <h4 class="row-item name">{{ member.name }}</h4>
        <a class="row-item email" :href="`mailto:${member.email}`">
          {{ member.email }}
        </a>
        <div class="row-item grad">
          {{ `(${member.degree}, ${member.year})` }}
        </div>
      </div>
      <div class="description">
        <vue-markdown :source="member.description"/>
      </div>
      <div class="links">
        <vue-markdown :source="member.links" :breaks="false" />
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
const BASE_URL = process.env.BASE_URL;
export default {
  name: 'Alumnus',
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
  padding: 0.6rem 0 0.6rem 6rem;
  min-height: 6.2em;
  color: var(--text-color);
  font-size: 0.9rem;
}
.image {
  position: absolute;
  left: 0;
  border-radius: 1rem;
  width: 5rem;
  height: 5rem;
  background-size: cover;
}
.main-row {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
}
.row-item {
  flex: 0 0 auto;
  margin-left: 0.5rem;
}
.name {
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--main-color);
}
.email {
  display: block;
  text-decoration: none;
  color: var(--grey-color);
  font-size: 0.8rem;
}
.grad {
  display: block;
  color: var(--grey-color);
  font-size: 0.8rem;
}
.description {
  padding: 0.2rem 0;
}
.description /deep/ p {
  padding: 0;
  margin: 0.2rem 0;
  color: var(--grey-color);
  font-size: 0.8rem;
}
.links {
  display: block;
}
.links /deep/ p {
  padding: 0;
  margin: 0.2rem 0;
}
.links /deep/ a {
  display: inline-block;
  padding: 0.2rem 0.35rem;
  margin-right: 0.15rem;
  border-radius: 4px;
  /* border: 1px solid var(--button-border-color);
  font-size: 0.8rem;
  color: var(--button-color);
  text-decoration: none; */
  background-color: var(--main-color);
  color: var(--white-color);
  text-decoration: none;
  font-size: 0.7em;
  transition: background-color 0.5s ease;
}
.links /deep/ a:hover {
  background-color: var(--link-color);
}
</style>
