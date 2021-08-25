<template>
  <div class="list">
    <div class="container">
      <el-row :gutter="30">
        <el-col :span="16">
          <div class="panel">
            <div class="head">
              <router-link to="/">
                <i class="el-icon-s-home"></i>首页
              </router-link>
              <strong v-html="listTitle"></strong>
            </div>
            <div class="body">
              <ul>
                <li v-for="el in arr" :key="el.id">
                  <router-link :to="`/detail/${sortName}/${el.id}`">
                    <div class="st1" v-html="el.title"></div>
                    <div class="st2">
                      <div
                        class="st21"
                        :style="sortName != 'notice' ? 'margin-right:20px' : ''"
                      >
                        <div class="st211" v-html="el.con"></div>
                        <div class="st212">
                          <span class="date">
                            <i class="el-icon-time"></i>
                            {{ el.date }}
                          </span>
                          <span class="times">
                            <i class="el-icon-view"></i>
                            {{ el.times }}
                          </span>
                        </div>
                      </div>
                      <div class="st23" v-if="sortName === 'notice'"></div>
                      <div class="st22" v-else-if="sortName === 'video'||sortName === 'image'">
                        <img :src="el.src" alt="" />
                      </div>
                      <div class="st22" v-html="el.img" v-else></div>
                    </div>
                  </router-link>
                </li>
                <li class="pagination">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :pageSize="10"
                    :total="total"
                    @current-change="changePage"
                  ></el-pagination>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <extra />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Extra from "../components/Extra.vue";
export default {
  name: "list",
  data() {
    return {
      Url: this.$store.state.Url,
      arr: [],
      listTitle: "",
      curPage: 0,
      sortName: "",
      total: 0,
    };
  },
  components: {
    Extra,
  },
  mounted() {
    this.sortName = this.$route.params.sortName;
    this.headmsg();
    this.getPageData();
    this.getTotal();
  },
  methods: {
    changePage(i) {
      this.curPage = i - 1;
      this.getPageData();
    },
    headmsg() {
      const obj = {
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
      this.listTitle = obj[this.sortName];
    },
    getTotal() {
      let tableName = "";
      switch (this.sortName) {
        case "notice":
          tableName = "Notice";
          break;
        case "video":
          tableName = "Video";
          break;
        case "image":
          tableName = "Images";
          break;
        default:
          tableName = "news";
      }

      const params = { params: { type: this.sortName, clsType:tableName } };
      this.$axios.get("getListTotal", params).then((total) => {
        this.total = total;
      });
    },
    getPageData() {
      let tableName = "";
      switch (this.sortName) {
        case "notice":
          tableName = "Notice";
          break;
        case "video":
          tableName = "Video";
          break;
        case "image":
          tableName = "Images";
          break;
        default:
          tableName = "news";
      }
      const params = {
        params: {
          type: this.sortName,
          start: this.curPage * 10,
          clsType:tableName,
        },
      };
      this.$axios.get("getListMsg", params).then((arr) => {
        arr = arr.map((el) => {
          if(this.sortName!='video' && this.sortName!='notice' && this.sortName!='image' ){
            let con = el.content.match(/<p>[^>]+>/);
            el.con=con[0];
          }else{
            el.con=el.content;
          }
          el.date = new Date(el.updatedAt).toLocaleDateString();
          el.times = 200;
          if (this.sortName === "video" || this.sortName === "image") {
            el.src=this.sortName === "video"?this.Url+'video/'+el.src:this.Url+'photoes/'+el.src;
          } else if (this.sortName === "notice") {
          } else {
            el.img = el.content.match(/<img[^>]+>/)[0];
          }
          return el;
        });
        this.arr = arr;
      });
    },
  },
  watch: {
    $route() {
      this.sortName = this.$route.path.substr(6);
      this.headmsg();
      this.getPageData();
      this.getTotal();
    },
  },
};
</script>
<style scoped lang="less">
div.list {
  background-color: #ecf2f6;
  padding-bottom: 30px;
  padding-top: 60px;
  div.panel {
    border: 1px solid #0b3c70;
    border-radius: 5px;
    div.head {
      line-height: 45px;
      background-color: #0b3c70;
      padding: 0 60px 0 30px;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      color: white;
      a,
      a:visited {
        color: white;
        text-decoration: none;
        font-size: 14px;
      }
    }
    div.body {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          background-color: white;
          margin-top: 30px;
          padding: 15px 10px;
          a,
          a:visited {
            text-decoration: none;
            font-family: "simsun";
            .st1 {
              font-weight: bold;
              text-indent: 2em;
              line-height: 1.6;
              color: #333;
              margin-bottom: 10px;
            }
            .st2 {
              display: flex;
              .st21 {
                flex: 7;
                .st211 {
                  font-size: 15px;
                  color: #555;
                  text-align: justify;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 4;
                  overflow: hidden;
                  text-indent: 2em;
                  line-height: 1.7;
                }
                .st212 {
                  font-size: 14px;
                  margin-top: 15px;
                  color: #999;
                  span {
                    margin-left: 50px;
                  }
                }
              }
              .st22 {
                flex: 3;
                /deep/ img {
                  width: 100%;
                }
              }
              .st23 {
                display: none;
              }
            }
          }
        }
        li.pagination {
          text-align: right;
          margin-bottom: 30px;
          padding: 20px 0;
        }
      }
    }
  }
}
</style>