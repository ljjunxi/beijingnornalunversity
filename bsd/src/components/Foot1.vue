<template>
  <div class="outerBox">
    <div class="up">
      <el-row class="container">
        <el-col :span="4" class="left">
          <el-space wrap>
            <el-row>
              <el-col :span="12">
                <aside class="sina"></aside>
              </el-col>
              <el-col :span="12">
                <aside class="ma01"></aside>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <aside class="weixin"></aside>
              </el-col>
              <el-col :span="12">
                <aside class="ma02"></aside>
              </el-col>
            </el-row>
          </el-space>
        </el-col>
        <el-col :span="10" class="com center">
          <div class="title">
            <span></span>
            <router-link to="/home">@ 北京师范大学</router-link>
          </div>
          <p>
            #百廿初心 红色基因##我的青春宣言#
            百余年引领时代，木铎金声传风采。
            献礼建党百年和建校120周年，
            北师大人唱响《青春恰时来》！
          </p>
        </el-col>
        <el-col :span="10" class="com right">
          <div class="title">
            <span></span>
            <router-link to="/home">@ 北京师范大学</router-link>
          </div>
          <p>
            北京师范大学举办“庆华诞 学党史”主题晚会
            百年前，马克思主义来到中国，它就像一道光，点亮前方的路。
            百年征程，革命战场上的炮火、找寻真理的灯火、英雄化作的点点星光，这些光芒不断汇聚。
            信仰之光，代代传承，生生不息。
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="down">
      <el-row class="container">
        <el-col :span="4">© 版权所有 北京师范大学</el-col>
        <el-col :span="7">地址：北京市新街口外大街19号 邮编：100875</el-col>
        <el-col :span="8">
          <router-link to="/home">京ICP备10031106号-58 京公网安备110402430002号</router-link>
        </el-col>
        <el-col :span="5" class="tel">
          <span></span>
          电话查号台：010-58806183
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="less">
div.outerBox {
  border-top: 1px solid #ccc;
  div.up {
    background-color: #eaeef5;
    div.container {
      padding: 20px 0;
      div.left {
        text-align: center;
        aside {
          width: 90px;
          height: 90px;
          margin: 0 auto;
          &.sina {
            background: #00aecd url("../assets/sina.png") no-repeat center
              center;
          }
          &.ma01 {
            background: url("../assets/ma01.png") no-repeat center center;
          }
          &.weixin {
            background: #00aecd url("../assets/weixin.png") no-repeat center
              center;
          }
          &.ma02 {
            background: url("../assets/ma02.png") no-repeat center center;
          }
        }
      }
      div.com {
        padding: 0 60px;
        div.title {
          display: flex;
          align-items: center;
          span {
            display: inline-block;
            width: 42px;
            height: 42px;
          }
          a,
          a:visited {
            font-weight: bold;
            text-decoration: none;
            color: #333;
          }
        }
        p {
          line-height: 2;
          color: #555;
          text-align: justify;
        }
        &.center {
          span {
            background: url("../assets/small_sina.png") no-repeat center;
          }
        }
        &.right {
          span {
            background: url("../assets/small_weixin.png") no-repeat center;
          }
        }
      }
    }
  }
  div.down {
    height: 80px;
    line-height: 80px;
    background: url("../assets/footer_bg.jpg") no-repeat center center;
    color: white;
    a,
    a:visited {
      color: white;
      text-decoration: none;
    }
    div.tel {
      display: flex;
      align-items: center;
      span {
        width: 28px;
        height: 28px;
        display: inline-block;
        background: url("../assets/tel_bg.png") no-repeat;
      }
    }
  }
}
</style>