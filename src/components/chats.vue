<template>
<div>
  <Description :text="text"/>
  <div class="container">
    <div class="image">
      <div class="image-container">
        <span class="text-over"> 💗💗💗💗💗💗 </span>
        <img
          class="image1"
          v-lazyload
          :data-url="require('../assets/chats/1.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> IDK Faryal Left </span>
        <img
          class="image2"
          v-lazyload
          :data-url="require('../assets/chats/2.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> It is bamboo copter </span>
        <img
          class="image3"
          v-lazyload
          :data-url="require('../assets/chats/3.png')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Guess what? what's up? </span>
        <img
          class="image4"
          v-lazyload
          :data-url="require('../assets/chats/4.png')"
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
      text: `Just some little snippets of our amazing times together
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
.image4 {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
}
</style>