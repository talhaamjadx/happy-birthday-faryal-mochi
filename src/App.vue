<template>
  <div id="app">
    <div
      v-if="false"
      style="
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <section
        style="display: flex; flex-direction: column; align-items: center"
        class="mr-2"
      >
        <h1>Days</h1>
        <h1>{{ days }}</h1>
      </section>
      <h1 class="mt-5 colon">:</h1>
      <section
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 10px;
        "
      >
        <h1>Hours</h1>
        <h1>{{ hours }}</h1>
      </section>
      <h1 class="mt-5 colon">:</h1>
      <section
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 10px;
        "
      >
        <h1>Minutes</h1>
        <h1>{{ minutes }}</h1>
      </section>
      <h1 class="mt-5 colon">:</h1>
      <section
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 10px;
        "
      >
        <h1>Seconds</h1>
        <h1>{{ seconds }}</h1>
      </section>
    </div>
    <div v-else>
      <div :class="stopSpinner ? '' : 'loading'"></div>
      <music-comp
        :myAudio="myAudio"
        @isPlaying="isPlaying = $event"
        @player="player = $event"
      ></music-comp>
      <decoration-comp
        @audioLoaded="stopSpinner = $event"
        @audio="myAudio = $event"
        :player="player"
      ></decoration-comp>
      <button
        v-lazyload
        :data-url="require('./assets/hbd-thumbnail.jpg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 47%;`"
        @click="open('panel1')"
        onclick="blur()"
        :class="['accordion', this['panel1'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">
          Happy Birthday
        </p>
      </button>
      <div ref="panel1" class="panel">
        <second-comp></second-comp>
      </div>
      <button
        :style="`background-image: url('${require('./assets/bts-thumbnail.jpg')}');color: black;
    background-size: cover;
    background-position-y: 28%;`"
        @click="open('panel2')"
        onclick="blur()"
        :class="['accordion', this['panel2'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">BTS</p>
      </button>
      <div ref="panel2" class="panel">
        <third-comp></third-comp>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/1d-thumbnail.jpg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 0%;`"
        @click="open('panel3')"
        onclick="blur()"
        :class="['accordion', this['panel3'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">
          One Direction
        </p>
      </button>
      <div ref="panel3" class="panel">
        <fourth-comp></fourth-comp>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/zayn-thumbnail.jpg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 28%;`"
        @click="open('panel4')"
        onclick="blur()"
        :class="['accordion', this['panel4'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">Zayn</p>
      </button>
      <div ref="panel4" class="panel">
        <fifth-comp></fifth-comp>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/lotbs-thumbnail.jpg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 28%;`"
        @click="open('panel5')"
        onclick="blur()"
        :class="['accordion', this['panel5'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">
          Legend Of The Blue Sea
        </p>
      </button>
      <div ref="panel5" class="panel">
        <lotbs></lotbs>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/dots-thumbnail.jpeg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 28%;`"
        @click="open('panel6')"
        onclick="blur()"
        :class="['accordion', this['panel6'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">
          Descendants Of The Sun
        </p>
      </button>
      <div ref="panel6" class="panel">
        <dots></dots>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/hdl-thumbnail.jpg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 35%;`"
        @click="open('panel7')"
        onclick="blur()"
        :class="['accordion', this['panel7'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">
          Hotel Del Luna
        </p>
      </button>
      <div ref="panel7" class="panel">
        <hdl></hdl>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/mlfts-thumbnail.jpg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 28%;`"
        @click="open('panel8')"
        onclick="blur()"
        :class="['accordion', this['panel8'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">
          My Love From The Star
        </p>
      </button>
      <div ref="panel8" class="panel">
        <mlfts></mlfts>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/memes-thumbnail.jpg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 60%;`"
        @click="open('panel9')"
        onclick="blur()"
        :class="['accordion', this['panel9'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">Memes</p>
      </button>
      <div ref="panel9" class="panel">
        <memes></memes>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/chats-thumbnail.png')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 28%;`"
        @click="open('panel10')"
        onclick="blur()"
        :class="['accordion', this['panel10'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">Chats</p>
      </button>
      <div ref="panel10" class="panel">
        <chats></chats>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/cheese-thumbnail.jpg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 20%;`"
        @click="open('panel11')"
        onclick="blur()"
        :class="['accordion', this['panel11'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">Cheesiness</p>
      </button>
      <div ref="panel11" class="panel">
        <flirting></flirting>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/stickers-thumbnail.jpg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 40%;`"
        @click="open('panel12')"
        onclick="blur()"
        :class="['accordion', this['panel12'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">Stickers</p>
      </button>
      <div ref="panel12" class="panel">
        <sticker></sticker>
      </div>
      <!-- mtalha-thumbnail.png -->
      <button
        v-lazyload
        :data-url="require('./assets/mtalha-thumbnail.png')"
        :style="`color: black;
    background-size: cover;
    background-position-x: 90%;`"
        @click="open('panel13')"
        onclick="blur()"
        :class="['accordion', this['panel13'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">m_talha789</p>
      </button>
      <div ref="panel13" class="panel">
        <mtalha-789></mtalha-789>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/comic-thumbnail.jpg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 28%;`"
        @click="open('panel14')"
        onclick="blur()"
        :class="['accordion', this['panel14'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">Comic</p>
      </button>
      <div ref="panel14" class="panel">
        <comic></comic>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/parents-thumbnail.jpg')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 28%;`"
        @click="open('panel15')"
        onclick="blur()"
        :class="['accordion', this['panel15'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">Parents</p>
      </button>
      <div ref="panel15" class="panel">
        <inlaws></inlaws>
      </div>
      <button
        v-lazyload
        :data-url="require('./assets/hearts-thumbnail.png')"
        :style="`color: black;
    background-size: cover;
    background-position-y: 28%;`"
        @click="open('panel16')"
        onclick="blur()"
        :class="['accordion', this['panel16'] ? 'active' : '']"
      >
        <p style="background: rgba(0, 0, 0, 0.5); color: white">Hearts</p>
      </button>
      <div ref="panel16" class="panel">
        <heart></heart>
      </div>
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

export default {
  data: function () {
    return {
      stopSpinner: false,
      panel1: false,
      panel2: false,
      panel3: false,
      panel4: false,
      panel5: false,
      panel6: false,
      panel7: false,
      panel8: false,
      panel9: false,
      panel10: false,
      panel11: false,
      panel12: false,
      panel13: false,
      panel14: false,
      panel15: false,
      panel16: false,
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
    open(section) {
      this[section] = !this[section];
      if (this.$refs[section].style.maxHeight) {
        this.$refs[section].style.maxHeight = null;
      } else {
        this.$refs[section].style.maxHeight = "12676px";
      }
    },
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
  watch: {
    myAudio() {
      console.log("here");
    },
  },
  created() {
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

.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 60px;
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active,
.accordion:hover {
  background-color: #ccc;
}

.panel {
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
}
</style>
