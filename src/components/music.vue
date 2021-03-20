<template>
  <div>
    <nav class="fixed-top nav1" v-if="check1">
      <v-btn icon @click="check1 = !check1">
        <v-icon id="icon1">keyboard_arrow_up</v-icon>
      </v-btn>
    </nav>
    <nav class="fixed-bottom nav2" v-else>
      <v-card outlined tile dark id="card1">
        <section class="player">
          <p>{{ count }}</p>
          <!-- <h2>{{ current.title }} - {{ current.artist }}</h2> -->
        </section>
        <div class="control">
          <v-btn @click="prev" icon x-large>
            <v-icon id="icon1">skip_previous</v-icon>
          </v-btn>
          <v-btn icon class="ml-4" v-if="!isPlaying" @click="play" x-large>
            <v-icon id="icon1">play_arrow</v-icon>
          </v-btn>
          <v-btn class="ml-4" v-else @click="pause" icon x-large>
            <v-icon id="icon1">pause</v-icon>
          </v-btn>
          <v-btn class="ml-4" @click="next" icon x-large>
            <v-icon id="icon1">skip_next</v-icon>
          </v-btn>
          <v-btn icon x-large @click="check = !check" class="ml-5">
            <v-icon id="icon1">queue_music</v-icon>
          </v-btn>
          <v-btn icon x-large @click="check1 = !check1" class="ml-5">
            <v-icon id="icon1">keyboard_arrow_down</v-icon>
          </v-btn>
        </div>
        <section class="playlist" v-if="!check">
          <h2>Playlist</h2>
          <button
            v-for="song in songs"
            :key="song.src"
            @click="play(song)"
            :class="song.src == current.src ? 'song-playing' : 'song'"
          >
            <v-col>
              <h2>{{ song.title }} - {{ song.artist }}</h2>
            </v-col>
          </button>
        </section>
      </v-card>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["myAudio"],
  computed:{
    ...mapGetters({
      count: 'getIncrement'
    })
  },
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      check: true,
      check1: true,
      songs: [
        {
          title: "Louder Than Bombs",
          artist: "BTS",
          src: require(".././assets/bts.mp3"),
        },
        {
          title: "Lose You To Love Me",
          artist: "Selena Gomez",
          src: require(".././assets/selena.mp3"),
        },
        {
          title: "Only The Brave",
          artist: "Louis Tomlinson",
          src: require(".././assets/louis.mp3"),
        },
        {
          title: "Promise",
          artist: "Jimin",
          src: require(".././assets/promise.mp3"),
        },
        {
          title: "Spaces",
          artist: "One Direction",
          src: require(".././assets/spaces.mp3"),
        },
        {
          title: "Selfish",
          artist: "Madison Beer",
          src: require(".././assets/selfish.mp3"),
        },
        {
          title: "Falling",
          artist: "Trevor Daniel",
          src: require(".././assets/falling.mp3"),
        },
      ],
      player: new Audio(),
    };
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      if (this.myAudio != null) {
        this.myAudio.pause();
      }
      this.player.play();
      this.isPlaying = true;
      this.$emit("isPlaying", this.isPlaying);
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    this.$emit("player", this.player);
  },
};
</script>

<style scoped>
header {
  background-color: black;
  display: flex;
  justify-content: center;
  color: white;
}
.player {
  display: flex;
  justify-content: center;
}
.control {
  height: 120px;
  display: flex;
  justify-content: center;
}
.playlist {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.song-playing {
  background-color: #f0f0f0;
  color: black;
}
.nav1 {
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 720px) {
  /* #card1{
    height: 150px;
  } */
  #card1 h2 {
    font-size: 40px;
  }
  #icon1 {
    font-size: 60px;
  }
}
</style>
