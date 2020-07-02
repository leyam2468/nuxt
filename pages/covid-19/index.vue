/* eslint-disable no-console */ /* eslint-disable no-console */
<template>
    <div>
        <div class="container">
            <h1>Coved-19</h1>
            <CovidCard v-for="covid in covids" :key="covid.id" :covid="covid">
            </CovidCard>
        </div>
    </div>
</template>

<script>
import CovidCard from '@/components/CovidCard.vue'
export default {
    components: {
        CovidCard
    },
    async asyncData({ $axios, error }) {
        try {
            const response = await $axios({
                method: 'GET',
                url: 'https://covid-193.p.rapidapi.com/statistics',
                headers: {
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key':
                        '22e27899c7msh56dc7402a6a7f4ep1dac99jsn0c45cb472193'
                }
            })
            return {
                covids: response.data.response
            }
        } catch (e) {
            error({
                statuseCode: 503,
                massage: 'cant get data'
            })
        }
    }
}
</script>
