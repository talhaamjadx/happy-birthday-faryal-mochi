<template>
<div>
    <Description :text="text" />
    <div class="container">
        <div class="image">
            <img class="image1" v-lazyload :data-url="require('../assets/everything-else/comic.jpg')" alt="">
        </div>
    </div>
</div>
</template>

<script>
import description from "../mixins/description";
export default {
  data(){
    return{
      text: `I told you with this comic that you are locked in my heart and you cannot ever leave. And i promise you that you will never leave this heart 💕
      `
    }
  },
  mixins:[
    description
  ]
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

.image1
{
   object-fit: cover;
   max-height: 100%;
   max-width: 100%;
}

</style>