<template>
  <div id="app">
    <div
      v-if="false"
      style="height: 100vh; display:flex; justify-content:center; align-items:center"
      
    >
      <section
        style="display: flex; flex-direction: column; align-items:center"
        class="mr-2"
      >
        <h1>Days</h1>
        <h1>{{ days }}</h1>
      </section>
      <h1 class="mt-5 colon">:</h1>
      <section
        style="display: flex; flex-direction: column; align-items:center; margin-left:10px"
      >
        <h1>Hours</h1>
        <h1>{{ hours }}</h1>
      </section>
      <h1 class="mt-5 colon">:</h1>
      <section
        style="display: flex; flex-direction: column; align-items:center;  margin-left:10px"
      >
        <h1>Minutes</h1>
        <h1>{{ minutes }}</h1>
      </section>
      <h1 class="mt-5 colon">:</h1>
      <section
        style="display: flex; flex-direction: column; align-items:center;  margin-left:10px"
      >
        <h1>Seconds</h1>
        <h1>{{ seconds }}</h1>
      </section>
    </div>
    <div>
      <music-comp
        :myAudio="myAudio"
        @isPlaying="isPlaying = $event"
        @player="player = $event"
      ></music-comp>
      <decoration-comp
        @audio="myAudio = $event"
        :player="player"
      ></decoration-comp>
      <second-comp></second-comp>
      <third-comp></third-comp>
      <fourth-comp></fourth-comp>
      <fifth-comp></fifth-comp>
      <lotbs></lotbs>
      <dots></dots>
      <hdl></hdl>
      <mlfts></mlfts>
      <memes></memes>
      <chats></chats>
      <flirting></flirting>
      <sticker></sticker>
      <mtalha-789></mtalha-789>
      <comic></comic>
      <inlaws></inlaws>
      <heart></heart>
    </div>
  </div>
</template>

<script>
import second from "./components/second.vue";
import decoration from "./components/decorations.vue";
import fourth from "./components/fourth.vue";
import music from "./components/music.vue";
import third from "./components/third.vue";
import fifth from "./components/fifth.vue";
import lotbs from "./components/lotbs.vue";
import dots from "./components/dots.vue";
import hdl from "./components/hdl.vue";
import mlfts from "./components/mlfts.vue";
import memes from "./components/memes.vue";
import chats from "./components/chats.vue";
import flirting from "./components/flirting.vue";
import sticker from "./components/sticker.vue";
import mtalha789 from "./components/mtalha789.vue";
import comic from "./components/comic.vue";
import inlaws from "./components/inlaws.vue";
import heart from "./components/heart.vue";
import AsyncPreloader from "async-preloader"; 

export default {
  data: function() {
    return {
      check: true,
      hours: "",
      days: "",
      minutes: "",
      seconds: "",
      counter: 0,
      myAudio: null,
      isPlaying: null,
      player: null,
    };
  },
  methods: {
    CountdownClock() {
      var a = new Date();
      var b = new Date("05/10/" + a.getFullYear());
      var diff = b.getTime() - a.getTime();

      const isSurpassed = Math.floor(
        diff / (1000 * 60 * 60 * 24)
      ); /* check to see if the date has surpassed the target date, will return a negative value ( < 0 ) 
          if the current date surpasses the target date*/
      const hours_allowed = Math.floor(diff / (1000 * 60 * 60));
      /* check that will allow us to see the birthday screen
       for 24 hours only*/

      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (isSurpassed < 0) {
        this.check = false;
        if (hours_allowed < -24) {
          this.check = true;
          var c = new Date("5/10/" + Number(a.getFullYear() + 1));
          var new_diff = c.getTime() - a.getTime();
          this.days = Math.floor(new_diff / (1000 * 60 * 60 * 24));
          this.hours = Math.floor(
            (new_diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          this.minutes = Math.floor(
            (new_diff % (1000 * 60 * 60)) / (1000 * 60)
          );
          this.seconds = Math.floor((new_diff % (1000 * 60)) / 1000);
        }
      }
    },
  },
  watch:{
    myAudio(){
      console.log("here")
    }
  },
  created() {
    // const audioContext = new AudioContext();
    const pItem = AsyncPreloader.loadAudio({
      src: require("./assets/garden.mp3"),
      body: "arrayBuffer",
    });
    pItem.then(item => console.log({item}))
    setInterval(this.CountdownClock, 0);
  },
  components: {
    inlaws,
    comic,
    mtalha789,
    sticker,
    flirting,
    chats,
    memes,
    mlfts,
    hdl,
    dots,
    lotbs,
    heart,
    "second-comp": second,
    "decoration-comp": decoration,
    "fourth-comp": fourth,
    "music-comp": music,
    "third-comp": third,
    "fifth-comp": fifth,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 667px) {
  h1 {
    font-size: 20px;
  }
  .colon {
    margin-bottom: 27px;
  }
}
</style>
