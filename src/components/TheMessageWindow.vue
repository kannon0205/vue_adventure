<template>
  <div class="l_wrapper d_wrapper">
    <div class="l_message-window d_message-window" v-on:click="sceneNext">
      <span class="l_character-name d_character-name">{{ name }}</span>
      <div class="l_inner-window d_inner-window">
        <the-message-text />
      </div>
    </div>
  </div>
</template>

<style scoped>
.l_wrapper {
  width: 800px;
  height: 600px;
  z-index: 100;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.l_message-window {
  width: 800px;
  height: 170px;
  margin: 0 auto;
  padding: 8px;
  position: relative;
  cursor: pointer;
}
.d_message-window {
  background-color: rgba(255, 255, 255, 0.8);
  border-top: 3px solid #4d4136;
}

.l_inner-window {
  width: 100%;
  height: 100%;
  padding: 32px 128px;
}
.d_inner-window {
  border-top: dashed 1px #4d4136;
  border-bottom: dashed 1px #4d4136;
}
.l_character-name {
  width: 240px;
  height: 48px;
  line-height: 48px;
  position: absolute;
  top: -24px;
}
.d_character-name {
  border-radius: 3px;
  background-color: #4d4136;
  transform: rotate(-3deg);
  color: #ffc93c;
  text-align: center;
  font-size: 28px;
  letter-spacing: 1.6px;
  font-family: "M PLUS Rounded 1c";
}
</style>

<script>
import TheMessageText from "@/components/TheMessageText";
export default {
  name: "TheMessageWindow",
  components: {
    TheMessageText
  },
  methods: {
    sceneNext() {
      this.$store.dispatch("sceneNext");
    }
  },
  computed: {
    name: function() {
      return this.$store.getters.messageText[this.$store.getters.scene].name;
    }
  }
};
</script>
