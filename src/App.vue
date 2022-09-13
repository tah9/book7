<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body{
  --font-size:3.8vw;
  --theme-color:#212121;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}
input{
  border: none;
}
input:focus{
  outline: none;
}
.btn{
  color: white;
  background: var(--theme-color);
  border-radius: 10px;
  text-align: center;
  line-height: 44px;
  height: 44px;
  width: 90%;
  margin-left: 5%;
}

</style>
