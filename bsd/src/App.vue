<template>
  <el-container class="app">
    <el-header>
      <head1 />
    </el-header>
    <el-main>
      <router-view v-slot="{ Component }">
        <keep-alive exclude="detail,search,list">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <!-- <keep-alive exclude="search">
        <router-view />
      </keep-alive> -->
    </el-main>
    <el-footer>
      <foot1 />
    </el-footer>
  </el-container>
</template>
<script>
import Head1 from "./components/Head1.vue";
import Foot1 from "./components/Foot1.vue";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("extraData");
    // this.$store.dispatch('extraData')
  },
  components: {
    Head1,
    Foot1,
  },
};
</script>

<style lang="less">
body {
  margin: 0;
  padding-top: 84px;
}
.el-header {
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.el-footer,
.el-main {
  padding: 0;
  --el-footer-height: none;
}
div.container {
  width: 1224px;
  margin: 0 auto;
}
.el-menu--horizontal > .el-submenu .el-submenu__title,
.el-menu--horizontal > .el-menu-item {
  height: 42px;
  line-height: 42px;
}
.el-menu--popup {
  min-width: 120px;
  text-align: center;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.home .el-carousel__indicators--outside button {
  width: 10px;
  height: 10px;
  border: 1px solid rgb(11, 6, 32);
  border-radius: 50%;
  background: none;
}
.home .el-carousel__indicators--outside .el-carousel__indicator:hover button {
  background-color: red;
}
.el-card__header {
  padding: 10px 15px;
}
.el-card__body {
  padding: 0 0 15px;
}
.extra .el-card__body {
  padding: 0 0 10px;
}
.detail .left .el-card__header {
  background-color: rgb(72, 110, 235);
  span {
    color: white;
  }
}
.detail .left .el-card__body {
  padding-bottom: 0;
}
.detail .left .el-image {
  padding-top: 10px;
}
.search .el-form--inline .el-form-item {
  display: flex;
  justify-content: space-between;
}
</style>
