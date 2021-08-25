<template>
  <div class="detail">
    <div class="container">
      <el-row :gutter="30">
        <el-col :span="16">
          <div class="left">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/list/' + sortName }">{{
                      listName
                    }}</el-breadcrumb-item>
                    <el-breadcrumb-item>内容详情...</el-breadcrumb-item>
                  </el-breadcrumb>
                </div>
              </template>
              <div class="body">
                <div class="title" v-html="obj.title"></div>
                <div class="date" v-html="obj.date"></div>
                <div class="content" v-html="obj.content"></div>
                <el-row
                  :gutter="10"
                  class="photoes"
                  v-if="sortName === 'image'"
                >
                  <el-col v-for="el in obj.photoes" :key="el" :span="12">
                    <el-image :src="el"></el-image>
                  </el-col>
                </el-row>
                <div class="video" v-else-if="sortName === 'video'">
                  <video :src="obj.url" controls></video>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8"><extra /> </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Extra from "../components/Extra.vue";
export default {
  name: "detail",
  data() {
    return {
      Url: this.$store.state.Url,
      sortName: "",
      listName: "",
      id: 0,
      obj: {},
    };
  },
  mounted() {
    const sortName = this.$route.params.sortName;
    const id = this.$route.params.id;
    this.sortName = sortName;
    this.id = id;
    this.loadData()
  },
  components: {
    Extra,
  },
  methods: {
    loadData() {
      const titles = {
        headlines: "关注头条",
        comprehensive: "综合新闻",
        learning: "学术动态",
        story: "师大故事",
        newest: "最新新闻",
        newhot: "热点新闻",
        notice: "通知公告",
        video: "视频新闻",
        image: "图片新闻",
      };
      this.listName = titles[this.sortName];
      let tableName = "";
      switch (this.sortName) {
        case "video":
          tableName = "Video";
          break;
        case "image":
          tableName = "Images";
          break;
        case "notice":
          tableName = "Notice";
          break;
        default:
          tableName = "News";
      } 
      const params = { params: { tableName, id:this.id } };
      this.$axios.get("getDetail", params).then((obj) => {
        obj.date = new Date(obj.updatedAt).toLocaleDateString();
        if (this.sortName === "image") {
          let arr = obj.photoes.split(",");
          arr = arr.map((el) => {
            el = this.Url + "photoes/" + el;
            return el;
          });
          obj.photoes = arr;
        } else if (this.sortName === "video") {
          obj.url = this.Url + "video/aaa.mp4";
        }
        this.obj = obj;
      });
    },
  },
  watch: {
    $route() {
      const arr = this.$route.path.split("/");
      if(arr[1]==='detail'){
        this.sortName = arr[2];
        this.id = arr[3];
        this.loadData()
      }
    },
  },
};
</script>
<style lang="less" scoped>
.detail {
  background-color: #ecf2f6;
  padding: 60px 0 30px;
  .box-card {
    .card-header {
      padding: 10px 0;
    }
    .body {
      border: 1px solid rgb(72, 110, 235);
      border-radius: 0 0 3px 3px;
      padding: 10px;
      .title {
        text-align: center;
        font-family: "simsun";
        font-size: 22px;
        font-weight: bold;
        padding: 0 50px;
      }
      .date {
        margin: 15px 0;
        text-align: center;
        color: #555;
      }
      .content {
        line-height: 1.7;
        text-indent: 2em;
        /deep/ p {
          text-indent: 2em;
          text-align: justify;
          color: #555;
        }
        /deep/ img {
          width: 100%;
          vertical-align: middle;
          margin: 10px 0;
        }
      }
      img {
        padding-bottom: 10px;
      }
      div.video {
        video {
          width: 100%;
        }
      }
    }
  }
}
</style>