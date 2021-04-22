<template>
  <div class="container">
    <div class="image">
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image1"
          v-lazyload
          :data-url="require('../assets/hdl/1.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image2"
          v-lazyload
          :data-url="require('../assets/hdl/2.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image3"
          v-lazyload
          :data-url="require('../assets/hdl/3.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image4"
          v-lazyload
          :data-url="require('../assets/hdl/4.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image5"
          v-lazyload
          :data-url="require('../assets/hdl/5.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image6"
          v-lazyload
          :data-url="require('../assets/hdl/6.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image7"
          v-lazyload
          :data-url="require('../assets/hdl/7.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image8"
          v-lazyload
          :data-url="require('../assets/hdl/8.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image9"
          v-lazyload
          :data-url="require('../assets/hdl/9.jpg')"
          alt=""
        />
      </div>
      <div class="image-container">
        <span class="text-over"> Tae-oh </span>
        <img
          class="image10"
          v-lazyload
          :data-url="require('../assets/hdl/10.jpg')"
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