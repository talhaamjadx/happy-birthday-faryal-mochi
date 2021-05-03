<template>
  <div class="container">
    <center>
      <p>
        {{ text }}
      </p>
    </center>
  </div>
</template>

<script>
export default {
  props:[
    'text'
  ]
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  color: white;
}
p {
  text-align: justify;
  padding: 1rem 1rem;
}
</style>