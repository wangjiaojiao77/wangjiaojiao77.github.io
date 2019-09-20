<template>
  <section class="wb_content">
    <template v-for="(item,index) in imgList">
      <img :key="index" v-lazy="item" alt="">
    </template>

  </section>
</template>

<script>

export default {
    head() {
        return {
            title: '玩吧官网'
        };
    },
    data() {
        return {
            imgList: [
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg'
            ]
        };
    }
};
</script>

<style lang="less" scoped>

</style>
