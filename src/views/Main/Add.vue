<template>
  <div>
    <navbar title="添加"></navbar>
    <div style="margin-left:5%;margin-top:5%;color: red;text-align: center">{{ tip }}</div>
    <van-dropdown-menu v-if="option1">
      <van-dropdown-item v-model="value1" :options="option1"/>
      <van-dropdown-item v-model="value2" :options="option2"/>
    </van-dropdown-menu>
    <AddExcerpt ref="excerpt" v-if="value2===0"></AddExcerpt>
    <AddNote ref="note" v-else></AddNote>
    <div class="btn add" @click="add()">完成</div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import request from "../../../request";
import AddExcerpt from "@/views/Main/AddExcerpt";
import AddNote from "@/views/Main/AddNote";

export default {
  name: "Add",
  components: {AddNote, AddExcerpt, Navbar},
  props: {},
  data() {
    return {
      tip:'',
      value1: null,
      value2: 0,
      option1: null,
      option2: [
        {text: '书摘', value: 0},
        {text: '读书笔记', value: 1}
      ],
    }
  },
  methods: {
    add() {
      let _this=this
      this.$nextTick(()=>{
        if (_this.value2===0){
          let content =_this.$refs.excerpt.content
          let review=_this.$refs.excerpt.review
          if (content===''||review===''){
            _this.tip='请输入完整信息'
            return
          }
          request.post('/user/insertExcerpt',{
            bid:_this.value1,
            content:content,
            review:review,
            uid:_this.$getJSON('user').uid,
            datetime:new Date().getTime()
          }).then(res=>{
            _this.$router.go(-1)
          })
        }else{
          let content =_this.$refs.note.content
          if (content===''){
            _this.tip='请输入完整信息'
            return
          }
          request.post('/user/insertNote',{
            bid:_this.value1,
            content:content,
            uid:_this.$getJSON('user').uid,
            datetime:new Date().getTime()
          }).then(res=>{
            _this.$router.go(-1)
          })
        }
      })
    }
  },
  created() {
    request.post('/user/getBook', {
      uid: this.$getJSON("user").uid
    }).then(res => {
      let result = []
      for (let item of res.rows) {
        result.push({
          text: item.name,
          value: item.bid
        })
      }
      this.value1 = result[0].value
      this.option1 = result
    })
  }
}
</script>

<style scoped>
.add {

  bottom: 5%;
  position: fixed;
}
</style>
