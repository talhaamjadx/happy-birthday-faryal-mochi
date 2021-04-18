<template>
    <div class="container">
        <div class="image">
            <img class="image1" v-lazyload :data-url="require('../assets/flirting/1.jpg')" alt="">
            <img class="image2" v-lazyload :data-url="require('../assets/flirting/2.jpeg')" alt="">
            <img class="image3" v-lazyload :data-url="require('../assets/flirting/3.jpg')" alt="">
            <img class="image4" v-lazyload :data-url="require('../assets/flirting/4.jpg')" alt="">
            <img class="image5" v-lazyload :data-url="require('../assets/flirting/5.jpg')" alt="">
            <img class="image6" v-lazyload :data-url="require('../assets/flirting/6.jpg')" alt="">
            <img class="image7" v-lazyload :data-url="require('../assets/flirting/7.jpg')" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    padding: 0;
    display: flex;
}

.image{
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
.image7
{
   object-fit: cover;
   max-height: 100%;
   max-width: 100%;
}

</style>