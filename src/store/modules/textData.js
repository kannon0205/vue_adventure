export default {
  getters: {
    messageText(state) {
      return state.textData;
    }
  },
  state: {
    textData: {
      1: { name: "男子生徒", text: "テスト文章だよ。" },
      2: { name: "女子生徒", text: "テスト文章なの？" },
      3: { name: "男子生徒", text: "テスト文章だよ。" },
      4: { name: "女子生徒", text: "テスト文章じゃないかも？" },
      5: { name: "男子生徒", text: "テスト文章だよ。" },
      6: { name: "女子生徒", text: "テスト文章でした♪" }
    }
  }
};
