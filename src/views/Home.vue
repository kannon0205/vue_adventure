<template>
  <div class="l_game-window" :style="{ backgroundImage: 'url(' + bg + ')' }">
    <the-header />
    <the-characters />
    <the-message-window />
  </div>
</template>

<style scoped>
.l_game-window {
  width: 800px;
  height: 600px;
  position: relative;
  background-image: url("../assets/img/bg/01c_sunset_m.jpg");
}
</style>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheCharacters from "@/components/TheCharacters.vue";
import TheMessageWindow from "@/components/TheMessageWindow.vue";
export default {
  name: "Game",
  computed: {
    bg: function() {
      return this.$store.getters.imageData[this.$store.getters.scene].bg;
    }
  },
  components: {
    TheHeader,
    TheCharacters,
    TheMessageWindow
  }
};
</script>
