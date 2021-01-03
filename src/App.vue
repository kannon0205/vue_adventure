<template>
  <div id="app">
    <div class="game-window">
      <router-view />
    </div>
    <div id="preloadedImages"></div>
  </div>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.game-window {
  width: 800px;
  height: 600px;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
}
#preloadedImages {
  width: 0px;
  height: 0px;
  display: inline;
  /* 背景 */
  background-image: url("./assets/img/bg/01c_day_m.jpg");
  background-image: url("./assets/img/bg/01c_sunset_m.jpg");
  background-image: url("./assets/img/bg/01c_night_m.jpg");
  /* ここまで */

  /* キャラクター */
  background-image: url("./assets/img/character/dansei1/dansei8.png");
  background-image: url("./assets/img/character/dansei1/dansei2.png");
  background-image: url("./assets/img/character/dansei1/dansei3.png");

  background-image: url("./assets/img/character/josei7/josei2.png");
  background-image: url("./assets/img/character/josei7/josei5.png");
  background-image: url("./assets/img/character/josei7/josei8.png");
}
</style>
