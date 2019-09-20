<template>
  <section class="wb_content">
    <img v-for="(item,index) in imgList" :key="index" v-lazy="item" alt="">
  </section>
</template>

<script>
export default {
    data() {
        return {
            imgList: [
                require('~/assets/img/1.jpg'),
                require('~/assets/img/2.jpg'),
                require('~/assets/img/3.jpg'),
                require('~/assets/img/4.jpg')
            ]
        };
    },
    layout: 'dark'
};
</script>

<style lang="less" scoped>
img {
    width: 100px;
}
</style>
