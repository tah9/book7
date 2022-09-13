<template>
  <div class="root">
    <navbar title="书摘详情"></navbar>
    <div class="main">
      <div class="top">
        “{{ excerpt.content }}”
      </div>
      <div class="divider">
        <div class="left-round"></div>
        <div class="right-round"></div>
      </div>
      <div class="bottom">
        {{ excerpt.review }}
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";

export default {
  name: "ExcerptInfo",
  components: {Navbar},
  props: {},
  data() {
    return {
      excerpt: null
    }
  },
  methods: {},
  created() {
    this.excerpt = this.$getJSON('excerpt')
  }
}
</script>

<style scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--theme-color);
  min-height: 100vh;
}

.main {
  margin-top: 48px;
  color: black;
  padding: 5vw;
}

.top {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 5vw;
  background: white;
}

.bottom {
  padding: 5vw;
  color: #a3a3a3;
  background: white;
}

.divider {
  position: relative;
  border-bottom: 1px dashed #ebebeb;
  display: flex;
  justify-content: space-between;
}

.left-round {
  position: absolute;
  background: black;
  width: 3vw;
  left: -1.5vw;
  top: -1.5vw;
  height: 3vw;
  border-top-right-radius: 99px;
  border-bottom-right-radius: 99px;
}
.right-round {
  position: absolute;
  background: black;
  width: 3vw;
  right: -1.5vw;
  top: -1.5vw;
  height: 3vw;
  border-top-left-radius: 99px;
  border-bottom-left-radius: 99px;
}
</style>
