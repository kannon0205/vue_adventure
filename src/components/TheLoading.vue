<template>
  <div class="l_wrapper">
    <p class="loading-message">Loading</p>
  </div>
</template>

<style scoped>
.l_wrapper {
  width: 100%;
  height: 600px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-message {
  color: #fff;
  font-size: 48px;
  font-family: "M PLUS Rounded 1c";
}
</style>

<script>
export default {
  name: "TheLoading"
};
</script>
