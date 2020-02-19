<template>
    <div id="app">
        <AppWrapper></AppWrapper>
    </div>
</template>

<script>
    import AppWrapper from './components/layout/wrapper';

    export default {
        name: 'App',
        components: {AppWrapper}
    }
</script>

<style lang="scss">
    @import "./scss/variables";

    :root {
        --main-color: #{map_get($colors, main)};
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
