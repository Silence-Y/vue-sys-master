<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>图表汇总</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <div class="schart-box">
        <div class="content-title">柱状图</div>
        <schart class="schart" canvasId="bar" :options="options1"></schart>
      </div>
      <div class="schart-box">
        <div class="content-title">折线图</div>
        <schart class="schart" canvasId="line" :options="options2"></schart>
      </div>
      <div class="schart-box">
        <div class="content-title">饼状图</div>
        <schart class="schart" canvasId="pie" :options="options3"></schart>
      </div>
      <div class="schart-box">
        <div class="content-title">环形图</div>
        <schart class="schart" canvasId="ring" :options="options4"></schart>
      </div>
    </div>
  </div>
</template>

<script>
import Schart from "vue-schart";
export default {
  name: "basecharts",
  components: {
    Schart
  },
  data() {
    return {
      options1: {
        type: "bar",
        title: {
          text: "最近一周各品类销售图"
        },
        bgColor: "#fbfbfb",
        labels: ["周一", "周二", "周三", "周四", "周五"],
        datasets: [
          {
            label: "家电",
            fillColor: "rgba(241, 49, 74, 0.5)",
            data: [234, 278, 270, 190, 230]
          },
          {
            label: "百货",
            data: [164, 178, 190, 135, 160]
          },
          {
            label: "食品",
            data: [144, 198, 150, 235, 120]
          }
        ]
      },
      options2: {
        type: "line",
        title: {
          text: "最近几个月各品类销售趋势图"
        },
        bgColor: "#fbfbfb",
        labels: ["6月", "7月", "8月", "9月", "10月"],
        datasets: [
          {
            label: "家电",
            data: [234, 278, 270, 190, 230]
          },
          {
            label: "百货",
            data: [164, 178, 150, 135, 160]
          },
          {
            label: "食品",
            data: [114, 138, 200, 235, 190]
          }
        ]
      },
      options3: {
        type: "pie",
        title: {
          text: "服装品类销售饼状图"
        },
        legend: {
          position: "left"
        },
        bgColor: "#fbfbfb",
        labels: ["T恤", "牛仔裤", "连衣裙", "毛衣", "七分裤", "短裙", "羽绒服"],
        datasets: [
          {
            data: [334, 278, 190, 235, 260, 200, 141]
          }
        ]
      },
      options4: {
        type: "ring",
        title: {
          text: "环形三等分"
        },
        showValue: false,
        legend: {
          position: "bottom",
          bottom: 40
        },
        bgColor: "#fbfbfb",
        labels: ["vue", "react", "angular"],
        datasets: [
          {
            data: [500, 500, 500]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.schart-box {
  display: inline-block;
  margin: 20px;
}
.schart {
  width: 600px;
  height: 400px;
}
.content-title {
  clear: both;
  font-weight: 400;
  line-height: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}
</style>