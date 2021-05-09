<template>
  <div>
    <Description :text="text" />
    <div class="container">
      <div class="image">
        <div class="image-container">
          <span class="text-over"> I still think she treated him unfairly. I know your take on this. </span>
          <img
            class="image1"
            v-lazyload
            :data-url="require('../assets/dots/1.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> I do feel fear being apart from you. </span>
          <img
            class="image2"
            v-lazyload
            :data-url="require('../assets/dots/2.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> I'll chase you to the end of this world </span>
          <img
            class="image3"
            v-lazyload
            :data-url="require('../assets/dots/3.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> Look they predicted coronavirus &#x1f62e; </span>
          <img
            class="image4"
            v-lazyload
            :data-url="require('../assets/dots/4.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> I remember i asked you then and you didn't know. Do you know now? </span>
          <img
            class="image5"
            v-lazyload
            :data-url="require('../assets/dots/5.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> Their relationship was so amazing. They both felt it but never said it. They both cared for eatch other. I guess we both knew as well </span>
          <img
            class="image6"
            v-lazyload
            :data-url="require('../assets/dots/6.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> My heart shakes evertime i check my phone and there's a message from you. </span>
          <img
            class="image7"
            v-lazyload
            :data-url="require('../assets/dots/7.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> For me there is only you, you, you and a thousand times 'YOU'</span>
          <img
            class="image8"
            v-lazyload
            :data-url="require('../assets/dots/8.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> Just read the subtitles. What can i even say </span>
          <img
            class="image9"
            v-lazyload
            :data-url="require('../assets/dots/9.jpg')"
            alt=""
          />
        </div>
        <div class="image-container">
          <span class="text-over"> I remember i wanted to do this with you when you came here. But you would've been mad. I told you as well. </span>
          <img
            class="image10"
            v-lazyload
            :data-url="require('../assets/dots/10.jpg')"
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
      text: `On we are to 'Descendants of the Sun'. I don't know what kind of analogy i can derive out from this show. Since this show is about fighting. Just know that i will fight the world for you. Because you mean that much to me.
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
.image10 {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
}
</style>