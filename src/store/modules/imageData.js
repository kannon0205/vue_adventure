export default {
  getters: {
    imageData(state) {
      return state.imageData;
    }
  },
  state: {
    imageData: {
      1: {
        character: [
          {
            src: require("@/assets/img/character/dansei1/dansei8.png"),
            class: "center-image",
            reverse: "",
            alt: "中央キャラクター画像"
          }
        ],
        bg: require("@/assets/img/bg/01c_day_m.jpg")
      },
      2: {
        character: [
          {
            src: require("@/assets/img/character/josei7/josei2.png"),
            class: "center-image",
            reverse: "",
            alt: "中央キャラクター画像"
          }
        ],
        bg: require("@/assets/img/bg/01c_day_m.jpg")
      },
      3: {
        character: [
          {
            src: require("@/assets/img/character/dansei1/dansei2.png"),
            class: "center-image",
            reverse: "",
            alt: "中央キャラクター画像"
          }
        ],
        bg: require("@/assets/img/bg/01c_sunset_m.jpg")
      },
      4: {
        character: [
          {
            src: require("@/assets/img/character/josei7/josei5.png"),
            class: "center-image",
            reverse: "",
            alt: "中央キャラクター画像"
          }
        ],
        bg: require("@/assets/img/bg/01c_sunset_m.jpg")
      },
      5: {
        character: [
          {
            src: require("@/assets/img/character/dansei1/dansei3.png"),
            class: "center-image",
            reverse: "",
            alt: "中央キャラクター画像"
          }
        ],
        bg: require("@/assets/img/bg/01c_night_m.jpg")
      },
      6: {
        character: [
          {
            src: require("@/assets/img/character/dansei1/dansei8.png"),
            class: "left-image",
            reverse: "",
            alt: "左キャラクター画像"
          },
          {
            src: require("@/assets/img/character/josei7/josei8.png"),
            class: "right-image",
            reverse: "reverse",
            alt: "右キャラクター画像"
          }
        ],
        bg: require("@/assets/img/bg/01c_night_m.jpg")
      }
    }
  }
};
