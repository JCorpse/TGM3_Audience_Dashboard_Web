<template>
  <div id='draw'>
  </div>
</template>

<script>
import * as ech from 'echarts';

const API_BASE_URL = "https://tgm3-audience-dashboard.herokuapp.com/api/";

export default {
  name: 'draw-components',
  data() {
    return {
      Trains: [],
    }
  },
  methods: {
    async Request(url) {
      const data = await (await (fetch(url)
          .then((res) => res.json())
          .catch((err) => {
            console.log("Error ", err)
          })));
      return data;
    },
    async getTrainData() {
      const url = "Trains";
      this.Trains = await (this.Request(`${API_BASE_URL}${url}`));
      console.log(this.Trains)
    },
    async draw() {
      await(this.getTrainData());
      const chart = ech.init(document.getElementById('app'))
      var option = {
        xAxis: {
          data:[]
        },
        yAxis: {
          type: 'value'
        },
        series:
            {
              data:[],
              type:'line'
            }
      };
      this.Trains.forEach((TrainsData)=>{
        option.xAxis.data.push(TrainsData.startedAt);
        option.series.data.push(TrainsData.lastLevel);
      })
      chart.setOption(option);
    }
  },
  mounted() {
    this.draw();
  }
}
</script>

<style lang="scss">
#draw {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
  width: 1400px;
  height: 400px;
}
</style>
