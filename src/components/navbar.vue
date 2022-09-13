<template>
  <div class="navbar">
    <div class="left" @click="leftClick" :style="left?'':'display:none'">
      <svg t="1662900854086" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2377" width="32" height="32"><path d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z" p-id="2378"></path></svg>
      <!--<span>返回</span>-->
    </div>
    <div class="center">{{ title }}</div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>      

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  props: {
    left: {
      default: true
    },
    title: ''
  },
  components: {},
  methods: {
    leftClick() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.navbar {
  position: sticky;
  background: #ffffff;
  color: #3b3b3b;
  z-index: 100;
  top: 0;
  height: 48px;
  line-height: 48px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
}
.icon{
  fill: #3b3b3b;
  width: 1em;
  height: 1em;
}
.right {
  right: 16px;
  top: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.center {
  top: 0;
  bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
}

.left {
  left: 16px;
  top: 0;
  bottom: 0;
  z-index: 101;
  position: absolute;
  display: flex;
  align-items: center;
  color: white;
}

img {
  width: 1.3em;
  height: 1.3em;
}
</style>
