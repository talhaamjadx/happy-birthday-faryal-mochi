<template>
  <div>
    <section ref="div1">
      <video ref="vid1">
        <source src=".././assets/sec.mp4" type="video/mp4" />
      </video>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        duration: 8000,
        triggerElement: this.$refs.div1,
        triggerHook: 0,
      })
      .setPin(this.$refs.div1);
    this.$scrollmagic.addScene(scene1);

    // let accelamount=0.1
    let scrollpos = 0;
    // let delay=0

    scene1.on("update", (e) => {
      scrollpos = e.scrollPos / 1000;
    });
    setInterval(() => {
      // delay+= (scrollpos - delay) * accelamount;
      this.$refs.vid1.currentTime = scrollpos;
    }, 33.3);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div section {
  height: 100vh;
}

video {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 360px) {
  video {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
}
</style>
