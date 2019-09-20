<template>
  <div class="header">
    <div class="header_container">
      <a href="https://www.wodidashi.com">
        <img
          src="https://qiniuh5.wodidashi.com/web/web2/moqiwanba/wodidashi-pc/img/index-logo.1322568c.png"
          alt=""
          class="logo"
        >
      </a>
      <div>
        <!-- exact 参数 -->
        <template v-for="(item,index) in items">
          <nuxt-link
            :key="index"
            class="wb_header_link"
            :to="{name: item.name}"
            :exact="item.exact"
          >{{ item.title }}</nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { name: 'index', title: '玩吧首页', exact: true },
                { name: 'shop', title: '玩吧商城' },
                { name: 'community', title: '用户社区' },
                { name: 'dynamic', title: '玩吧动态' },
                { name: 'recruitment', title: '玩吧招聘' },
                { name: 'service', title: '咨询服务' },
                { name: 'about', title: '关于玩吧' }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
.header {
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
}

.header_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1000px;
    height: 100%;
    margin: 0 auto;
}

.logo {
    width: 125px;
}

.wb_header_link {
    margin-right: 25px;
    font-weight: bold;
    color: #999;

    &.active-link {
        color: #fdc200;
    }
}
</style>
