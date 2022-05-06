<template>
  <div id="twitchVideo" />
</template>
<script>
import * as Twitch from "/src/js/plugins/twitch.v1.js";
export default {
  name: "twitch-component",
  methods: {
    async init() {
      const options = {
        width: 1400,
        height: 800,
        channel: "tetristhegrandmaster3",
      };
      new Twitch.Player("twitchVideo", options);
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style lang="scss">
#twitchVideo{
    font-size: 1rem;
}
</style>
