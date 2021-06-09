<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Select v-model="selected" :options="options" :multiple="true" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data:()=>({
    selected:[],
    options:[
      {label:'苹果',value:1},
      {label:'橘子',value:2},
      {label:'栗子',value:3},
      {label:'香蕉',value:4},
      {label:'火龙果',value:5},
    ]
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
