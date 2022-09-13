<template>
  <div>
    <div class="title">智慧书房
      <svg @click="$router.push('/addBook')"
          class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12293" width="32" height="32"><path d="M508.9 926.4c-36.3-1.6-64.6-32.2-64.6-68.6V166.1c0-36.3 28.3-66.9 64.6-68.6 38.8-1.7 70.7 29.2 70.7 67.6v693.7c0 38.4-31.9 69.4-70.7 67.6z" fill="#666666" p-id="12294"></path><path d="M858.9 579.6H165.2c-37.4 0-67.6-30.3-67.6-67.6 0-37.4 30.3-67.6 67.6-67.6h693.7c37.4 0 67.6 30.3 67.6 67.6 0 37.4-30.3 67.6-67.6 67.6z" fill="#666666" p-id="12295"></path></svg>
    </div>
    <div style="margin-top: calc(1em + 16px)">
      <div class="item" v-for="item in rows" @click="bookInfo(item)">
        <img :src="$baseUrl+item.coverImg">
        <div class="item-right">
          <div>{{ item.name }}</div>
          <div>{{ item.author }}</div>
        </div>
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="24374" width="32" height="32">
          <path
              d="M303.307286 9.731785L194.095037 118.944034c-11.894403 11.894403-11.894403 32.439282 0 45.414995L541.195354 511.459345 194.095037 859.640971c-11.894403 11.894403-11.894403 32.439282 0 45.414995L303.307286 1014.268215c11.894403 11.894403 32.439282 11.894403 45.414995 0l366.563886-366.563886c1.081309-1.081309 3.243928-2.162619 4.325237-3.243928l110.293559-110.293558c6.487856-6.487856 9.731785-14.057022 9.731785-22.707498s-3.243928-16.219641-9.731785-22.707497L719.611404 379.539599c-1.081309-1.081309-2.162619-2.162619-4.325237-3.243928L348.722281 9.731785C335.746568-3.243928 316.282999-3.243928 303.307286 9.731785z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../../request";

export default {
  name: "Home",
  props: {},
  data() {
    return {
      rows: null
    }
  },
  methods: {
    bookInfo(item) {
      this.$setJSON('book', item)
      this.$router.push('/bookInfo')
    }
  },
  created() {
    if(this.$getJSON('user') === null){
      this.$router.replace('/login')
      return
    }
    request.post('/user/getBook', {
      uid: this.$getJSON("user").uid
    }).then(res => {
      this.rows = res.rows
      console.log(res)
    })
  }
}
</script>

<style scoped>
.icon{
  width: 1em;
  position: absolute;
  right: 2em;
  top: 20px;
  height: 1em;
}
.item-right {
  display: flex;
  flex-direction: column;
  margin-left: 2em;
  font-size: 1.1em;
}

.item-right > div:first-child {
  font-weight: bold;
  margin-bottom: 8px;
}

.title {
  font-weight: bold;
  padding-top: 1em;
  text-align: center;
  font-size: 1.1em;
  position: fixed;
  top: 0;
  color: var(--theme-color);
  width: 100%;
  background: white;
}

.item {

  display: flex;
  align-items: center;
  padding: 1.5em 2em 0.5em 2em;
}

.item img:first-child {
  border-radius: 3px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 5em;
  color: var(--theme-color);
  object-fit: cover;
  height: 7.5em;
}

.item svg {
  width: 1em;
  height: 1em;
  fill: #dedede;
  margin-left: auto;
}
</style>
