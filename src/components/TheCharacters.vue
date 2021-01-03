<template>
  <div class="l_wrapper">
    <div class="l_characters">
      <div v-for="(image, index) in imageData" :key="index">
        <p class="character" :class="image.class">
          <img
            :src="image.src"
            :alt="image.alt"
            :class="image.reverse"
            width="364"
            height="500"
            rel="preload"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.l_wrapper {
  width: 100%;
  height: 600px;
  position: absolute;
  z-index: 2;
}
.l_characters {
  width: 100%;
  padding-top: 100px;
  position: relative;
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
  name: "TheCharacters",
  computed: {
    imageData: function() {
      return this.$store.getters.imageData[this.$store.getters.scene].character;
    }
  }
};
</script>
