<template>
  <div style="display: flex;flex-direction: column;height: 100vh">
    <navbar title="添加一本书"></navbar>
    <div style="margin-left:5%;color: red;">{{ tip }}</div>
    <div class="top">
      <div class="upPic">
        <input type="file" accept="image/*" ref="file" @change="selectImg"/>
        <img ref="img">
      </div>
    </div>
    <div style="background: #f0f0f0;height: 3vw"></div>
    <div class="center">
      <div class="cell">
        <div>书名</div>
        <input placeholder="书名" type="text" v-model="name">
      </div>
      <div class="cell">
        <div>作者</div>
        <input placeholder="作者" type="text" v-model="author">
      </div>
    </div>
    <div style="background: #f0f0f0;height: 5vw"></div>
    <div style="flex: 1;background: #f0f0f0;">
      <div class="btn" style="margin-top: 15vw" @click="insertBook">添加到书架</div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import request from "../../../request";

export default {
  name: "AddBook",
  components: {Navbar},
  props: {},
  data() {
    return {
      url:'',
      name:'',
      author:'',
      tip:''
    }
  },
  methods: {
    selectImg() {
      let _this = this
      this.$nextTick(() => {
        let imgFile = _this.$refs.file.files[0];//取到上传的图片
        let base = window.webkitURL.createObjectURL(imgFile);
        let formData=new FormData()
        formData.append('file',imgFile)
        request.post('/public/upPic',formData).then(res=>{
          _this.url=res.urls
          console.log(_this.url)
          _this.$refs.img.src =this.$baseUrl+res.urls


        })
      })
    },
    insertBook(){
      if (this.name===''||this.author===''||this.url===''){
        this.tip='请输入完整信息或选择图片'
        return
      }
      request.post('/user/insertBook',{
        uid:this.$getJSON('user').uid,
        name: this.name,
        author: this.author,
        coverImg: this.url,
        updateTime: new Date().getTime()
      }).then(res=>{
        console.log(res)
        this.$router.go(-1)
      })
    }
  },
  created() {

  }
}
</script>

<style scoped>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vw;
}

.upPic input {
  opacity: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  position: absolute;
}
.upPic>img{
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  object-fit: cover !important;
}
.upPic {
  border-radius: 3px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  position: relative;
  width: 25vw;
  height: 37.5vw;
}
.cell{
  display: flex;
  padding: 3vw;
  border-bottom: 1px solid #f0f0f0;
}
.cell>div{
  margin-right: 3vw;
}
.cell input{
  padding-left: 2vw;
}
</style>
