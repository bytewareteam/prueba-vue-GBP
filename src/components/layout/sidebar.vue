<template>
    <div id="sidebar" v-bind:class="{open: status}">
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        data() {
            return {status: false};
        },
        mounted() {
            this.$parent.$on('toggleNav', () => {
                console.log('Received');
                this.status = !this.status;
            })
        }
    }
</script>

<style lang="scss" scoped>
    #sidebar {
        --sidebar-width: 64px;
        width: var(--sidebar-width);
        transition: ease-in-out 300ms;
        background-color: #212121;

        &.open {
            --sidebar-width: 260px;
        }
    }
</style>