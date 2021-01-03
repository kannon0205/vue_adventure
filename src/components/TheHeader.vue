<template>
  <div class="l_wrapper d_wrapper">
    <p>12月 30日</p>
  </div>
</template>

<style scoped>
.l_wrapper {
  width: 200px;
  height: 48px;
  line-height: 48px;
  position: absolute;
  right: 0;
  top: 16px;
  z-index: 3;
}
.d_wrapper {
  border-radius: 3px 0 0 3px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #4d4136;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.6px;
  font-family: "M PLUS Rounded 1c";
}
</style>

<script>
export default {
  name: "TheHeader"
};
</script>
