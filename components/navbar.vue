<template>
    <div>
        <div class="nav">
            <div class="container">
                <nuxt-link to="/" class="nav-brand">
                    Axel 4 Design
                    <logo />
                </nuxt-link>
                <div class="nav-bar">
                    <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                    <nuxt-link to="/about" class="nav-link">About</nuxt-link>
                    <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
                    <nuxt-link to="/covid-19" class="nav-link"
                        >Coved-19</nuxt-link
                    >
                </div>
            </div>
        </div>
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
    width: 90%;
    margin: auto;
}
a {
    color: white;
    text-decoration: none;
    display: inline-block;
}

.nav {
    background-color: black;
    color: white;
    padding: 10px;

    margin: auto;
}
.nav-brand {
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
}
.nav-bar {
    display: inline-block;
    float: right;
}
.nav-link {
    font-size: 25px;
    font-weight: bold;
    margin: 0 10px;
    transition: 0.5s;
}
.nav-link:hover {
    color: red;
}
svg {
    width: 20px;
    height: 20px;
}
</style>
