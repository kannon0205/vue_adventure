<template>
  <div v-if="loaded" class="l_game-window">
    <the-header />
    <the-images />
    <the-message-window />
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
    TheHeader,
    TheImages,
    TheMessageWindow
  }
};
</script>
