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
</style>
