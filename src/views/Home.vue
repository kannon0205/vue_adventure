<template>
  <div class="l_game-window">
    <the-loading v-if="!loaded" />
    <the-header v-show="loaded" />
    <the-images v-show="loaded" />
    <the-message-window v-show="loaded" />
  </div>
</template>

<style scoped>
.l_game-window {
  width: 800px;
  height: 600px;
  position: relative;
}
</style>

<script>
import TheLoading from "@/components/TheLoading.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheImages from "@/components/TheImages.vue";
import TheMessageWindow from "@/components/TheMessageWindow.vue";
export default {
  name: "Game",
  computed: {
    loaded: function() {
      return this.$store.getters.loaded;
    }
  },
  components: {
    TheLoading,
    TheHeader,
    TheImages,
    TheMessageWindow
  }
};
</script>
