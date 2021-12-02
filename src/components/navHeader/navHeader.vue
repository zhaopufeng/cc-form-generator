<template>
  <div class="header">
    <div class="logo">
      <div>cc-h5</div>
      <div>
        <a href="https://github.com/LadyChatterleyLover/cc-h5" target="_blank" class="github">
          <img src="https://github.githubassets.com/pinned-octocat.svg" />
        </a>
      </div>
    </div>

  </div>


</template>

<script lang="ts" setup>


</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
  height: 50px;
  .logo {
    display: flex;
    align-items: center;
    line-height: 30px;
    color: #00afff;
    font-weight: 600;
    font-size: 17px;
    .github {
      display: inline-block;
      vertical-align: sub;
      margin-left: 15px;
    }
    img {
      height: 22px;
      position: relative;
      top: 1px;
    }
  }
}
</style>
