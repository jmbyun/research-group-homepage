<template>
  <div class="home">
    <screen backgroundSrc="@/images/backgrounds/cs_night.jpg">
      <h2>Contact</h2><br />
      <small>Users &amp; Information Lab. @ KAIST</small>
    </screen>
    <div class="row">
      <div class="container">
        <div class="contact v-padded">
          <h3 class="row-title">Address</h3>
          <div class="text">
            U&I Lab., Room 4417, E3-1 Computer Science Building,<br />
            KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, South Korea
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="container">
        <div class="contact v-padded">
          <h3 class="row-title">Map</h3>
          <iframe 
            class="map-iframe" 
            src="https://www.google.com/maps/embed?region=KR&language=en&pb=!1m18!1m12!1m3!1d803.1790312985661!2d127.36539104087727!3d36.36765437275756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDIyJzA1LjAiTiAxMjfCsDIxJzU2LjEiRQ!5e0!3m2!1sen!2skr!4v1569390740572!5m2!1sen!2skr" 
            frameborder="0" 
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Screen from '@/components/Screen.vue'

export default {
  name: 'contact',
  components: {
    Screen,
  }
}
</script>

<style scoped>
.text {
  padding: 0.3rem 0;
  font-size: 1rem;
  color: var(--text-color);
}
.map-iframe {
  width: 100%;
  max-width: 50rem;
  height: 25rem;
  border: 0;
}
</style>