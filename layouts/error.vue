<template>
    <div class="error">
        <div class="a404">404</div>
        <h1 class="title">{{ massage }}</h1>
        <p v-if="statusCode === 404">
            <nuxt-link to="/">Return Home</nuxt-link>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Number,
            default: null
        }
    },
    computed: {
        statusCode() {
            return (this.error && this.error.statusCode) || 500
        },
        massage() {
            return this.error.message
        }
    },
    head() {
        return {
            title: this.massage
        }
    }
}
</script>

<style scoped>
.error {
    text-align: center;
    padding: 30px;
}
.a404 {
    font-size: 5rem;
    font-weight: bold;
    color: red;
    letter-spacing: 5px;
}
.title {
    margin-bottom: 30px;
    font-size: 4rem;
}
a {
    background-color: black;
    padding: 10px 15px;
    margin: 20px;
    text-decoration: none;
    color: white;
}
</style>
