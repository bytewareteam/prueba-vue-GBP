<template>
    <div class="menu">
        <b-nav small pills align="center">
            <b-nav-item v-for="item in menu" :key="item.$i" :active="item.isActive">
                <font-awesome-icon v-if="item.icon" :icon="item.icon"></font-awesome-icon>
                {{ item.title }}
            </b-nav-item>
        </b-nav>
    </div>
</template>

<script>
    export default {
        name: "app-nav",
        props: ['menu']
    }
</script>

<style lang="scss" scoped>
    .menu {
        .nav-item {
            border-right: 1px solid var(--main-color);
            padding: 0 .5rem;

            &:last-of-type {
                border-right: none;
            }
        }
    }
</style>