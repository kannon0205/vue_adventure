<template>
  <div class="l_wrapper">
    <div class="bg" :style="{ backgroundImage: 'url(' + bg + ')' }" />

    <div class="l_characters">
      <div v-for="(image, index) in imageData" :key="index">
        <p class="character" :class="image.class">
          <img
            :src="image.src"
            :alt="image.alt"
            :class="image.reverse"
            width="364"
            height="500"
          />
        </p>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.l_wrapper {
  width: 100%;
  height: 600px;
  position: absolute;
}

.bg {
  width: 100%;
  height: 600px;
  position: absolute;
}

.l_characters {
  width: 100%;
  padding-top: 100px;
  position: relative;
  z-index: 2;
}

.character {
  width: 364px;
  height: 500px;
  position: absolute;
}

/* 左右反転 */
.reverse {
  transform: scale(-1, 1);
}
/* ここまで */

/* 左のキャラクター */
.left-image {
  left: 24px;
}
/* ここまで */

/* 中央のキャラクター */
.center-image {
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  margin: auto;
}
/* ここまで */

/* 右のキャラクター */
.right-image {
  right: 24px;
}
/* ここまで */
</style>

<script>
export default {
  name: "TheImages",
  computed: {
    bg: function() {
      return this.$store.getters.imageData[this.$store.getters.scene].bg;
    },
    imageData: function() {
      return this.$store.getters.imageData[this.$store.getters.scene].character;
    }
  },
  methods: {
    gameStart() {
      this.$store.dispatch("gameStart");
    }
  },
  created() {
    let images = new Array(this.$store.getters.preload.length);

    for (let i = 0; i < this.$store.getters.preload.length; i++) {
      images[i] = new Image();
      images[i].src = this.$store.getters.preload[i];
      if (i === this.$store.getters.preload.length - 1) {
        this.gameStart();
      }
    }
  }
};
</script>
