<template>
  <div class="wb_content">
    <img :src="topicData.data.image" alt="">
    <ul>
      <li v-for="(item,index) in topicData.data.articleList" :key="index">
        <div class="user_detail">
          <img class="user_icon" :src="item.usericon" alt="">
          <div class="user_message">
            <h3 class="name">{{ item.username }}</h3>
            <p class="time">{{ item.publishTime }}</p>
          </div>
          <div class="tips_box">
            <img class="tips_icon" src="https://static.kuaishebao.com/official-website/dynamic/image/tips-icon.png" alt="">
            {{ item.topicName }}
          </div>
        </div>
        <p class="content">{{ item.content }}</p>
        <div class="img_box">
          <img v-lazy="dealImgData(item.image)" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import request from '~/service';
export default {
    data() {
        return {
            topicData: null
        };
    },
    async asyncData(content) {
    // 此方法内无法访问 $route，可以用 content 上下文对象
        const topicData = await request.post('/api/web/webApi/article/listArticle', {
            page: 1,
            limit: 200,
            topicId: content.params.id
        });
        return {
            topicData
        };
    },
    methods: {
        dealImgData(item) {
            return JSON.parse(item).iconImg;
        }
    }
};
</script>

<style lang="less" scoped>
img {
    border-radius: 10px;
}

li {
    padding: 20px;
    margin-top: 8px;
    border: 1px solid #fff0c6;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
}

.user_detail {
    display: flex;
    align-items: center;
    width: 100%;

    .user_icon {
        width: 65px;
        height: 65px;
        margin-right: 10px;
        border-radius: 50%;
    }

    .user_message {
        flex: 1;
    }

    .name {
        font-size: 20px;
        color: #5a3208;
    }

    .time {
        color: #fcc80b;
    }

    .tips_icon {
        width: 10px;
        margin-right: 5px;
        border-radius: 0;
    }

    .tips_box {
        font-size: 16px;
        color: #fcc80b;
    }
}

.content {
    margin: 10px 0;
}

.img_box {
    width: 120px;

    img {
        border-radius: 0;
    }
}
</style>
