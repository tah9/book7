<template>
  <div class="root">
    <BackBtn></BackBtn>
    <svg class="del" @click="del" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg" p-id="25374" width="32" height="32"><path d="M512 213.333333a298.666667 298.666667 0 1 1-298.666667 298.666667 298.666667 298.666667 0 0 1 298.666667-298.666667m0-85.333333a384 384 0 1 0 384 384A384 384 0 0 0 512 128z m181.12 263.253333l-60.373333-60.373333L512 451.626667l-120.746667-120.746667-60.373333 60.373333L451.626667 512l-120.746667 120.746667 60.373333 60.373333L512 572.373333l120.746667 120.746667 60.373333-60.373333L572.373333 512z" p-id="25375" ></path></svg>
    <div class="top">
      <div class="book-background" :style="'background-image: url('+$baseUrl+book.coverImg+')'"></div>
      <div class="book-mask"></div>
      <div class="book-main">
        <img class="book-img" :src="$baseUrl+book.coverImg">
        <div class="book-text">
          <div>{{ book.name }}</div>
          <div>作者:{{ book.author }}</div>
        </div>
      </div>
    </div>
    <div class="left-menu">
      <div @click="curIndex=0;getExcerpts()" :style="curIndex===0?'background:#5f5f5f':''">书摘</div>
      <div @click="curIndex=1;getReadNotes()" :style="curIndex===1?'background:#5f5f5f':''">读书笔记</div>
    </div>
    <Excerpts v-if="curIndex===0" :excerpts="excerpts"></Excerpts>
    <ReadNotes v-else :notes="notes"></ReadNotes>
  </div>
</template>

<script>
import Excerpts from "@/views/Main/Excerpts";
import BackBtn from "@/components/BackBtn";
import request from "../../../request";
import ReadNotes from "@/views/Main/ReadNotes";

export default {
  name: "BookInfo",
  props: {},
  components: {
    ReadNotes,
    BackBtn, Excerpts
  },
  data() {
    return {
      book: null,
      excerpts: null,
      curIndex: 0,
      notes: null
    }
  },
  methods: {
    del(){
      request.post('/user/deleteBook',{
        bid:this.book.bid,
        coverImg:this.book.coverImg
      }).then(res=>{
        this.$router.go(-1)
      })
    },
    getExcerpts() {
      request.post('/user/getExcerptByBookId', {
        uid: this.$getJSON('user').uid,
        bid: this.book.bid
      }).then(res => {
        this.excerpts = res.rows
        // console.log(res)
      })
    },
    getReadNotes() {
      request.post('/user/getReadingNotesByBookId', {
        uid: this.$getJSON('user').uid,
        bid: this.book.bid
      }).then(res => {
        this.notes = res.rows
        // console.log(res)
      })
    }
  },
  created() {
    this.book = this.$getJSON('book');
    this.getExcerpts()
  }
}
</script>

<style scoped>
.left-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 70vw;
  font-size: 5vw;
  width: var(--font-size);
  color: white;
}
.del{
  fill: #a3a3a3;
  position: fixed;
  z-index: 99999;
  top: 1em;
  right: 2em;
}
.left-menu > div {
  padding: 6px;
  background: #3b3b3b;
}

.left-menu > div:first-child {
  margin-bottom: var(--font-size);
}

.top {
  position: relative;
  height: 60vw;
  width: 100vw;
  overflow: hidden;
}

.book-text {
  display: flex;
  flex-direction: column;
  color: white;
}

.book-text > div:first-child {
  font-size: 5vw;
  margin-bottom: 2vw;
}

.root {
  min-height: 100vh;
  background: var(--theme-color);
}

.book-main {
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: space-evenly;
  z-index: 999;
  top: 16vw;
  left: 2em;
  right: 2em;
}

.book-img {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 4px;
  width: 25vw;
  height: 37.5vw;
  object-fit: cover;
}

.book-background {
  background-position: center;
  width: 100%;
  transform: scale(2.7);
  height: 100%;
  filter: blur(15px);
  background-repeat: no-repeat;
  background-size: contain;
}

.book-mask {
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 998;
  background: rgba(0, 0, 0, .5);
}
</style>
