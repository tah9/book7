<template>
  <div>
    <navbar title="书摘历史"></navbar>
    <excerpts :excerpts="rows"></excerpts>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Excerpts from "@/views/Main/Excerpts";
import request from "../../../request";
export default {
  name: "ExcerptList",
  components: {Excerpts, Navbar},
  props: {},
  data() {
    return {
      rows:null
    }
  },
  methods: {},
  created() {
    request.post('/user/getExcerpt',{
      uid:this.$getJSON('user').uid
    }).then(res=>{
      this.rows=res.rows
    })
  }
}
</script>

<style scoped>

</style>
