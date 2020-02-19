<template>
    <div class="main-page">
        <TitleBar :title="title" :count="count"></TitleBar>
        <NavBar :menu="menu"></NavBar>
        <StatsToolbar :general="stats.general" :probabilities="stats.probabilities"></StatsToolbar>
        <CategoriesToolbar :categories="categories"></CategoriesToolbar>
        <ProductList :products="products"></ProductList>
    </div>
</template>

<script>
    import ProductList from './product-list';
    import CategoriesToolbar from './categories-toolbar';
    import StatsToolbar from './stats-toolbar';
    import TitleBar from './title-bar';
    import NavBar from './nav';

    export default {
        name: "main-page",
        components: {
            CategoriesToolbar, StatsToolbar, NavBar, TitleBar,
            ProductList,
        },
        data: () => {
            return {
                count: 107,
                title: 'Oportunidades',
                menu: [
                    {$i: 0, title: 'Vigentes', isActive: true},
                    {$i: 1, title: 'Recuperación clientes', isActive: false},
                    {$i: 2, title: 'Rechazadas', isActive: false},
                    {$i: 3, title: 'Perdidas', isActive: false},
                    {$i: 4, title: 'Concretadas', isActive: false},
                    {$i: 5, title: 'Crear oportunidad', isActive: false, icon: 'plus-circle'},
                ],
                stats: {
                    general: [
                        {title: 'Empresas', value: 85},
                        {title: 'Oportunidades', value: 107},
                        {title: 'Mensuales', value: '1.454.191,63 USD'},
                        {title: 'Gastos', value: '4.205,00 USD'},
                    ],
                    probabilities: {
                        baja: '28%', media: '41.1%', alta: '30.8%'
                    }
                },
                categories: [
                    {id: 1, name: 'Todo', icon: 'columns'},
                    {id: 2, name: 'Identificación', icon: 'star'},
                    {id: 3, name: 'Información', icon: 'id-card'},
                    {id: 4, name: 'Estudio interno', icon: 'info'},
                    {id: 5, name: 'Innovación y desarrollo', icon: 'search'},
                    {id: 6, name: 'Oferta', icon: 'certificate'},
                    {id: 7, name: 'Muestra', icon: 'border-none'},
                    {id: 8, name: 'Negocicacion', icon: 'dollar-sign'},
                ],
                products: ["000", "001", "002", "003", "004", "005", "006", "007",],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-page {
        overflow-x: hidden;
    }
</style>