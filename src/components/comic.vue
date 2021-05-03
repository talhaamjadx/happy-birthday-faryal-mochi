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
      text: `On we are to 'Descendants of the Sun'.
      `
    }
  },
  mixins:[
    description
  ]
};
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