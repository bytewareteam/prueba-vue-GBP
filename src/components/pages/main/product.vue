<template>
    <div class="product">
        <div class="product-header">
            <strong class="code">COD{{code}}</strong>
        </div>
        <figure class="product-image">
            <img src="https://via.placeholder.com/240x140" alt="Producto">
            <figcaption>
                <div class="logo">
                    <img src="https://via.placeholder.com/80/4caf50/FFFFFF" alt="Logo">
                </div>
            </figcaption>
        </figure>
        <div class="product-description">
            <h5 class="product-category">Lorem ipsum dolor.</h5>
            <p class="product-provider">Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="product-detail">
            <hr>
            <h5 class="product-name">Lorem ipsum dolor.</h5>
            <div class="product-table">

                <div class="detalle-mensual">
                    <span>Mensual</span>
                    <span>40.000 Millares</span>
                    <span>5.304,00 USD</span>
                </div>
                <div class="detalle-identificacion">
                    <span>Identificada</span>
                    <span>Hace 365 días</span>
                </div>
            </div>
            <h6 class="Owner">Hayssil Ayala</h6>
            <hr>

            <div class="probability">
                <div class="percent">
                    <strong>85%</strong>
                    <span title="Lorem ipsum dolor sit amet, consectetur.">Lorem ipsum dolor sit amet, consectetur.</span>
                </div>
                <div class="type">
                    <font-awesome-icon icon="angle-double-right" class="text-success"></font-awesome-icon>
                    <span>Alta</span>
                </div>
            </div>
        </div>
        <hr>

        <div class="product-footer">
            Gastos 0,00 USD
        </div>
    </div>
</template>

<script>
    export default {
        name: "product",
        props: ['code']
    }
</script>

<style lang="scss" scoped>
    hr {
        width: 90%;
    }

    .product {
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
        border-radius: 1rem;
        box-sizing: border-box;

        .product-header {
            color: var(--main-color);
            text-align: right;
            padding: 1rem .5rem .25rem;
        }

        .product-image {
            position: relative;
            padding: 0 .5rem;

            & > img {
                width: 100%;
                height: auto;
            }

            figcaption {
                position: absolute;
                right: 1rem;
                bottom: 1rem;
                border-radius: 50%;
                box-shadow: 0 0 5px 1px rgba(0, 0, 0, .25);
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 60px;
                height: 60px;
            }
        }

        .product-description {
            padding: 0 .5rem;

            .product-category {
                text-align: center;
                margin: 0;
                font-weight: bold;
                color: var(--main-color);
                font-size: 1rem;
            }

            .product-provider {
                margin: 0;
                text-align: center;
                color: var(--secondary);
                font-size: .8rem;
            }
        }

        hr {
            margin: 0 auto;
        }

        .product-detail {

            hr {
                margin-top: .25rem;
                margin-bottom: .25rem;
            }

            .product-name {
                font-weight: bold;
                color: var(--main-color);
                margin: 0;
                text-align: center;
                font-size: 1rem;
            }

            .detalle-mensual, .detalle-identificacion {
                display: flex;
                justify-content: flex-start;
                color: var(--info);
                font-size: .8rem;
                text-align: left;
                padding: .1rem .5rem;

                span {
                    margin-right: .5rem;
                    text-align: center;

                    &:last-of-type {
                        margin-right: 0;
                    }
                }
            }

            .detalle-identificacion {
                background-color: rgba(0, 0, 0, .1);

                span:last-of-type {
                    color: var(--secondary);
                }
            }

            .Owner {
                text-align: center;
                margin: .25rem;
                font-weight: bold;
                color: var(--secondary);
                font-size: .8rem;
            }

            .probability {
                padding: 0 .5rem;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                align-items: center;
                justify-items: center;

                .percent {
                    display: flex;
                    flex-flow: column nowrap;
                    text-align: center;
                    width: 100%;
                    position: relative;
                    overflow: hidden;

                    span {
                        font-size: .8rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }

                .type {
                    span {
                        margin-left: .5rem;
                    }
                }
            }
        }

        .product-footer {
            text-align: center;
            font-weight: bold;
            color: var(--main-color);
        }
    }
</style>