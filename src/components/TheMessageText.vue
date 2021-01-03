<template>
  <div>
    <p class="d_text" v:key="message" v-show="sceneStart">
      <span v-for="(word, index) in message" :key="index">
        <span
          class="animation"
          v-bind:style="{ animationDelay: index * textDelay + 'ms' }"
        >
          {{ word }}
        </span>
        <span
          v-if="index === message.length - 1"
          class="animation"
          v-bind:style="{ animationDelay: index * textDelay + 'ms' }"
          v-on:animationend="endScene()"
        />
      </span>
      <span v-if="sceneEnd" class="l_text-end d_text-end blinking">▼</span>
    </p>
  </div>
</template>
<style scoped>
.d_text {
  color: #4d4136;
  font-size: 24px;
  font-family: "M PLUS Rounded 1c";
  text-align: justify;
  line-height: 1.5;
}
.l_text-end {
  margin-left: 16px;
}
.d_text-end {
  font-size: 16px;
  animation: flash 1s linear infinite;
}
@keyframes flash {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@keyframes text-in {
  0% {
    opacity: 0;
  }
}
.animation {
  display: inline-block;
  animation: text-in 0.2s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
</style>

<script>
export default {
  name: "TheMessageText",
  computed: {
    message: function() {
      return this.$store.getters.messageText[this.$store.getters.scene].text;
    },
    sceneStart: function() {
      return this.$store.getters.sceneStart;
    },
    sceneEnd: function() {
      return this.$store.getters.sceneEnd;
    },
    textDelay: function() {
      return this.$store.getters.textDelay;
    }
  },
  methods: {
    endScene() {
      this.$store.dispatch("endScene");
    }
  },
  data() {
    return {};
  }
};
</script>
