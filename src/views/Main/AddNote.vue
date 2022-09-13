<template>
  <div style="margin-bottom: 8%">
    <div style="margin-left:5%;margin-top:5%;color: red;text-align: center">{{ tip }}</div>
    <div class="cell">
      <div class="tip">
        <div>笔记</div>
        <svg t="1663035218940" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="9647" width="32" height="32">
          <path
              d="M551.573333 339.584a42.666667 42.666667 0 0 0-79.146666 0L342.506667 661.333333h92.010666L512 469.504 589.461333 661.333333h92.032l-129.92-321.749333zM662.336 768h-1.962667 1.962667z m-298.709333 0h-1.962667 1.962667z"
              fill="#0078FF" p-id="9648"></path>
          <path d="M618.666667 618.666667H405.333333v-85.333334h213.333334v85.333334z" fill="#0078FF"
                p-id="9649"></path>
          <path
              d="M128 170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h170.666666v85.333333h-128v128H128V170.666667zM128 853.333333a42.666667 42.666667 0 0 0 42.666667 42.666667h170.666666v-85.333333h-128v-128H128v170.666666zM896 170.666667a42.666667 42.666667 0 0 0-42.666667-42.666667h-170.666666v85.333333h128v128h85.333333V170.666667zM896 853.333333a42.666667 42.666667 0 0 1-42.666667 42.666667h-170.666666v-85.333333h128v-128h85.333333v170.666666z"
              fill="#000000" p-id="9650"></path>
        </svg>
        <input type="file" accept="image/*" ref="content"   @change="addContent(0)">
      </div>
      <textarea type="text"   placeholder="笔记" v-model="content"></textarea>
    </div>
  </div>
</template>

<script>
import request from "../../../request";

export default {
  name: "AddNote",
  props: {},
  data() {
    return {
      content: '',
      tip:''
    }
  },
  methods: {
    addContent() {
      this.tip = '请稍等'
      let _this = this
      this.$nextTick(() => {
        let imgFile = _this.$refs.content.files[0];//取到上传的图片
        let reader = new FileReader();
        // 传入一个参数对象即可得到基于该参数对象的文本内容
        reader.readAsDataURL(imgFile);
        reader.onload = function (e) {
          //阿里手写识别api
          request.post('https://shouxiegen.market.alicloudapi.com/ocrservice/shouxie', {
            "img": e.target.result,
            "prob": false,
            "charInfo": false,
            "rotate": false,
            "table": false,
            "sortPage": false
          }, {
            headers: {
              Authorization: 'APPCODE 25a538b71bd749d9bd284ea176945f9e'
            }
          }).then(res => {
            _this.tip = ''
            _this.content += res.content
          })
        };

      })
    },

  },
  created() {

  }
}
</script>

<style scoped>
.cell {
  margin: 10vw 0;
  display: flex;
}

input {
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

.tip {
  position: relative;
  padding: 5vw;
  align-items: center;
  display: flex;
}

.tip > div {
  margin-right: 2vw;
}

textarea {
  box-sizing: border-box;
  padding: 3vw;
  border-radius: 5px;
  margin-right: 5vw;
  flex: 1;
  min-height: 60vw;
  border: none;
  background: #f4f5f7;
}
</style>
