<template>
  <div class="container">
    <div class="card border-info" style="width: 28rem;min-height: 24rem; ">
      <div class="card-body">
        <h5 class="card-title text-center">Vue chat app</h5>
        <p class="card-text text-center">Welcome to socket chatting.</p>
        <div class="innerContainer">
          <div class="msgSeen" v-for="(listMsg,index) in messages" :key="index">
            <div class="scroller">
              <span>{{listMsg.message}}</span>
            </div>
          </div>
        </div>
        <!-- <input type="text" placeholder="Message" > -->
        <div class="card-footer">
          <form @submit.prevent="send">
            <input type="text" placeholder="Message" v-model="message" />
            <button type="submit" class="btn btn-dark">Send</button>
          </form>
        </div>

        <!-- <a href="#" class="btn btn-dark">Send</a> -->
      </div>
    </div>
  </div>
</template>

 
<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      message: "",
      messages: [],
      socket: io("http://localhost:3000")
    };
  },
  methods: {
    send(e) {
      // console.log(this.message);
      e.preventDefault();
      this.socket.emit("SEND MESSAGE", {
        message: this.message
      });
    }
  },

  mounted() {
    this.socket.on("MESSAGE", data => {
      this.messages.push(data);
      console.log("data", data);
    });
  }
};
</script>


<style scoped>
/* .scroller {
  overflow-y: scroll;
}
.sendMsgForm {
  position: relative;
} */

.innerContainer {
  margin-left: 0px;
  max-width: 1000px;
  min-width: 200px;
  border-radius: 8px;
  height: 300px;
  padding-right: 100px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-top: 10px;
  background-color: #c2cdea;
  /* opacity: 0.8; */
  overflow-y: scroll;
}
</style>