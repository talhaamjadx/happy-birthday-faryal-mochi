<template>
    <div class="main">
        <Description :text="text" />
        <img v-for="i in 6209" :key="i" height="20px" width="20px" v-lazyload :data-url="require('../assets/heart.png')" alt="">
    </div>
</template>

<script>
import description from "../mixins/description";
export default {
  data(){
    return{
      text: `There are 6209 hearts in this section. Since there are 6209 says in 17 years and it's your 17th birthday, I put a heart for each day. I really wanna put an infinite numbers of hearts here. I hope you live a long life. with me
      `
    }
  },
  mixins:[
    description
  ]
};
</script>

<style scoped>
.main{
    /* height: 100vh; */
    max-height: 650px;
}
</style>