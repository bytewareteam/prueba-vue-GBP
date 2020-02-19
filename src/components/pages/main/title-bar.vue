<template>
    <div class="title-bar">
        <h5 class="title">
            <font-awesome-icon icon="rocket"></font-awesome-icon>
            {{ title }}
        </h5>
        <div class="detail">
            <strong>{{ count }} Registros</strong>
        </div>
    </div>
</template>

<script>
    export default {
        name: "title-bar",
        props: ['count', 'title']
    }
</script>

<style lang="scss" scoped>
    .title-bar {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .title {
            min-width: 340px;
            color: var(--main-color);
        }

        .detail {
            flex: 1 1 auto;
            text-align: right;
            border-bottom: 1px solid rgba(0, 0, 0, .25);
            color: var(--main-color);
            font-size: .8rem;
        }
    }
</style>