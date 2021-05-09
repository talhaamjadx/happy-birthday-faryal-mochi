<template>
<div>
  <Description :text="text" />
  <div class="container">
    <div class="image">
      <div class="image-container">
        <span class="text-over"> I realized that i was sending these to you </span>
        <img
          class="image2"
          v-lazyload
          :data-url="require('../assets/hdl/2.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> because i wanted to say to you what the characters were saying </span>
        <img
          class="image1"
          v-lazyload
          :data-url="require('../assets/hdl/1.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> How can a person go from this </span>
        <img
          class="image3"
          v-lazyload
          :data-url="require('../assets/hdl/3.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> to this! </span>
        <img
          class="image4"
          v-lazyload
          :data-url="require('../assets/hdl/4.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> That's me evertime i see you &#x1f495; </span>
        <img
          class="image5"
          v-lazyload
          :data-url="require('../assets/hdl/5.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> I will not forget you either. </span>
        <img
          class="image9"
          v-lazyload
          :data-url="require('../assets/hdl/9.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Because you will be here for me. Till my last breath, you will be the only one in my heart </span>
        <img
          class="image10"
          v-lazyload
          :data-url="require('../assets/hdl/10.jpg')"
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
      text: `On we are to 'Hotel Del Luna'. They are both different people. I guess in this show we see how fate can bring two people together. He was brought to her for her to change. Like you are here for me. And you have made a profound change in me.
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
.image10 {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
}
</style>