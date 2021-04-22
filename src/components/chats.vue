<template>
  <div class="container">
    <div class="image">
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image1"
          v-lazyload
          :data-url="require('../assets/chats/1.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image2"
          v-lazyload
          :data-url="require('../assets/chats/2.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image3"
          v-lazyload
          :data-url="require('../assets/chats/3.png')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image4"
          v-lazyload
          :data-url="require('../assets/chats/4.png')"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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