<template>
    <div class="container">
        <div class="image">
            <img class="image1" v-lazyload :data-url="require('../assets/mlfts/1.jpg')" alt="">
            <img class="image2" v-lazyload :data-url="require('../assets/mlfts/2.jpg')" alt="">
            <img class="image3" v-lazyload :data-url="require('../assets/mlfts/3.jpg')" alt="">
            <img class="image4" v-lazyload :data-url="require('../assets/mlfts/4.jpg')" alt="">
            <img class="image5" v-lazyload :data-url="require('../assets/mlfts/5.jpg')" alt="">
            <img class="image6" v-lazyload :data-url="require('../assets/mlfts/6.jpg')" alt="">
            <img class="image7" v-lazyload :data-url="require('../assets/mlfts/7.jpg')" alt="">
            <img class="image8" v-lazyload :data-url="require('../assets/mlfts/8.jpg')" alt="">
            <img class="image9" v-lazyload :data-url="require('../assets/mlfts/9.jpg')" alt="">
            <img class="image10" v-lazyload :data-url="require('../assets/mlfts/10.jpg')" alt="">
            <img class="image11" v-lazyload :data-url="require('../assets/mlfts/11.jpg')" alt="">
            <img class="image12" v-lazyload :data-url="require('../assets/mlfts/12.jpg')" alt="">
            <img class="image13" v-lazyload :data-url="require('../assets/mlfts/13.jpg')" alt="">
            <img class="image14" v-lazyload :data-url="require('../assets/mlfts/14.jpg')" alt="">
            <img class="image15" v-lazyload :data-url="require('../assets/mlfts/15.jpg')" alt="">
            <img class="image16" v-lazyload :data-url="require('../assets/mlfts/16.jpg')" alt="">
            <img class="image17" v-lazyload :data-url="require('../assets/mlfts/17.jpg')" alt="">
            <img class="image18" v-lazyload :data-url="require('../assets/mlfts/18.jpg')" alt="">
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
.image18
{
   object-fit: cover;
   max-height: 100%;
   max-width: 100%;
}

</style>