<template>
  <div>
    <div class="item" v-for="item in notes">
      <div class="time">{{ $formatTime(item.datetime) }}</div>
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadNotes",
  props: {
    notes: null
  },
  data() {
    return {}
  },
  methods: {},
  created() {

  }
}
</script>

<style scoped>
.item {
  border-radius: 4px;
  margin-top: 5vw;
  background: #2b2c2e;
  font-size: var(--font-size);
  line-height: 6.5vw;
  position: relative;
  padding: 5vw;
  color: white;
  margin-left: 15vw;
}

.content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.time {
  font-size: 16px;
}
</style>
