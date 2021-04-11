<template>
    <div class="main">
        <img v-for="i in 6209" :key="i" height="20px" width="20px" v-lazyload :data-url="require('../assets/heart.png')" alt="">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.main{
    /* height: 100vh; */
    max-height: 650px;
}
</style>