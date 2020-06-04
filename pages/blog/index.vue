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
import PostCard from '@/components/PostCard.vue'
export default {
    components: {
        PostCard
    },
    asyncData({ $axios, error }) {
        return $axios
            .get('http://localhost:30001/posts')
            .then((response) => {
                return {
                    posts: response.data
                }
            })
            .catch((e) => {
                error({ statusCode: 503, message: 'Ther Is no Data Found' })
            })
    },

    head() {
        return {
            title: 'Blog'
        }
    }
}
</script>

<style scoped></style>
