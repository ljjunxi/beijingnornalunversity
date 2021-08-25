<template>
  <div class="home">
    <el-carousel indicator-position="outside" height="575px">
      <el-carousel-item v-for="item in 6" :key="item">
        <router-link to="##">
          <el-image :src="`${Url}adv1/adv${item}.jpg`"/>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <aside class="topboder"></aside>
    <section class="one">
      <div class="container">
        <el-row class="header">
          <el-col :span="10">
            <span></span>
          </el-col>
          <el-col :span="4">
            <router-link to="/list/headlines" class="center">
              <img src="../assets/title01.png" />
              <i class="el-icon-loading"></i>
            </router-link>
          </el-col>
          <el-col :span="10">
            <span></span>
          </el-col>
        </el-row>
        <el-row class="body" :gutter="20">
          <el-col :span="6" v-for="el in headlineArr" :key="el.id">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span v-html="el.title" :title="el.title"></span>
                </div>
              </template>
              <div class="card-body">
                <div class="img" v-html="el.img"></div>
                <router-link :to="`/detail/headlines/${el.id}`">
                  <i class="el-icon-d-arrow-right"></i>
                </router-link>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="one two">
      <div class="container">
        <el-row class="header">
          <el-col :span="10">
            <span></span>
          </el-col>
          <el-col :span="4">
            <router-link to="/list/comprehensive" class="center">
              <img src="../assets/title02.png" />
              <i class="el-icon-loading"></i>
            </router-link>
          </el-col>
          <el-col :span="10">
            <span></span>
          </el-col>
        </el-row>
        <el-row class="body" :gutter="20">
          <el-col :span="6" v-for="el in comprehensiveArr" :key="el.id">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span v-html="el.title" :title="el.title"></span>
                </div>
              </template>
              <div class="card-body">
                <div class="img" v-html="el.img"></div>
                <div class="con" v-html="el.con"></div>
                <router-link :to="`/detail/comprehensive/${el.id}`">
                  <i class="el-icon-d-arrow-right"></i>
                </router-link>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="one three">
      <div class="container">
        <el-row class="header">
          <el-col :span="10">
            <span></span>
          </el-col>
          <el-col :span="4">
            <router-link to="/list/learning" class="center">
              <img src="../assets/title03.png" />
              <i class="el-icon-loading"></i>
            </router-link>
          </el-col>
          <el-col :span="10">
            <span></span>
          </el-col>
        </el-row>
        <el-row class="body" :gutter="20">
          <el-col :span="6" v-for="el in learningArr" :key="el.id">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span v-html="el.title" :title="el.title"></span>
                </div>
              </template>
              <div class="card-body">
                <div class="img" v-html="el.img"></div>
                <div class="con" v-html="el.con"></div>
                <router-link :to="`/detail/learning/${el.id}`">
                  <i class="el-icon-d-arrow-right"></i>
                </router-link>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="one four">
      <div class="container">
        <el-row class="header">
          <el-col :span="10">
            <span></span>
          </el-col>
          <el-col :span="4">
            <router-link to="/list/story" class="center">
              <img src="../assets/title04.png" />
              <i class="el-icon-loading"></i>
            </router-link>
          </el-col>
          <el-col :span="10">
            <span></span>
          </el-col>
        </el-row>
        <el-row class="body" :gutter="20">
          <el-col :span="6" v-for="el in storyArr" :key="el.id">
            <el-card class="box-card">
              <router-link :to="`/detail/story/${el.id}`">
                <div class="img" v-html="el.img"></div>
              </router-link>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="five">
      <div class="container">
        <el-row :gutter="30">
          <el-col :span="12">
            <el-row class="header">
              <el-col :span="9">
                <span></span>
              </el-col>
              <el-col :span="6">
                <router-link to="/list/notice" class="center">
                  <img src="../assets/title05.png" />
                  <i class="el-icon-loading"></i>
                </router-link>
              </el-col>
              <el-col :span="9">
                <span></span>
              </el-col>
            </el-row>
            <el-card class="box-card" @mouseenter="moveStop" @mouseleave="move">
              <div class="scrollWin" :scrollTop="moveTop">
                <article ref="artic">
                  <router-link v-for="el in noticeArr" :to="`/detail/notice/${el.id}`" :key="el.id">
                    <el-row>
                      <el-col :span="20"> 
                        <span v-html="el.no"></span>
                        <span class="title" v-html="el.title"></span>
                      </el-col>
                      <el-col :span="4">
                        <span class="date" v-html="el.date"></span>
                      </el-col>
                    </el-row>
                  </router-link>
                </article>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-row class="header">
              <el-col :span="9">
                <span></span>
              </el-col>
              <el-col :span="6">
                <a href="##" class="center">
                  <img src="../assets/title06.png" />
                  <i class="el-icon-loading"></i>
                </a>
              </el-col>
              <el-col :span="9">
                <span></span>
              </el-col>
            </el-row>
            <el-row :gutter="30" class="fiveZt">
              <el-col :span="12" style="padding-bottom:20px">
                <router-link to="##">
                  <el-image :src="`${Url}img/a10.8bc7ce45.jpg`" style="height:90px;width:100%" />
                  <i class="el-icon-zoom-in"></i>
                </router-link>
              </el-col>
              <el-col :span="12">
                <router-link to="##">
                  <el-image :src="`${Url}img/a11.51fbe66b.jpg`" style="height:90px;width:100%" />
                  <i class="el-icon-zoom-in"></i>
                </router-link>
              </el-col>
              <el-col :span="12" style="padding-bottom:20px">
                <router-link to="##">
                  <el-image :src="`${Url}img/a12.66690150.jpg`" style="height:90px;width:100%" />
                  <i class="el-icon-zoom-in"></i>
                </router-link>
              </el-col>
              <el-col :span="12">
                <router-link to="##">
                  <el-image :src="`${Url}img/a13.2ca51e2a.jpg`" style="height:90px;width:100%" />
                  <i class="el-icon-zoom-in"></i>
                </router-link>
              </el-col>
              <el-col :span="12" style="padding-bottom:20px">
                <router-link to="##">
                  <el-image :src="`${Url}img/a10.8bc7ce45.jpg`" style="height:90px;width:100%" />
                  <i class="el-icon-zoom-in"></i>
                </router-link>
              </el-col>
              <el-col :span="12" style="height:80px">
                <router-link to="##">
                  <el-image :src="`${Url}img/a11.51fbe66b.jpg`" style="height:90px;width:100%" />
                  <i class="el-icon-zoom-in"></i>
                </router-link>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      Url: this.$store.state.Url,
      headlineArr: [],
      comprehensiveArr: [],
      learningArr: [],
      storyArr: [],
      noticeArr: [],
      moveTop: 0,
      timer: null,
      high: 0
    };
  },
  mounted() {
    this.$axios.get("getData").then(arr => {
      const arr1 = arr[1];
      this.headlineArr = arr1.map(el => {
        let imgsrc = el.content.match(/<img[^>]+>/)[0];
        el.img = imgsrc;
        return el;
      });
      const arr2 = arr[2];
      this.comprehensiveArr = arr2.map(el => {
        let imgsrc = el.content.match(/<img[^>]+>/)[0];
        el.con = el.content.match(/<p>[^>]+>/)[0];
        el.img = imgsrc;
        return el;
      });
      const arr3 = arr[3];
      this.learningArr = arr3.map(el => {
        let imgsrc = el.content.match(/<img[^>]+>/)[0];
        el.con = el.content.match(/<p>[^>]+>/)[0];
        el.img = imgsrc;
        return el;
      });
      const arr4 = arr[4];
      this.storyArr = arr3.map(el => {
        let imgsrc = el.content.match(/<img[^>]+>/)[0];
        el.img = imgsrc;
        return el;
      });
      const arr5 = arr[5];
      const noticeArr = arr5.map((el, i) => {
        el.no = `${i + 1}、`;
        el.date = new Date(el.updatedAt).toLocaleDateString();
        return el;
      });
      this.noticeArr = [...noticeArr, ...noticeArr];
      const oArt = this.$refs.artic;
      setTimeout(() => {
        this.high = parseInt(oArt.offsetHeight / 2);
        this.move();
      }, 50);
    });
  },
  methods: {
    moveStop() {
      clearInterval(this.timer);
    },
    restart() {
      this.move();
    },
    move() {
      this.timer = setInterval(() => {
        if (this.moveTop === this.high + 13) this.moveTop = 0;
        else this.moveTop++;
      }, 30);
    }
  }
};
</script>
<style scoped lang="less">
div.home {
  background-color: #8fa8f8;
  padding-bottom: 30px;
}
.el-carousel {
  .el-image {
    height: 100%;
  }
}
aside.topboder {
  height: 48px;
  background: url("../assets/line.png") no-repeat center top,
    url("../assets/banner_bg01.png") no-repeat center top;
  background-color: #103909;
  margin-top: -34px;
}
section.one {
  background-color: #103909;
  padding-bottom: 30px;
  .header {
    padding: 15px 0;
    span {
      display: block;
      height: 1px;
      background-color: #305b8f;
      margin-top: 20px;
    }
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      i {
        margin-left: 10px;
        color: white;
      }
    }
  }
  .body {
    .box-card {
      background-color: #8fd5f9;
      .card-header {
        height: 50px;
        line-height: 25px;
        color: black;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        cursor: default;
        font-family: "simsun";
        font-weight: bold;
      }
      .card-body {
        text-align: right;
        /deep/ img {
          width: 100%;
          height: 260px;
          vertical-align: middle;
          margin-bottom: 20px;
        }
        a {
          display: inline-block;
          width: 30px;
          height: 30px;
          text-align: center;
          border: 2px solid rgb(114, 112, 182);
          border-radius: 50%;
          margin-right: 30px;
          i {
            margin-top: 6px;
            font-weight: bold;
            margin-left: 3px;
            color: rgb(114, 112, 182);
          }
        }
      }
    }
  }
  &.two {
    background-color: #cce1fa;
    .header {
      span {
        background-color: #afc1d7;
      }
      i {
        color: #74808e;
      }
    }
    .box-card {
      background-color: white;
      .card-header {
        color: rgb(13, 7, 48);
        font-weight: normal;
      }
      .card-body {
        /deep/ img {
          margin-bottom: 0;
        }
        /deep/ p {
          height: 80px;
          line-height: 20px;
          text-align: justify;
          text-indent: 2em;
          font-size: 14px;
          padding: 0 10px;
          color: #555;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
        }
      }
    }
  }
  &.three {
    background-color: #eaeef5;
    padding-bottom: 10px;
    .header {
      span {
        background-color: #afc1d7;
      }
      i {
        color: #74808e;
      }
    }
    .box-card {
      background-color: white;
      margin-bottom: 20px;
      .card-header {
        color: rgb(13, 7, 48);
      }
      .card-body {
        /deep/ img {
          margin-bottom: 0;
        }
        /deep/ p {
          height: 80px;
          line-height: 20px;
          text-align: justify;
          text-indent: 2em;
          font-size: 14px;
          padding: 0 10px;
          color: #555;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
        }
      }
    }
  }
  &.four {
    background: url(../assets/mode04_bg.png) no-repeat top center;
    padding-bottom: 10px;
    .header {
      i {
        color: #97bde7;
      }
    }
    .box-card {
      margin-bottom: 20px;
      padding-top: 20px;
      /deep/ img {
        width: 100%;
        height: 260px;
      }
    }
  }
}
section.five {
  background-color: #cce1fa;
  padding-bottom: 15px;
  .header {
    padding: 15px 0;
    span {
      display: block;
      height: 1px;
      background-color: #305b8f;
      margin-top: 20px;
    }
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      i {
        margin-left: 10px;
        color: rgb(17, 9, 41);
      }
    }
  }
  .box-card {
    background-color: rgb(210, 244, 248);
    padding: 10px 10px 0;
    div.scrollWin {
      height: 280px;
      overflow: hidden;
      background-color: white;
      padding: 0 5px;
      a,
      a:visited {
        display: block;
        color: #07133b;
        line-height: 1.5;
        &:not(:last-child) {
          border-bottom: 1px dashed #ccc;
          margin-bottom: 15px;
          padding-bottom: 10px;
        }
        span.date {
          display: block;
          text-align: right;
          font-size: 15px;
          color: #666;
        }
      }
    }
  }
  .fiveZt {
    a {
      display: block;
      height: 90px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        left: 50%;
        top: 50%;
        border: 1px solid #ccc;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.4s;
      }
      &:hover {
        &::after {
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          opacity: 1;
        }
        i {
          opacity: 1;
        }
      }
      i {
        position: absolute;
        font-size: 30px;
        color: white;
        left: calc(50% - 15px);
        top: calc(50% - 15px);
        opacity: 0;
        transition: all 0.4s;
        z-index: 100;
      }
    }
  }
}
</style>