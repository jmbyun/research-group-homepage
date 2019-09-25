<template>
  <div class="member row-card-item">
    <div 
      class="image" 
      :style="getStyleWithImage(member.image)">
    </div>
    <div class="text">
      <div class="text-row">
        <h4 class="text-item name">{{ member.name }}</h4>
        <a class="text-item email" :href="`mailto:${member.email}`">
          {{ member.email }}
        </a>
        <div class="text-item grad">
          {{ `(${member.degree}, ${member.year})` }}
        </div>
      </div>
      <div class="description">
        <vue-markdown :source="member.description"/>
      </div>
      <div class="link-buttons link-buttons-small">
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
  padding: 1rem 1rem 1rem 6rem;
  min-height: 7em;
  color: var(--text-color);
  font-size: 0.9rem;
  overflow: auto;
}
.image {
  position: absolute;
  left: 0;
  border-radius: 1rem;
  width: 5rem;
  height: 5rem;
  background-size: cover;
}
.text-row {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
}
.text-item {
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
</style>
