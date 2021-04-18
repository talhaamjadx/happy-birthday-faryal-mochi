<template>
    <div class="container">
        <div class="image">
            <img class="image1" v-lazyload :data-url="require('../assets/everything-else/mtalha789/1.jpg')" alt="">
            <img class="image2" v-lazyload :data-url="require('../assets/everything-else/mtalha789/2.jpg')" alt="">
            <img class="image3" v-lazyload :data-url="require('../assets/everything-else/mtalha789/3.jpg')" alt="">
            <img class="image4" v-lazyload :data-url="require('../assets/everything-else/mtalha789/4.jpg')" alt="">
            <img class="image5" v-lazyload :data-url="require('../assets/everything-else/mtalha789/5.jpg')" alt="">
            <img class="image6" v-lazyload :data-url="require('../assets/everything-else/mtalha789/6.jpg')" alt="">
            <img class="image7" v-lazyload :data-url="require('../assets/everything-else/mtalha789/7.jpg')" alt="">
            <img class="image8" v-lazyload :data-url="require('../assets/everything-else/mtalha789/8.jpg')" alt="">
            <img class="image9" v-lazyload :data-url="require('../assets/everything-else/mtalha789/9.jpg')" alt="">
            <img class="image10" v-lazyload :data-url="require('../assets/everything-else/mtalha789/10.jpg')" alt="">
            <img class="image11" v-lazyload :data-url="require('../assets/everything-else/mtalha789/11.jpg')" alt="">
            <img class="image12" v-lazyload :data-url="require('../assets/everything-else/mtalha789/12.jpg')" alt="">
            <img class="image13" v-lazyload :data-url="require('../assets/everything-else/mtalha789/13.jpg')" alt="">
            <img class="image14" v-lazyload :data-url="require('../assets/everything-else/mtalha789/14.jpg')" alt="">
            <img class="image15" v-lazyload :data-url="require('../assets/everything-else/mtalha789/15.jpg')" alt="">
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
.image15
{
   object-fit: cover;
   max-height: 100%;
   max-width: 100%;
}

</style>