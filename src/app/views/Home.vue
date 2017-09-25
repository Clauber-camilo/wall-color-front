<template>
    <div class="home">
        <div class="home__wall wall">
            <div class="wall__logo">
            </div>
            <div class="wall__text">
                Wall Color
            </div>
            <div class="wall__overlay">
            </div>
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
        &__wall {
            height: 100vh;
            width: 100vw;

            background-image: url('~_img/wall_bg.jpg');
            background-position: center;
            background-size: cover;

            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            @include media-q {
                height: 50vh;
            }
        }
        .wall {
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
    }
</style>
