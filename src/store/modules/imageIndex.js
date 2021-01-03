import bg from "./imageData/images/bg.js";
//bg

import dansei01 from "./imageData/images/dansei01.js";
import josei01 from "./imageData/images/josei01.js";
//character

import test from "./imageData/test.js";

export default {
  state: {},
  getters: {
    preload() {
      const preload = bg.concat(dansei01, josei01);
      return preload;
    },
    imageData() {
      return test;
    }
  }
};
