<template>
  <div class="link-item row-card-item">
    <div class="title">{{ link.title }}</div>
    <div class="subtitle" v-if="link.fullTitle">{{ link.fullTitle }}</div>
    <div class="description" v-if="link.eventMonth">
      <p v-if="link.callMonth">
        Paper submission deadline is usually in {{ link.callMonth }}.
      </p>
      <p v-if="link.eventMonth">
        The conference is usually held in {{ link.eventMonth }}.
      </p>
    </div>
    <div v-if="link.url" class="links">
      <a :href="link.url">
        Link
      </a>
    </div>
    <div v-else-if="link.query" class="links">
      <a v-if="isThisYearVisible()" :href="getThisYearQueryUrl()">
        {{ `Link (${link.title} ${(new Date()).getFullYear()})` }}
      </a>
      <a v-if="isNextYearVisible()" :href="getNextYearQueryUrl()">
        {{ `Link (${link.title} ${(new Date()).getFullYear() + 1})` }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkItem',
  props: {
    link: Object
  },
  methods: {
    getMonthNumber(month) {
      return "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(month.slice(0, 3)) / 3 + 1
    },
    isThisYearVisible() {
      if (!this.link.eventMonth) {
        return true
      }
      const currMonth = (new Date()).getMonth() + 1
      return currMonth <= this.getMonthNumber(this.link.eventMonth)
    },
    isNextYearVisible() {
      if (!this.link.eventMonth) {
        return true
      }
      const currMonth = (new Date()).getMonth() + 1
      return currMonth >= this.getMonthNumber(this.link.eventMonth) 
    },
    getThisYearQueryUrl() {
      const year = (new Date()).getFullYear()
      const queryWithYear = this.link.query.replace(/{{year}}/g, year)
      const encodedQuery = encodeURI(queryWithYear)
      return `http://www.google.com/search?q=${encodedQuery}&btnI`
    },
    getNextYearQueryUrl() {
      const year = (new Date()).getFullYear() + 1
      const queryWithYear = this.link.query.replace(/{{year}}/g, year)
      const encodedQuery = encodeURI(queryWithYear)
      return `http://www.google.com/search?q=${encodedQuery}&btnI`
    }
  }
}
</script>

<style scoped>
.link-item {
  position: relative;
  padding: 0.8rem 0;
  color: var(--text-color);
  font-size: 0.9rem;
}
.title {
  margin: 0;
  padding: 0 0 0.2rem 0;
  font-size: 1rem;
  font-weight: bold;
  color: var(--main-color);
} 
.subtitle {
  display: block;
  padding-bottom: 0.3rem;
  color: var(--text-color);
  font-style: italic;
}
.description {
  padding: 0.3rem 0;
  font-size: 0.8rem;
  color: var(--grey-color);
}
.description p {
  margin: 0;
  padding: 0.2rem 0;
}
.links {
  display: block;
  padding-top: 0.3rem;
}
.links /deep/ a {
  display: inline-block;
  padding: 0.3rem 0.5rem;
  margin-right: 0.15rem;
  border-radius: 4px;
  background-color: var(--main-color);
  color: var(--white-color);
  text-decoration: none;
  font-size: 0.7rem;
  transition: background-color 0.5s ease;
}
.links /deep/ a:hover {
  background-color: var(--link-color);
}
</style>
