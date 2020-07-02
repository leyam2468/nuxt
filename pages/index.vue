<template>
    <div>
        <div>
            <h3>V-if</h3>
            <h4 v-if="namber >= 8">ممتاز</h4>
            <h4 v-else-if="namber < 8 && namber >= 5">مقبول</h4>
            <h4 v-else>ساقط يا فاشل</h4>
        </div>
        <hr />
        <div>
            <h3>v-for</h3>
            <div>{{ namber }}</div>
            <div v-for="skil in skils" :key="skil.id">
                <h2 @mouseover="showh(skil.h)">{{ skil.lang }}</h2>
            </div>
        </div>
        <hr />
        <div></div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            namber: 9,
            nab: '',
            skils: [
                {
                    lang: 'html',
                    h: '9'
                },
                {
                    lang: 'css',
                    h: '5'
                },
                {
                    lang: 'js',
                    h: '4'
                }
            ]
        }
    },
    methods: {
        showh(hh) {
            this.namber = hh
        }
    },
    head() {
        return {
            title: 'Home'
        }
    }
}
</script>

<style scoped>
h2 {
    font-size: 5rem;
}
</style>
