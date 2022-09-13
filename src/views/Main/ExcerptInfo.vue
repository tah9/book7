<template>
  <div class="root">
    <navbar title="书摘详情">
      <svg class="del" @click="del" viewBox="0 0 1024 1024" fill="#666666"   xmlns="http://www.w3.org/2000/svg" p-id="25374" width="32" height="32"><path d="M512 213.333333a298.666667 298.666667 0 1 1-298.666667 298.666667 298.666667 298.666667 0 0 1 298.666667-298.666667m0-85.333333a384 384 0 1 0 384 384A384 384 0 0 0 512 128z m181.12 263.253333l-60.373333-60.373333L512 451.626667l-120.746667-120.746667-60.373333 60.373333L451.626667 512l-120.746667 120.746667 60.373333 60.373333L512 572.373333l120.746667 120.746667 60.373333-60.373333L572.373333 512z" p-id="25375" ></path></svg>

    </navbar>
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
import request from "../../../request";

export default {
  name: "ExcerptInfo",
  components: {Navbar},
  props: {},
  data() {
    return {
      excerpt: null
    }
  },
  methods: {
    del(){
      request.post('/user/deleteExcerpt',{
        eid:this.excerpt.eid
      }).then(res=>{
        this.$router.go(-1)
      })
    }
  },
  created() {
    this.excerpt = this.$getJSON('excerpt')
  }
}
</script>

<style scoped>
.root {
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
