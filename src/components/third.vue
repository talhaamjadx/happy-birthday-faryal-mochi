<template>
  <div>
    <section v-lazyload :data-url="require('.././assets/bts1.jpg')">
      <div
        style="background-color: rgba(0,0,0,0.5); padding: 10px 10px 10px 10px"
      >
        <center>
          <h1 :class="{ hello: check }">
            Do you like a little BTS touch? I know i used to make fun of you,
            but i think that we should understand what are the interests of
            people we care about. Sorry about covering their faces tho
          </h1>
        </center>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      observer: null,
      change: true,
      check: false,
      isIntersecting: false,
    };
  },
  mounted() {
    const opt = {
      root: null,
      threshold: 1,
      rootMargin: "100px",
    };
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.check = true;
      }
    }, opt);
    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>

<style scoped>
section {
  height: 100vh;
  box-sizing: border-box;
  /* background-image: url(".././assets/bts1.jpg"); */
  background-position: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
h1 {
  /* background: rgba(0,0,0,0.5); */
  color: white;
  /* position: absolute; */
  opacity: 0;
}
.hello {
  animation-name: fade_in;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}
@keyframes fade_in {
  from {
    opacity: 0;
    left: 0px;
  }
  to {
    opacity: 1;
    left: 470px;
  }
}
.class1 {
  background-color: black;
}
.class2 {
  background-color: red;
}

@media only screen and (max-width: 667px) {
  section {
  height: 100vh;
  box-sizing: border-box;
  /* background-image: url(".././assets/bts2.jpg"); */
  background-position: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
  .hello {
    animation-name: fade_in;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  }
  @keyframes fade_in {
    from {
      opacity: 0;
      left: 0%;
    }
    to {
      opacity: 1;
      left: 20%;
    }
  }
}
</style>
