<template>
    <div>
        <navbar />
        <nuxt />
    </div>
</template>
<script>
import navbar from '~/components/navbar.vue'
export default {
    components: {
        navbar
    },
    head() {
        return {
            titleTemplate: '%s- Axel 4 Design',
            metaTemplate: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Web And Graphic Design'
                }
            ]
        }
    }
}
</script>
<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

.container {
    margin: 0 auto;
    width: 90%;
}
</style>
