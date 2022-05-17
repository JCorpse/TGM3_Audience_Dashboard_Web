<template>
  <el-container>
    <el-container class="live">
      <el-main>
        <TwitchComponent></TwitchComponent>
      </el-main>
      <el-footer>
        <el-form :inline="true" :model="form">
          <el-form-item label="Token">
            <el-input v-model="form.token" type="password" />
          </el-form-item>
          <el-form-item label="Msg">
            <el-input v-model="form.msg" />
          </el-form-item>
          <el-form-item>
            <el-button @click="postData(this.API_URL)">Query</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="postONON()">我ㄋ</el-button>
          </el-form-item>
        </el-form>
      </el-footer>
    </el-container>
    <el-container class="chat-container">
      <el-aside class="chat-container">
        <iframe id="twitch-chat-embed" src="" class="chat"> </iframe>
      </el-aside>
    </el-container>
  </el-container>
</template>
<script>
import TwitchComponent from "@/components/twitch";

export default {
  name: "chat-page",
  components: { TwitchComponent },
  data() {
    return {
      API_URL: "https://tgm3-audience-dashboard.herokuapp.com/bot/send",
      form: {
        token: "",
        msg: "",
      },
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
        body: new URLSearchParams(this.form).toString(),
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
          "content-type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        referrer: "no-referrer",
      }).then(() => {
        this.form.msg = "";
      });
    },
    async postONON() {
      for(let i=0;i<= Math.floor(Math.random()*10)+1;i++) {
        this.form.msg = this.form.msg + "我ㄋ";
      }
      this.postData(this.API_URL);
    },
  },
  mounted() {
    this.setchat();
  },
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #80cbc4;
  width: 100%;
  height: 100vh;
}
.live {
  height: 910px;
}
.chat {
  height: 850px;
  width: 350px;
}
.chat-container {
  height: 900px;
  width: 400px;
}
</style>
