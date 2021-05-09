<template>
<div>
  <Description :text="text" />
  <div class="container">
    <div class="image">
      <div class="image-container">
        <span class="text-over"> You on the other hand are not Jun Ji Hyun either. Because she has nothing compared to you. She should be as jeolous of you as Yoo se-mi was jeolous of cheon song yi </span>
        <img
          class="image1"
          v-lazyload
          :data-url="require('../assets/mlfts/1.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> She's Hoe Joon Jae's mother </span>
        <img
          class="image2"
          v-lazyload
          :data-url="require('../assets/mlfts/2.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> She's Se-Hwa's friend </span>
        <img
          class="image3"
          v-lazyload
          :data-url="require('../assets/mlfts/3.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Because of you my 'if-else statements' and 'for-loops' are all mixed up. Sorry these are programming terms. Khair what i mean is that my mind is preoccupied by your thoughts! </span>
        <img
          class="image4"
          v-lazyload
          :data-url="require('../assets/mlfts/4.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Love this dude </span>
        <img
          class="image5"
          v-lazyload
          :data-url="require('../assets/mlfts/5.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Hate this dude </span>
        <img
          class="image6"
          v-lazyload
          :data-url="require('../assets/mlfts/6.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over">I will never make you cry.  </span>
        <img
          class="image7"
          v-lazyload
          :data-url="require('../assets/mlfts/7.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> and for the times i did. I am really really sorry </span>
        <img
          class="image8"
          v-lazyload
          :data-url="require('../assets/mlfts/8.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> I too think </span>
        <img
          class="image9"
          v-lazyload
          :data-url="require('../assets/mlfts/9.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> that i cannot imagine my life without you! </span>
        <img
          class="image10"
          v-lazyload
          :data-url="require('../assets/mlfts/10.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> If i could stop time forever.  </span>
        <img
          class="image11"
          v-lazyload
          :data-url="require('../assets/mlfts/11.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> It will surely a moment in time with you </span>
        <img
          class="image12"
          v-lazyload
          :data-url="require('../assets/mlfts/12.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Just read the subtitles. She perfectly sums it up for me </span>
        <img
          class="image13"
          v-lazyload
          :data-url="require('../assets/mlfts/13.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> &#x1f498; &#x1f498; &#x1f498; &#x1f498; &#x1f498; &#x1f498; </span>
        <img
          class="image14"
          v-lazyload
          :data-url="require('../assets/mlfts/14.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> I can't tell you how i feel. when the thought of not being with you </span>
        <img
          class="image15"
          v-lazyload
          :data-url="require('../assets/mlfts/15.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> crosses my mind </span>
        <img
          class="image16"
          v-lazyload
          :data-url="require('../assets/mlfts/16.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> I'll fight with you and for you </span>
        <img
          class="image17"
          v-lazyload
          :data-url="require('../assets/mlfts/17.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Nothing can take away from me, the time i've spent with you and will hopefully will spend with you.  </span>
        <img
        class="image18"
        v-lazyload
        :data-url="require('../assets/mlfts/18.jpg')"
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
  data(){
    return{
      text: `I always imagine you and me as the characters of the show for some reason 😆. I ain't an alien but one thing i can assure you of is that my love for you is alien. Because no human can love someone as much as i love you'.
      `
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
.image18 {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
}
</style>