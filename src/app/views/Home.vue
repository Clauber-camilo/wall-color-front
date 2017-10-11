<template>
    <div class="home">
        <div class="home__wall wall">
            <svg class="defs-only" style="visibility: hidden; position: absolute;">
                <filter color-interpolation-filters="srgb" x="0" y="0" height="100%" width="100%" id="9ryrm3ge5j">
                    <feColorMatrix type="matrix" values="-0.2265625 0 0 0 0.4375 0.77734375 0 0 0 0.01171875 0.1953125 0 0 0 0.3515625 0 0 0 1 0"></feColorMatrix>
                </filter>
            </svg>

            <div class="wall__bg"></div>
            <div class="wall__logo">
            </div>
            <div class="wall__text">
                Wall Color
            </div>
            <!-- <div class="wall__overlay">
            </div> -->
        </div>
        <div class="home__block-one container">
            <div class="home__block-one__teste a">Lorem ipsum dolor sit amet.</div>
            <div class="home__block-one__teste b">Lorem ipsum dolor sit amet.</div>
            <div class="home__block-one__teste c">Lorem ipsum dolor sit amet.</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {}
        }
    }

</script>

<style lang="scss" scoped>
    @import '~_sass_config/vars';
    @import '~_sass_config/mixins';

    .home {
        background-color: $color-grey--base;

        &__wall {
            height: 100vh;
            width: 100vw;

            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
            background-color: $color-grey--base;

            @include media-q {
                height: 50vh;
            }

        }
        .wall {
            &__bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url('~_img/wall_bg.jpg');
                filter: brightness(130%) grayscale(100%) url(#9ryrm3ge5j);
                // filter: grayscale(100%);

                background-position: center;
                background-size: cover;
                background-attachment: fixed;
            }
            &__logo {
                width: 250px;
                height: 230px;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                background-image: url('~_img/logo.svg');
                z-index: 1;

                @include media-q {
                    width: 108px;
                    height: 100px;
                }

                @include media-q ($screen-xs) {
                    width: 90px;
                    height: 85px;
                }
            }

            &__text {
                color: $color-white--base;
                font-size: rem(80px);

                font-family: $font-mont;
                margin-left: 40px;
                z-index: 1;

                @include media-q {
                    font-size: rem(60px);
                }

                @include media-q ($screen-xs) {
                    margin-left: 20px;
                    font-size: rem(35px);
                }
            }
            &__overlay {
                position: absolute;
                top: 0;
                left: 0;

                width: 100%;
                height: 100%;

                background-color: rgba($color-black--base, .3);
                filter: blur(10px);
            }
        }

        &__block-one {
            width: 100vw;
            height: 100vh;

            background-color: $color-grey--base;
            display: grid;
            grid-gap: 20px;
            grid-template-columns: auto;
            grid-template-areas: 'a b c';
            grid-template-rows: 100px;

            a {
                grid-area: a;
            }
            b {
                grid-area: b;
            }
            c {
                grid-area: c;
            }

            &__teste {
                display: flex;
                justify-content: center;
            }

        }
    }
</style>
