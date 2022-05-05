<template>
  <div id="app">
    <iframe id="twitch-chat-embed" src="" height="500" width="350"> </iframe>
    <form action="/bot/send" id="sendform" method="post" target="hide_iframe">
      <input type="password" name="token" id="token" />
      <input type="text" name="msg" id="msg" />
      <input type="button" value="submit" name="submit" id="submit"
      onclick=postData()>
    </form>
  </div>
</template>
<script>
// const API_BASE_URL = "https://tgm3-audience-dashboard.herokuapp.com/api/";

export default {
  name: "chat-page",
  methods: {
    async setchat() {
      document.getElementById("twitch-chat-embed").src =
        "https://www.twitch.tv/embed/tetristhegrandmaster3/chat?parent=" +
        window.location.hostname;
    },
    async postData(url) {
      return fetch(url, {
        body: new URLSearchParams(
          new FormData(document.getElementById("sendform"))
        ).toString(),
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
