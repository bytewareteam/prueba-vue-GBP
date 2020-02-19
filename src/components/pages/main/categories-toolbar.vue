<template>
    <div class="categories">
        <a href="#" class="btn btn-link category" v-for="item in categories" :key="item.id">
            <span>{{ item.name }}</span>
            <font-awesome-icon :icon="item.icon"></font-awesome-icon>
        </a>
    </div>
</template>

<script>
    export default {
        name: "categories-toolbar",
        props: ['categories']
    }
</script>

<style lang="scss" scoped>
    .categories {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem;
        border: 1px solid var(--secondary);
        margin-top: 1rem;

        .category {
            padding: .25rem .5rem;
            border-right: 1px solid var(--secondary);
            font-size: .8rem;

            span {
                margin-right: .5rem;
            }

            &:last-of-type {
                border-right: none;
            }
        }
    }
</style>