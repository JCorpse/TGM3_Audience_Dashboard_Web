<template>
  <div id="app">
    <el-container>
      <el-header class="header"><h1>TGM3_Audience_Dashboard_Web</h1></el-header>
      <el-container>
        <el-aside>
          <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-menu-item index="0">
              <span>這是0</span>
            </el-menu-item>
            <el-menu-item index="1">
              <span>這是1</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-menu mode="horizontal" @select="handleSelect">
            <el-menu-item index="0">折線圖</el-menu-item>
            <el-menu-item index="1">柱狀圖</el-menu-item>
            <el-menu-item index="2">散點圖</el-menu-item>
          </el-menu>
          <draw-component></draw-component>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import DrawComponent from "@/components/draw";

export default {
  name: "App",
  components: {DrawComponent},
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
</style>
