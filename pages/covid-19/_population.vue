/* eslint-disable no-console */
<template>
    <div>
        <h2>Test Page Covid:{{ this.$route.params }}</h2>
        <br />
        <h2>{{ covid }}</h2>
        <br />
        <h2>{{ covid }}</h2>
    </div>
</template>

<script>
export default {
    async asyncData({ $axios, error, params }) {
        console.log(params.population)
        try {
            const response = await $axios({
                method: 'GET',
                url:
                    'https://covid-193.p.rapidapi.com/statistics?country=' +
                    params.population,
                headers: {
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key':
                        '22e27899c7msh56dc7402a6a7f4ep1dac99jsn0c45cb472193'
                }
            })
            return {
                covid: response.data.response[0]
            }
        } catch (e) {
            error({
                statuseCode: 503,
                massage: 'cant get data'
            })
        }
    },
    computed: {
        country() {
            return this.$route.params.country
        }
    }
}
</script>

<style lang="scss" scoped></style>
