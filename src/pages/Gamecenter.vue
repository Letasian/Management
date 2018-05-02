<template>
  <div class="container">
      <topbar></topbar>
      <div class="mainer">
        <navbar></navbar>
        <div class="content">
          <ul class="navtab">
            <li @click="index==1" :class="index==1?'active':''">活动市场</li>
            <li @click="index==2" :class="index==2?'active':''">活动管理</li>
            <li @click="index==3" :class="index==3?'active':''">奖品管理<span>即将开放</span></li>
          </ul>
          <div v-if="index==1">
            <div class="handpick">
              <p class="title">为你精选</p>
              <ul>
                <li v-for="item in handpicks">
                  <div class="pic"></div>
                  <p class="name">
                    <span>{{item.name}}</span>
                    <span>查看详情</span>
                  </p>
                </li>
              </ul>
            </div>
            <div class="festival">
              <p class="title">节日活动</p>
              <p class="tips">
                <span>热门</span>
                <span>节日</span>
              </p>
              <ul>
                <li v-for="item in festivals">
                  <div class="pic"></div>
                  <p class="name">
                    <span>{{item.name}}</span>
                    <span>查看详情</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div v-if="index==2">

          </div>
          <div v-if="index==3">

          </div>
        </div>
      </div>
  </div>
</template>
<script>
import topbar from "../components/topbar.vue";
import navbar from "../components/navbar.vue";
export default {
  name: "Gamecenter",
  data() {
    return {
      index:1,
      handpicks: [
        //为你精选活动
        { pic: "知识达人答题游戏", name: "知识达人", label: "HOT!" }
      ],
      festivals: [
        //节日活动
        { pic: "劳动节活动游戏", name: "劳动节活动", label: "可参加" },
        { pic: "劳模们上啊", name: "劳动节活动", label: "可参加" },
        { pic: "七夕节活动游戏", name: "七夕活动", label: "即将开始" }
      ]
    };
  },
  components:{
    topbar,
    navbar
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
.container {
  min-width: 1080px;
  margin: 0 auto;
  width: 1080px;
}
.mainer{
  width: 100%;
  overflow: hidden;
}
.content{
  float: left;
  margin-left: 50px;
}
.navtab {
}
.navtab li {
  display: inline-block;
  width: 120px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  margin: 0 30px;
}
.navtab li.active {
  bottom-border: 2px solid #2bdfff;
}
.navtab li span {
  font-size: 14px;
  color: #c6c6c6;
}
.handpick,
.festival {
  width: 100%;
  margin-top: 30px;
}
.festival .tips span{
  display: inline-block;
  width: 60px;
  height: 30px;
  line-height: 30px;
  background: #ccffee;
  border-radius: 8px;
  margin: 0 20px;
}
.handpick p.title,
.festival p.title {
  color: #333;
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
}
.handpick ul li,
.festival ul li {
  width: 240px;
  height: 240px;
  display: inline-block;
  margin: 20px;
  border: 1px solid #d1d1d1;
}
.handpick ul li p.pic,
.festival ul li p.pic {
  width: 100%;
  height: 150px;
  background: #f1f1f1;
  font-size: 17px;
  color: #fff;
  text-align: center;
  line-height: 150px;
}
.handpick ul li p.name,
.festival ul li p.name {
  width: 100%;
  height: 50px;
  font-size: 15px;
}
</style>



