<template>
  <div>
    <section>
      <h1 :class="{ hello: check }">Happy Birthday Girl!</h1>
      <center>
        <h1 :class="{ hello: check }">
          How do I even explain to you how i feel about you and what you mean to
          me? It transcends words. There's nothing I can say to explain it
          because words, language wouldn't do it justice. I have never felt
          anything like this before. And I knew it the moment i felt it that it
          is was different, it was something special, it is '사랑'. Even though
          you'll let zimal slap me (joking), I would stand infront of you to
          shield you from this world. I will cover your head with my hands in
          rain because I know that you do not like the feeling of raindrops
          falling on your head. I'll stop now, because I can write entire books about you. I wish you goodluck
          for the future. May BTS come to Pakistan. May all the sorrows take another alleyway and steer away from you path! 
        </h1>
        <p>&#x1f497; &#x1f497; &#x1f497; &#x1f497; &#x1f497; &#x1f497;</p>
        <p>사랑해</p>
      </center>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
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

@media only screen and (max-width: 667px) {
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
