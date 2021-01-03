import position from "./attr/class.js";
import alt from "./attr/alt.js";
//attr

import bg from "./images/bg.js";
//bg

import dansei01 from "./images/dansei01.js";
import josei01 from "./images/josei01.js";
//character

const cl = position.left;
const cc = position.center;
const cr = position.right;
//class

const al = alt.left;
const ac = alt.center;
const ar = alt.right;
//alt

const test = {
  1: {
    character: [
      {
        src: dansei01[0],
        class: cc,
        reverse: "",
        alt: ac
      }
    ],
    bg: bg[0]
  },
  2: {
    character: [
      {
        src: josei01[0],
        class: cc,
        reverse: "",
        alt: ac
      }
    ],
    bg: bg[0]
  },
  3: {
    character: [
      {
        src: dansei01[1],
        class: cc,
        reverse: "",
        alt: ac
      }
    ],
    bg: bg[1]
  },
  4: {
    character: [
      {
        src: josei01[1],
        class: cc,
        reverse: "",
        alt: ac
      }
    ],
    bg: bg[1]
  },
  5: {
    character: [
      {
        src: dansei01[2],
        class: cc,
        reverse: "",
        alt: ac
      }
    ],
    bg: bg[2]
  },
  6: {
    character: [
      {
        src: dansei01[0],
        class: cl,
        reverse: "",
        alt: al
      },
      {
        src: josei01[2],
        class: cr,
        reverse: "reverse",
        alt: ar
      }
    ],
    bg: bg[2]
  }
};

export default test;
