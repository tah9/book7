<template>
  <div>
    <navbar title="读书笔记">
      <svg class="del" @click="del" viewBox="0 0 1024 1024" fill="#666666"   xmlns="http://www.w3.org/2000/svg" p-id="25374" width="32" height="32"><path d="M512 213.333333a298.666667 298.666667 0 1 1-298.666667 298.666667 298.666667 298.666667 0 0 1 298.666667-298.666667m0-85.333333a384 384 0 1 0 384 384A384 384 0 0 0 512 128z m181.12 263.253333l-60.373333-60.373333L512 451.626667l-120.746667-120.746667-60.373333 60.373333L451.626667 512l-120.746667 120.746667 60.373333 60.373333L512 572.373333l120.746667 120.746667 60.373333-60.373333L572.373333 512z" p-id="25375" ></path></svg>

    </navbar>
    <div class="main">
      <div class="name">{{ note.name }}</div>
      <div class="tip">文/&nbsp;{{ $getJSON('user').username }}</div>
      <div class="content">{{ note.content }}</div>
      <div class="time">{{ $formatTime(note.datetime) }}</div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import request from "../../../request";

export default {
  name: "NoteInfo",
  components: {Navbar},
  props: {},
  data() {
    return {
      note: null
    }
  },
  methods: {
    del(){
      request.post('/user/deleteNote',{
        id:this.note.id
      }).then(()=>{
        this.$router.go(-1)
      })
    }
  },
  created() {
    this.note = this.$getJSON('note');
    console.log(this.note)
  }
}
</script>

<style scoped>
.main {
  box-sizing: border-box;
  padding: 8vw;
}

.name {
  font-size: 1.1em;
}

.tip {
  color: #515151;
  font-size: 14px;
  margin: 5vw 0;
}

.time {
  font-size: 14px;
  margin: 5vw 0;
  color: #515151;
}

.content {
  line-height: 2em;
}
</style>
