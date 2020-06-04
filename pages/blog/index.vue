<template>
    <div>
        <div class="container">
            <h1>Blog</h1>
            <PostCard
                v-for="(post, index) in posts"
                :key="index"
                :post="post"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import PostCard from '@/components/PostCard.vue'
export default {
    components: {
        PostCard
    },
    async fetch({ store, error }) {
        try {
            await store.dispatch('posts/fetchPosts')
        } catch (e) {
            error({
                statusCode: 503,
                message: 'Ther Is no Data Found'
            })
        }
    },
    computed: mapState({
        posts: (state) => state.posts.posts
    }),

    head() {
        return {
            title: 'Blog'
        }
    }
}
</script>

<style scoped></style>
