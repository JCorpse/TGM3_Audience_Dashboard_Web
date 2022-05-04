<template>
  <div id='app'>
  </div>
</template>

<script>
const API_BASE_URL = "https://tgm3-audience-dashboard.herokuapp.com/api/";

export default {
  name: 'App',
  data() {
    return {
      Trains: [],
      testdata: [99, 71, 78, 25, 36, 92]
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
    draw() {

    }
  },
  mounted() {
    this.getTrainData();
    this.draw();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

svg {
  margin: 25px;
  fill: none;
  stroke: #76BF8A;
  stroke-width: 3px;
}
</style>
