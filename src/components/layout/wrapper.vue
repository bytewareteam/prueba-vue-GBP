<template>
    <div class="wrapper">
        <Navbar></Navbar>
        <div class="content">
            <Sidebar></Sidebar>
            <div class="content-wrapper">
                <MainPage></MainPage>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './navbar';
    import Sidebar from './sidebar';
    import MainPage from '../pages/main/main-page';
    export default {
        name: "wrapper",
        components: {Navbar, Sidebar, MainPage},
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 100vw;
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr;

        & > .content {
            display: flex;
            flex-flow: row nowrap;

            .content-wrapper {
                flex: 1 1 auto;
                padding: 1rem;
            }
        }
    }
</style>