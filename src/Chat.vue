<template>
  <div id="app">
    <el-main>
    <iframe id="twitch-chat-embed" src="" height="500" width="350"> </iframe>

    <el-form :inline="true" :model="formInline" >
      <el-form-item label="Token">
        <el-input v-model="this.Token" />
      </el-form-item>
      <el-form-item label="Msg">
        <el-input v-model="this.Msg" />
      </el-form-item>
      <el-form-item>
        <el-button type="button" @click="postData(this.API_URL)">Query</el-button>
      </el-form-item>
    </el-form>
    </el-main>

    <form action="/bot/send" id="sendform" method="post" target="hide_iframe">
      <input type="password" name="token" id="token" />
      <input type="text" name="msg" id="msg" />
      <input
        type="button"
        value="submit"
        name="submit"
        id="submit"
        onclick="postData()"
      />
    </form>
  </div>
</template>
<script>
// const API_BASE_URL = "https://tgm3-audience-dashboard.herokuapp.com/api/";

export default {
  name: "chat-page",
  data() {
    return {
      API_URL:'https://tgm3-audience-dashboard.herokuapp.com/bot/send',
      Token:'',
      Msg:''
    };
  },
  methods: {
    async setchat() {
      document.getElementById("twitch-chat-embed").src =
        "https://www.twitch.tv/embed/tetristhegrandmaster3/chat?parent=" +
        window.location.hostname;
    },
    async postData(url) {
      return fetch(url, {
        body: {
          'token':this.token,
          'msg':this.Msg
        },
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
          "content-type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        referrer: "no-referrer",
      }).then(() => {
        document.getElementById("msg").value = "";
      });
    },
  },
  mounted() {
    this.setchat();
  },
};
</script>
<style lang="scss"></style>
