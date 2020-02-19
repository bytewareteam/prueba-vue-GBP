<template>
    <b-navbar type="dark" class="custom-navbar">
        <b-button variant="outline-light" class="mr-2" @click="toggleSidenav()">
            <font-awesome-icon icon="bars"></font-awesome-icon>
        </b-button>
        <b-navbar-brand>SB</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>

            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-button variant="flat" class="text-white">
                    <font-awesome-icon icon="inbox"></font-awesome-icon>
                </b-button>
                <b-button variant="flat" class="text-white">
                    <font-awesome-icon icon="bell"></font-awesome-icon>
                </b-button>
                <b-button variant="flat" class="text-white">
                    <font-awesome-icon icon="ellipsis-v"></font-awesome-icon>
                </b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "navbar",
        props: ['sidebarStatus'],
        // data: () => {
        //     return {sidebarStatus: false}
        // },
        methods: {
            toggleSidenav: function () {
                this.$parent.$emit('toggleNav')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .custom-navbar {
        background-color: var(--main-color) !important;
    }
</style>