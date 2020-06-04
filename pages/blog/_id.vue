<template>
    <div>
        <h1>{{ post.title }}</h1>
    </div>
</template>

<script>
export default {
    async asyncData({ $axios, error, params }) {
        try {
            const { data } = await $axios.get(
                'http://localhost:30001/posts/' + params.id
            )
            return {
                post: data
            }
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
    }
}
</script>

<style scoped></style>
