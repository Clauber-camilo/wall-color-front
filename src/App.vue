<template>
    <router-view></router-view>
</template>

<script>

export default {
    name: 'App'
}

</script>

<style lang="scss">
    @import '~_sass_config/vars';

    .main_container {
        min-height: calc(100vh - #{$header-desk-height + $footer-desk-height});
    }
</style>