<template>
  <div>
    <navbar title="笔记历史"></navbar>
    <read-notes :notes="rows"></read-notes>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import ReadNotes from "@/views/Main/ReadNotes";
import request from "../../../request";
export default {
  name: "NoteList",
  components: {ReadNotes, Navbar},
  props: {},
  data() {
    return {
      rows:null
    }
  },
  methods: {},
  created() {
    request.post('/user/getReadingNotes',{
      uid:this.$getJSON('user').uid
    }).then(res=>{
      this.rows=res.rows
    })
  }
}
</script>

<style scoped>

</style>
