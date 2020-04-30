<template>
  <div>
    <section>
      <h1 :class="{ hello: check }">Happy Birthday</h1>
      <center>
        <h1 :class="{ hello: check }">
          To that one special person! Who's Always been there for me. I Know you
          will say that there was no need for this But i had to do this to make
          sure that u understand the magnitude of what u mean to me
        </h1>
      </center>
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
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(233, 196, 148, 1) 100%
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
h1 {
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
