<template>
  <div class="extra">
    <el-card class="box-card video">
      <template #header>
        <div class="card-header">
          <span>视频新闻</span>
          <router-link to="/list/video">more>></router-link>
        </div>
      </template>
      <el-carousel indicator-position="outside" height="280px" trigger="click">
        <el-carousel-item v-for="el in videoArr" :key="el.id">
          <router-link :to="`/detail/video/${el.id}`">
            <el-image :src="`${Url}video/${el.src}`" />
            <h4 class="title" v-html="el.title"></h4>
          </router-link>
        </el-carousel-item>
      </el-carousel>
      <i class="el-icon-video-play"></i>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>图片新闻</span>
          <router-link to="/list/image">more>></router-link>
        </div>
      </template>
      <el-carousel indicator-position="outside" height="280px" trigger="click">
        <el-carousel-item v-for="el in imageArr" :key="el.id">
          <router-link :to="`/detail/image/${el.id}`">
            <el-image :src="`${Url}photoes/${el.src}`" />
            <h4 class="title" v-html="el.title"></h4>
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>最新新闻</span>
          <router-link to="/list/newest">more>></router-link>
        </div>
      </template>
      <ul>
        <li v-for="el in newestArr" :key="el.id">
          <router-link :to="`/detail/newest/${el.id}`">
            <div class="date">
              <div class="day" v-html="el.day"></div>
              <div class="my" v-html="el.my"></div>
            </div>
            <div class="title" v-html="el.title" :title="el.title"></div>
            <div class="times">
              <i class="el-icon-view"></i>
              {{ el.times }}
            </div>
          </router-link>
        </li>
      </ul>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>热点新闻</span>
          <router-link to="/list/newhot">more>></router-link>
        </div>
      </template>
      <ul>
        <li v-for="el in newhotArr" :key="el.id">
          <router-link :to="`/detail/newhot/${el.id}`">
            <div class="date">
              <div class="day" v-html="el.day"></div>
              <div class="my" v-html="el.my"></div>
            </div>
            <div class="title" v-html="el.title" :title="el.title"></div>
            <div class="times">
              <i class="el-icon-view"></i>
              {{ el.times }}
            </div>
          </router-link>
        </li>
      </ul>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "extra",
  data() {
    return {
      Url: this.$store.state.Url,
      videoArr: [],
      imageArr: [],
      newestArr: [],
      newhotArr: []
    };
  },
  mounted() {
    const arr = this.$store.state.extraData;
    if (arr.length === 0) {
      this.$axios.get("getMsgObj").then((rs) => {
        this.videoArr = rs[3];
        this.imageArr = rs[2];
        this.newestArr = rs[0];
        this.newestArr = this.newestArr.map((el) => {
          const d = new Date(el.updatedAt);
          el.day = d.getDate();
          el.my = d.getMonth() + "-" + d.getFullYear();
          el.times = 800;
          return el;
        });
        this.newhotArr = rs[1];
        this.newhotArr = this.newhotArr.map((el) => {
          const d = new Date(el.updatedAt);
          el.day = d.getDate();
          el.my = d.getMonth() + "-" + d.getFullYear();
          el.times = 800;
          return el;
        });
      });
    } else {
      this.videoArr = arr[3];
      this.imageArr = arr[2];
      this.newestArr = arr[0];
      this.newhotArr = arr[1];
    }
  },
};
</script>
<style scoped lang="less">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  background-color: brown;
  color: #eee;
  font-weight: bold;
}
.box-card {
  background-color: brown;
  position: relative;
  margin-bottom: 30px;
  &.video i {
    position: absolute;
    font-size: 50px;
    color: rgba(0, 0, 0, 0.4);
    left: calc(50% - 25px);
    top: calc(50% - 25px);
  }
}
.el-carousel__item h4 {
  position: absolute;
  top: 0;
  color: #eee;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1.4;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
}
.extra {
  a,
  a:visited {
    display: block;
    text-decoration: none;
    color: #ccc;
    .el-image {
      width: 100%;
    }
  }
  ul {
    list-style: none;
    padding: 10px;
    margin: 5px;
    background-color: white;
    li {
      border-bottom: 1px dashed #ccc;
      &:last-child {
        border-bottom: none;
      }
      margin-top: 10px;
      padding-bottom: 8px;
      a,
      a:visited {
        display: flex;
        align-items: center;
        color: rgb(10, 8, 27);
        div.date {
          flex: 1;
          background-color: #5a6989;
          height: 50px;
          line-height: 25px;
          border-radius: 6px;
          text-align: center;
          font-size: 14px;
          padding: 4px;
          color: white;
          margin-right: 5px;
          div.day{
            font-size: 17px;
            font-weight: bold;
          }
        }
        div.title {
          flex: 4;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        div.times {
          flex: 1;
          color: #999;
          font-size: 15px;
          text-align: right;
        }
      }
    }
  }
}
</style>