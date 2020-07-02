<template>
    <nuxt-link :to="'/covid-19/' + covid.country" class="Post-card">
        <h2 class="title">{{ covid.population }}</h2>
        <h2 class="title">{{ covid.country }}</h2>
        <h2>Totoal:{{ covid.cases.total }}</h2>
        <h2>recovered:{{ covid.cases.recovered }}</h2>
        <h2>deaths:{{ covid.deaths.total }}</h2>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        covid: {
            type: Object,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>
.Post-card {
    text-decoration: none;
    background-color: black;
    color: white;
    width: 100%;
    display: block;
    margin-bottom: 20px;
    padding: 20px;

    box-shadow: 2px 2px 5px#999;
    .title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
    }
}
</style>
