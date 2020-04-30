<template>
  <div>
    <section>
      <div
        style="background-color: rgba(0,0,0,0.5); padding: 10px 10px 10px 10px"
      >
        <center>
          <h1 :class="{ hello: check }"></h1>
        </center>
        <center>
          <h1 :class="{ hello: check }">
            I know this isn't much, i want to do a lot more than this. But one
            thing that i assure you of is that i have put my heart and soul into
            this. I hope that we can continue to be the way we are, and maybe
            someday this will convert into something more special!
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
  background-image: url(".././assets/zayn2.jpg");
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

@media only screen and (max-width: 720px) {
    section {
  height: 100vh;
  box-sizing: border-box;
  background-image: url(".././assets/zayn.jpg");
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
