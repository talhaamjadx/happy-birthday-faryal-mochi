<template>
<div>
  <Description :text="text" />
  <div class="container">
    <div class="image">
      <div class="image-container">
        <span class="text-over"> 'cutecumber' should be your middlename </span>
        <img
          class="image1"
          v-lazyload
          :data-url="require('../assets/flirting/1.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Like jimin is everyone else's mochi. You are my mochi(jootay seenay wala nhi &#x1f602;) </span>
        <img
          class="image2"
          v-lazyload
          :data-url="require('../assets/flirting/2.jpeg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> &#x1f49e; &#x1f49e; &#x1f49e; &#x1f49e; &#x1f49e; &#x1f49e; </span>
        <img
          class="image3"
          v-lazyload
          :data-url="require('../assets/flirting/3.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> if being cute was a crime, you'll be under a life sentence </span>
        <img
          class="image4"
          v-lazyload
          :data-url="require('../assets/flirting/4.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Is that you? </span>
        <img
          class="image5"
          v-lazyload
          :data-url="require('../assets/flirting/5.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> If I ever get the chance to cook anything for you. It will be french fries using this potato </span>
        <img
          class="image6"
          v-lazyload
          :data-url="require('../assets/flirting/6.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Look at zimal though &#x1f60d; </span>
        <img
          class="image7"
          v-lazyload
          :data-url="require('../assets/flirting/7.jpg')"
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
      text: `Warning! There is some cheesy stuff coming! What more can I say about you. Your eyes are just mesmerizing. You can hypnotize people with them. You know NASA does research on our universe, how big and deep it is, ukwis. And it takes 4 lightyears to reach the nearest star. Which is less than the distance between the lens of your eyes and the retina. Get it? Becuase your eyes are very deep. I realized after writing this that it's probably the lamest thing i've ever said
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
.image7 {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
}
</style>