<template>
  <div>
    <v-header />
    <div class="wb_main_dark">
      <nuxt />
    </div>
    <v-footer />
  </div>
</template>

<script>
import VHeader from '~/components/Header';
import VFooter from '~/components/Footer';
export default {
    components: {
        VHeader,
        VFooter
    }
};
</script>

<style lang="less" scoped>
html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;// stylelint-disable-line
    -webkit-text-size-adjust: 100%;// stylelint-disable-line
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    padding: 10px 30px;
    border: 1px solid #3b8070;
    border-radius: 4px;
    text-decoration: none;
    color: #3b8070;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    padding: 10px 30px;
    margin-left: 15px;
    border: 1px solid #35495e;
    border-radius: 4px;
    text-decoration: none;
    color: #35495e;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}

.wb_main_dark {
    min-height: 800px;
    padding-top: 120px;
    background: #000;
}
</style>
