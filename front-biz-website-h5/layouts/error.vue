<template>
  <div class="error_content">
    <template v-if="error.statusCode === 404">
      <img class="not_found" src="/404.png" alt="">
      <span class="error_text">页面找不到了...</span>
    </template>
    <h1 v-else>应用发生错误异常</h1>
  </div>
</template>

<script>
export default {
    props: ['error']
};
</script>

<style lang="less" scoped>
.not_found {
    width: 600px;
}

.error_content {
    width: 1000px;
    height: 400px;
    margin: 50px auto 0;
}

.error_text {
    font-size: 20px;
    vertical-align: top;
}
</style>
