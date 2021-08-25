<template>
  <div class="search">
    <div class="container">
      <el-row :gutter="30">
        <el-col :span="16">
          <el-form :inline="true" :model="formData" class="demo-form-inline">
            <el-row>
              <el-col :span="16">
                <el-form-item label="搜索内容">
                  <el-input
                    v-model="formData.keyword"
                    placeholder="请输入搜索内容"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="类别">
                  <el-select v-model="formData.sortName" placeholder="选择类别">
                    <el-option label="关注头条" value="headlines"></el-option>
                    <el-option
                      label="综合新闻"
                      value="comprehensive"
                    ></el-option>
                    <el-option label="学术动态" value="learning"></el-option>
                    <el-option label="师大故事" value="story"></el-option>
                    <el-option label="最新新闻" value="newest"></el-option>
                    <el-option label="热点新闻" value="newhot"></el-option>
                    <el-option label="通知公告" value="notice"></el-option>
                    <el-option label="视频新闻" value="video"></el-option>
                    <el-option label="图片新闻" value="image"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="3">
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">搜索</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div class="panel" v-show="total>0">
            <div class="head">
              <router-link to="/home">
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
                      <div
                        class="st22"
                        v-else-if="sortName === 'video' || sortName === 'image'"
                      >
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
                    :pageSize="5"
                    :total="total"
                    @current-change="changePage"
                  ></el-pagination>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="8"><extra /></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Extra from "../components/Extra.vue";
export default { 
  name: "search",
  data() {
    return {
      formData: {
        keyword: "",
        sortName: "",
      },
      Url:this.$store.state.Url,
      listTitle: "",
      sortName: "",
      total: 0,
      curPage: 0,
      arr: [],
    };
  },
  components: {
    Extra,
  },
  methods: {
    changePage(i) {
      this.curPage = i - 1;
      this.listData();
    },
    onSubmit() {
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
      this.sortName = this.formData.sortName;
      this.listTitle = obj[this.sortName];
      const params = { params: this.formData };
      this.$axios.get("getSearchTotal1", params).then((total) => {
        this.total = total;
      });
      this.listData();
    },

    listData() {
      this.formData.start = this.curPage * 5;
      const params = { params: this.formData };
      const sortName = this.sortName;
      this.$axios.get("getSearchMsg1", params).then((arr) => {
        arr = arr.map((el) => {
          if (
            sortName != "video" &&
            sortName != "notice" &&
            sortName != "image"
          ) {
            let con = el.content.match(/<p>[^>]+>/);
            el.con = con[0];
          } else {
            el.con = el.content;
          }
          el.date = new Date(el.updatedAt).toLocaleDateString();
          el.times = 200;
          if (sortName === "video" || sortName === "image") {
            el.src =
              sortName === "video"
                ? this.Url + "video/" + el.src
                : this.Url + "photoes/" + el.src;
          } else if (sortName === "notice") {
          } else {
            el.img = el.content.match(/<img[^>]+>/)[0];
          }
          return el;
        });
        this.arr = arr;
      });
    },
  },
};
</script>
<style scoped lang="less">
div.search {
  background-color: #ecf2f6;
  padding-top: 60px;
  input {
    width: 500px;
  }
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