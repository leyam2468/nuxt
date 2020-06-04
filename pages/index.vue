<template>
    <div class="container">
        <logo />
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo
    }
}
</script>

<style scoped>
.container {
    margin: 0 auto;
    width: 90%;
}
</style>
