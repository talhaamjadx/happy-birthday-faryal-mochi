<template>
<div>
  <Description :text="text" />
  <div class="container">
    <div class="image">
      <div class="image-container">
          <span class="text-over"> This is one amazing image. Allah inko aesay he khush rakhay </span>
      <img
        class="image1"
        v-lazyload
        :data-url="require('../assets/everything-else/inlaws/1.jpg')"
        alt=""
      />
      <img
        class="image2"
        v-lazyload
        :data-url="require('../assets/everything-else/inlaws/2.jpg')"
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
      text: `Parents are Allah's most gracious blessing. I wish that, may Allah grant health and longevity to both your parents and mine 😇
      `
    }
  },
  mixins:[
    description
  ]
};</script>

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
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 100%;
}

.image1,
.image2 {
  object-fit: cover;
  max-height: 100%;
  max-width: 50%;
}
</style>