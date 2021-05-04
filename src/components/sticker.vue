<template>
<div>
  <Description :text="text" />
  <div class="container">
    <div class="image">
      <div class="image-container">
        <img
          class="image1"
          v-lazyload
          :data-url="require('../assets/stickers/1.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image2"
          v-lazyload
          :data-url="require('../assets/stickers/2.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image3"
          v-lazyload
          :data-url="require('../assets/stickers/3.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image4"
          v-lazyload
          :data-url="require('../assets/stickers/4.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image5"
          v-lazyload
          :data-url="require('../assets/stickers/5.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image6"
          v-lazyload
          :data-url="require('../assets/stickers/6.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image7"
          v-lazyload
          :data-url="require('../assets/stickers/7.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image8"
          v-lazyload
          :data-url="require('../assets/stickers/8.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image9"
          v-lazyload
          :data-url="require('../assets/stickers/9.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image10"
          v-lazyload
          :data-url="require('../assets/stickers/10.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image11"
          v-lazyload
          :data-url="require('../assets/stickers/11.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image12"
          v-lazyload
          :data-url="require('../assets/stickers/12.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image13"
          v-lazyload
          :data-url="require('../assets/stickers/13.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image14"
          v-lazyload
          :data-url="require('../assets/stickers/14.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image15"
          v-lazyload
          :data-url="require('../assets/stickers/15.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image16"
          v-lazyload
          :data-url="require('../assets/stickers/16.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image17"
          v-lazyload
          :data-url="require('../assets/stickers/17.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image18"
          v-lazyload
          :data-url="require('../assets/stickers/18.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image19"
          v-lazyload
          :data-url="require('../assets/stickers/19.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image20"
          v-lazyload
          :data-url="require('../assets/stickers/20.webp')"
          alt=""
        />
      </div>
      <div class="image-container">
        <img
          class="image21"
          v-lazyload
          :data-url="require('../assets/stickers/21.webp')"
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
      text: `All the stickers you've sent me
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
.image18,
.image19,
.image20,
.image21 {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
}
</style>