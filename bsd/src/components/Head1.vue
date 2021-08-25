<template>
  <div class="outerBox">
    <div class="pub up">
      <el-row class="container">
        <el-col :span="10" class="left1">
          <a href="https://one.bnu.edu.cn" target="_blank">信息门户</a>
          <a href="http://xxgk.bnu.edu.cn/" target="_blank">信息公开</a>
          <a href="lxxld/index.htm" target="_blank">联系校领导</a>
          <a href="http://email.bnu.edu.cn/" target="_blank">教师邮箱</a>
          <a href="https://mail.bnu.edu.cn/  " target="_blank">学生邮箱</a>
          <a href="https://pan.bnu.edu.cn/  " target="_blank">师大云盘</a>
        </el-col>
        <el-col :span="4" class="center1">
          <router-link to="/home" class="logo">
            <el-image :src="`${Url}img/logo1.27b2ad1b.png`" fit="cover"></el-image>
          </router-link>
        </el-col>
        <el-col :span="10" class="right1">
          <a href="#news" target="_blank">师大新闻</a>
          <a href="http://english.bnu.edu.cn/" target="_blank">English Version</a>
          <a href=" http://xyh.bnu.edu.cn/" target="_blank">校友之家</a>
          <a href="https://zhuhai.bnu.edu.cn/" target="_blank">珠海校区</a>
          <router-link to="/search">
            <i class="el-icon-search"></i>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <div class="pub down">
      <el-row class="container">
        <el-col :span="10" class="left2">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-submenu index="1">
              <template #title>学校概况</template>
              <el-menu-item index="1-1">重庆文理学院</el-menu-item>
              <el-menu-item index="1-2">重庆文理学院</el-menu-item>
              <el-menu-item index="1-3">重庆文理学院</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template #title>组织机构</template>
              <el-menu-item index="2-1">重庆文理学院</el-menu-item>
              <el-menu-item index="2-2">重庆文理学院</el-menu-item>
              <el-menu-item index="2-3">重庆文理学院</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template #title>学部系院</template>
              <el-menu-item index="3-1">重庆文理学院</el-menu-item>
              <el-menu-item index="3-2">重庆文理学院</el-menu-item>
              <el-menu-item index="3-3">重庆文理学院</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">
              <a href="https://www.ele.me" target="_blank">科学研究</a>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4" class="center2">
          <el-image :src="`${Url}img/logo_bg.bdfbb5b4.png`" fit="cover"></el-image>
        </el-col>
        <el-col :span="10" class="right2">
                    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-submenu index="1">
              <template #title>招生就业</template>
              <el-menu-item index="1-1">重庆文理学院</el-menu-item>
              <el-menu-item index="1-2">重庆文理学院</el-menu-item>
              <el-menu-item index="1-3">重庆文理学院</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template #title>人才招聘</template>
              <el-menu-item index="2-1">重庆文理学院</el-menu-item>
              <el-menu-item index="2-2">重庆文理学院</el-menu-item>
              <el-menu-item index="2-3">重庆文理学院</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template #title>合作交流</template>
              <el-menu-item index="3-1">重庆文理学院</el-menu-item>
              <el-menu-item index="3-2">重庆文理学院</el-menu-item>
              <el-menu-item index="3-3">重庆文理学院</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">
              <a href="https://www.ele.me" target="_blank">图书档案</a>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "head1",
  data() {
    return {
      Url: this.$store.state.Url,
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch(key){
        case '1-2':
          this.$router.push('/search');
          break;
        case '2-2':
          this.$router.replace('/home');
          break;
      }
    }
  }
};
</script>
<style scoped lang="less">
div.outerBox {
  div.pub {
    height: 42px;
    &.up {
      background: url("../assets/header_bg.jpg") no-repeat center top;
    }
    &.down {
      background-color: white;
      box-shadow: 1px 5px 16px 5px rgba(0, 0, 0, 0.1);
    }
    div.container {
      line-height: 42px;
      div.left1,
      div.right1 {
        display: flex;
        justify-content: space-around;
        a,
        a:visited {
          color: white;
          text-decoration: none;
          padding: 0 8px;
          &:hover {
            background-color: #eee;
            color: #333;
          }
        }
      }
      div.center1 {
        position: relative;
        .el-image {
          position: absolute;
          left: calc(50% - 75px);
          top: 0;
          width: 150px;
          z-index: 10;
        }
      }
      div.center2 {
        position: relative;
        .el-image {
          position: absolute;
          left: 0;
          top: 42px;
        }
      }
    }
  }
}
</style>
