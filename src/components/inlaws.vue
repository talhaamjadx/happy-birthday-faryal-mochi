<template>
<div>
  <Description :text="text" />
  <div class="container">
    <div class="image">
      <div class="image-container">
          <span class="text-over"> Tae-oh </span>
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
      text: `On we are to 'Descendants of the Sun'.
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