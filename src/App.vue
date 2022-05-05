<template>
  <div id='app'>
    <draw-component></draw-component>
  </div>
</template>

<script>
import DrawComponent from "@/components/draw";

export default {
  name: 'App',
  components: {DrawComponent}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1400px;
  height: 400px;
}
</style>
