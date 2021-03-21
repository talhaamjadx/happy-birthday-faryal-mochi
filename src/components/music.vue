<template>
  <div>
    <nav class="fixed-top nav1" v-if="false">
      <v-btn icon @click="check1 = !check1">
        <v-icon id="icon1">keyboard_arrow_up</v-icon>
      </v-btn>
    </nav>
    <nav class="fixed-bottom nav2" v-if="check1">
      <v-card color="rgb(255, 255, 255, 0.7)" tile id="card1">
        <section class="player">
          <!-- <h2>{{ current.title }} - {{ current.artist }}</h2> -->
        </section>
        <div class="control">
          <v-icon>mdi-music-note-eighth</v-icon>
          <center><h1>{{ currentLyrics }}</h1></center>
          <v-icon>mdi-music-note-eighth</v-icon>
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
  // props: ["myAudio"],
  computed:{
    ...mapGetters({
      currentLyrics: 'getCurrentLyrics',
      check1: 'getCheck1',
      myAudio: 'getMyAudio'
    })
  },
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      check: true,
      // check1: true,
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
  align-items: center;
}
.playlist {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.song-playing {
  background-color: #f0f0f0;
  color: black;
}
.nav1 {
  display: flex;
  justify-content: center;
}

#card1{
  background-image: radial-gradient(ellipse at top, rgba(191,191,191,0.5) 100px, black);
  /* color: #ffb5b5; */
}

@media only screen and (max-width: 667px) {
  /* #card1{
    height: 100px;
  } */
  #card1 h2 {
    font-size: 40px;
  }
  #card1 h1 {
    /* color: white; */
  }
  #icon1 {
    font-size: 60px;
  }
}
</style>
