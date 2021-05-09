<template>
    <div ref="contain" class="container">
      <Description :text="text"/>
      <div class="image">
        <div class="image-container">
          <span class="text-over">Remember when they dressed Tae-oh like a girl? &#x1f923;</span>
          <img
            class="image1"
            v-lazyload
            :data-url="require('../assets/lotbs/1.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> Probably the best scene of the show. When Hoe Joon Jae reunited with his mother! &#x1f496; </span>
          <img
            class="image2"
            v-lazyload
            :data-url="require('../assets/lotbs/2.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> This dude started out as a good dude but his evil father and mother turned him into a monster </span>
          <img
            class="image3"
            v-lazyload
            :data-url="require('../assets/lotbs/3.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> I truly felt that when she left. The thought of losing you is just too much &#x1f494; </span>
          <img
            class="image4"
            v-lazyload
            :data-url="require('../assets/lotbs/4.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> I hope one day we'll watch this show again but together this time. </span>
          <img
            class="image5"
            v-lazyload
            :data-url="require('../assets/lotbs/5.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> I have spent some amazing time with you. And when she left her biggest pearl which was her happiest moment, it reminded me of you. But she had it once. I have it each day, but not from crying but from happiness! &#x1f498; </span>
          <img
            class="image6"
            v-lazyload
            :data-url="require('../assets/lotbs/6.jpg')"
            alt=""
          />
        </div>
      </div>
    </div>
</template>

<script>
import description from "../mixins/description";
export default {
  data(){
    return{
      text: "What can I even say about 'Legend of The Blue Sea'? I think it is my favourite K-drama of them all. Actually no, scratch that! It is my favourite show of all time. The story and characters are all secondary. There was something about this show that made me fall for you more and more as it progressed and the dramatic music is the theme song of our story, which like the ending from the show will be happy as well. We might face some Ma-Deo-Youngs along the way. But we will break through them all! IN SHA ALLAH!"
    }
  },
  mixins:[
    description
  ]
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  flex-direction: column;
  padding: 0;
  display: flex;
}

.image {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 100%;
}

.image1,
.image2,
.image3,
.image4,
.image5,
.image6 {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
}
</style>