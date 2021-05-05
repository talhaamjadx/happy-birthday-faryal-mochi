<template>
  <div class="contain">
    <Description :text="text" />
    <div class="container">
      <div class="image">
        <div class="image-container">
          <span class="text-over"> 🤣🤣🤣🤣🤣🤣 </span>
          <img
            class="image25"
            v-lazyload
            :data-url="require('../assets/memes/25.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> Take care of yourself though. There are some predators out there. I remain concerned about you. If it was upto i'll create a bubble around you to protect you from everyone </span>
          <img
            class="image26"
            v-lazyload
            :data-url="require('../assets/memes/26.jpeg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> Sometimes i wish the anywhere door was real. That way i could reach you at any moment. See you at any moment </span>
          <img
            class="image27"
            v-lazyload
            :data-url="require('../assets/memes/27.png')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> I guess you are entering a new ear in your life </span>
          <img
            class="image28"
            v-lazyload
            :data-url="require('../assets/memes/28.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> jO BaAt hAi! </span>
          <img
            class="image29"
            v-lazyload
            :data-url="require('../assets/memes/29.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> I still love my pillow though. However evertime i told you that i loved my pillow, i was saying i love you every one of those times! </span>
          <img
            class="image30"
            v-lazyload
            :data-url="require('../assets/memes/30.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> Our common love for noodles </span>
          <img
            class="image32"
            v-lazyload
            :data-url="require('../assets/memes/32.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> this! 🤣 </span>
          <img
            class="image33"
            v-lazyload
            :data-url="require('../assets/memes/33.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> And this aunty from 'Abhi to mein jawaan hun' </span>
          <img
            class="image34"
            v-lazyload
            :data-url="require('../assets/memes/34.png')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> 🤣 </span>
          <img
            class="image35"
            v-lazyload
            :data-url="require('../assets/memes/35.png')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> 🤣 </span>
          <img
            class="image36"
            v-lazyload
            :data-url="require('../assets/memes/36.png')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> 🤣 </span>
          <img
            class="image37"
            v-lazyload
            :data-url="require('../assets/memes/37.png')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> 🤣 </span>
          <img
            class="image38"
            v-lazyload
            :data-url="require('../assets/memes/38.png')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> All the times i have teased you with biryani pictures </span>
          <img
            class="image39"
            v-lazyload
            :data-url="require('../assets/memes/39.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> Just as cute as you </span>
          <img
            class="image40"
            v-lazyload
            :data-url="require('../assets/memes/40.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> Who is this dude again? 😆 </span>
          <img
            class="image41"
            v-lazyload
            :data-url="require('../assets/memes/41.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> remember that joke? The teacher asked your friend. Where'd Faryal go? </span>
          <img
            class="image42"
            v-lazyload
            :data-url="require('../assets/memes/42.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> Oh kurkure </span>
          <img
            class="image43"
            v-lazyload
            :data-url="require('../assets/memes/43.jpg')"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import description from "../mixins/description";
export default {
  data() {
    return {
      text: `When you smile and laugh, i smile with you. When you are sad i am sad as well. But i always try to make you laugh, but i will be there with you even when the times are hard
      `,
    };
  },
  mixins: [description],
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
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
.image6,
.image7,
.image8,
.image9,
.image10,
.image11,
.image12,
.image13,
.image14,
.image15,
.image16,
.image17,
.image18,
.image19,
.image20,
.image21,
.image22,
.image23,
.image24,
.image25,
.image26,
.image27,
.image28,
.image29,
.image30,
.image31,
.image32,
.image33,
.image34,
.image35,
.image36,
.image37,
.image38,
.image39,
.image40,
.image41,
.image42,
.image43 {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
}
</style>