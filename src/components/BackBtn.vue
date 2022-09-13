<template>
  <div class="back" @click="$router.go(-1)">
    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1721" width="32" height="32"><path d="M393.390114 512.023536l347.948667-336.348468c20.50808-19.85828 20.50808-51.997258 0-71.792093-20.507056-19.826558-53.778834-19.826558-74.28589 0L281.990954 476.135164c-20.476357 19.826558-20.476357 51.981908 0 71.746044l385.061936 372.236839c10.285251 9.91379 23.728424 14.869662 37.173644 14.869662 13.446243 0 26.889417-4.956895 37.112246-14.901385 20.50808-19.826558 20.50808-51.919487 0-71.746044L393.390114 512.023536" p-id="1722"></path></svg>
  </div>
</template>

<script>
export default {
  name: "BackBtn"
}
</script>

<style scoped>
.icon{
  fill: white;
}
.back {
  position: fixed;
  top: 1em;
  left: 2em;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
}
.back svg{
  width: 1.5em;
  height: 1.5em;
}
</style>
