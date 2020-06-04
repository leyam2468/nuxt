<template>
    <div class="Post-card">
        <h2 class="title">*** {{ post.title }} ***</h2>
        <p class="des">{{ post.des }}</p>
        <span class="date">{{ post.date }}</span>
        <span class="view">{{ post.view }}</span>
        <span class="category">{{ post.category }}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    async fetch({ store, error, params }) {
        try {
            await store.dispatch('posts/fetchPost', params.id)
        } catch (e) {
            error({
                statusCode: 503,
                message: 'no post #' + params.id
            })
        }
    },
    head() {
        return {
            title: this.post.title
        }
    },
    computed: mapState({
        post: (state) => state.posts.post
    })
}
</script>

<style scoped lang="scss">
.Post-card {
    text-decoration: none;
    background-color: black;
    color: white;
    width: 100%;
    display: block;
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: 2px 2px 5px#999;
    text-align: center;
    .title {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .des {
        font-size: 20px;
        line-height: 1.5;
        margin-bottom: 20px;
    }
    .date {
        background-color: gray;
        padding: 10px;
        display: inline-block;
        top: 10px;
        right: 10px;
    }
    .view {
        background-color: gray;
        padding: 10px;
        display: inline-block;
        top: 10px;
        right: 110px;
    }
    .category {
        background-color: gray;
        padding: 10px;
        top: 10px;
        right: 150px;
        display: inline-block;
    }
}
</style>
