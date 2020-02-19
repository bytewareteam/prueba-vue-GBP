<template>
    <div class="products clearfix">
        <Product v-for="p in products" :key="p" :code="p"></Product>
    </div>
</template>

<script>
    import Product from './product';
    export default {
        name: "product-list",
        props: ['products'],
        components: {Product}
    }
</script>

<style scoped>
    .products {
        display: grid;
        margin-top: 1rem;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 1rem;
        row-gap: 1rem;
        box-sizing: border-box;
        overflow-x: hidden;
    }
</style>