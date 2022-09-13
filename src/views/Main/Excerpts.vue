<template>
  <div>
    <div class="item" @click="toInfo(item)" v-for="item in excerpts">
      <svg t="1662627883864" class="quote" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1780" width="32" height="32">
        <path
            d="M505.6 204.8c0 12.8-12.8 25.6-44.8 44.8C307.2 364.8 236.8 454.4 236.8 524.8c0 38.4 25.6 70.4 70.4 83.2 70.4 25.6 96 70.4 96 115.2 0 38.4-19.2 134.4-134.4 134.4-89.6 0-204.8-64-204.8-217.6C64 486.4 211.2 320 416 172.8 428.8 160 441.6 160 448 160c12.8 0 25.6 6.4 38.4 19.2C499.2 192 505.6 198.4 505.6 204.8zM960 204.8c0 12.8-12.8 25.6-44.8 44.8-153.6 108.8-224 204.8-224 275.2 0 38.4 25.6 70.4 70.4 83.2 70.4 25.6 96 70.4 96 115.2 0 38.4-19.2 134.4-134.4 134.4-89.6 0-204.8-64-204.8-217.6 0-160 147.2-326.4 352-473.6 12.8-12.8 25.6-12.8 38.4-12.8C928 160 960 192 960 204.8z"
            p-id="1781" fill="#ffffff"></path>
      </svg>
      <div class="content">{{ item.content }}</div>
      <div class="time">{{ $formatTime(item.datetime) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Excerpts",
  props: {
    excerpts: null
  },
  data() {
    return {}
  },
  methods: {
    toInfo(item) {
      this.$setJSON('excerpt',item)
      this.$router.replace('/excerptInfo')
    }
  },
  created() {

  }
}
</script>

<style scoped>
.item {
  border-radius: 4px;
  margin-top: 5vw;
  background: #2b2c2e;
  font-size: var(--font-size);
  line-height: 6.5vw;
  position: relative;
  padding: 10vw 5vw 5vw 10vw;
  color: white;
  margin-left: 15vw;
}

.time {
  font-size: 16px;
  text-align: end;
}

.quote {
  top: 3vw;
  left: 3vw;
  position: absolute;
  width: 6vw;
  height: 6vw;
}
</style>
