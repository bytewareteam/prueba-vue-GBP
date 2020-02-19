<template>
    <div class="stats">
        <div class="general-stats">
            <div class="tile" v-for="item in general" :key="item.title">
                <strong class="content">{{ item.value }}</strong>
                <span class="title">{{ item.title }}</span>
            </div>
        </div>
        <div class="probabilities">
            <div class="title">Probabilidades</div>
            <div class="content">
                <div class="tile">
                    <strong class="content">
                        <font-awesome-icon icon="angle-double-down" class="text-danger"></font-awesome-icon>
                        {{ probabilities.baja }}
                    </strong>
                    <span class="title">Baja</span>
                </div>
                <div class="tile">
                    <strong class="content">
                        <font-awesome-icon icon="angle-double-right" class="text-warning"></font-awesome-icon>
                        {{ probabilities.media }}
                    </strong>
                    <span class="title">Media</span>
                </div>
                <div class="tile">
                    <strong class="content">
                        <font-awesome-icon icon="angle-double-up" class="text-success"></font-awesome-icon>
                        {{ probabilities.alta }}
                    </strong>
                    <span class="title">Alta</span>
                </div>
            </div>
        </div>
        <div class="action">
            <b-button variant="success" size="lg">Filtrar</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "stats-toolbar",
        props: ['general', 'probabilities']
    }
</script>

<style lang="scss" scoped>
    @import "../../../scss/variables";
    .stats {
        display: grid;
        grid-template-columns: 4fr 2fr 1fr;
        column-gap: .5rem;
        margin-top: 1rem;

        .general-stats {
            display: grid;
            grid-template-columns: 1fr 1fr 2fr 2fr;

            .tile {
                padding: .5rem;
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                color: var(--light);
                border-right: 1px solid var(--light);
                border-radius: 3px;

                & .content, & .title {
                    text-align: center;
                }

                &:nth-child(1) {
                    background-color: darken(map_get($colors, main), 25);
                }

                &:nth-child(2) {
                    background-color: darken(map_get($colors, main), 20);
                }

                &:nth-child(3) {
                    background-color: darken(map_get($colors, main), 10);
                }

                &:nth-child(4) {
                    background-color: darken(map_get($colors, main), 0);
                }
            }
        }

        .probabilities {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: stretch;

            & > .title {
                text-align: center;
                background: #e1e1e1;
                color: var(--main-color);
                font-weight: bold;
            }

            & > .content {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                flex: 1 1 auto;
            }

            .tile {
                padding: .15rem .5rem;
                border: 1px solid #BFBFBF;
                text-align: center;

                .content {
                    display: flex;
                    justify-content: space-between;
                }

                .title {
                    font-size: .8rem;
                }
            }
        }

        .action {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>