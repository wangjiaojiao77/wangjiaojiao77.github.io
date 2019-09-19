<template>
  <div class="wb_content">
    <img class="banner" src="https://qiniuh5.wodidashi.com/web/web2/moqiwanba/wodidashi-pc/img/banner-wb-topicList.848b1c18.png" alt="">
    <ul class="topicUl">
      <li v-for="(item,index) in topicList.data.articleList" :key="index">
        <nuxt-link :to="{ name: 'community-id', params: {id: item.topic_id }}">
          <div class="topic_img_box">
            <img v-lazy="item.image" alt="">
          </div>
          <div class="topic_detail">
            <h3>{{ item.topic_name }}</h3>
            <p>{{ item.feed_count }}条内容</p>
          </div>
          <img class="right_arrow" src="https://static.kuaishebao.com/official-website/topicList/image/more.png" alt="">
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import request from '~/service';
export default {
    data() {
        return {
            topicList: null
        };
    },
    async asyncData() {
    // 如果需要请求多个接口，可以用 Promise.all
        const topicList = await request.post('/api/web/webApi/article/listTopic', {
            page: 1,
            count: 20
        });
        // 返回的数据会融合到 data 中，所以我们需要在 data 中先定义
        return {
            topicList
        };
    },
    head() {
        return {
            title: '用户社区',
            meta: [{ hid: 'news', name: 'news', content: '玩吧用户社区' }]
        };
    }
};
</script>

<style lang="less" scoped>
.topicUl {
    margin-top: 10px;
    overflow: hidden;

    li {
        float: left;
        box-sizing: border-box;
        width: 525px;
        padding: 20px;
        margin: 0 15px 15px 0;
        border: 1px solid #fff0c6;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        cursor: pointer;

        a {
            display: flex;
            align-items: center;
            width: 100%;
        }
    }
}

.topic_img_box {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
}

.topic_detail {
    flex: 1;
    margin-left: 10px;

    h3 {
        margin-bottom: 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #763c28;
    }

    p {
        color: #fcc80b;
    }
}

.right_arrow {
    width: 12px;
    height: auto;
}

</style>
