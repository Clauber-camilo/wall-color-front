<template>
    <v-breadcrumbs class="breads" icons divider="chevron_right">
        <v-breadcrumbs-item 
            v-for="(item, index) in breads" 
            :key="index"
            :href="item.path"
        >
            {{ item.text }}
        </v-breadcrumbs-item>
    </v-breadcrumbs>
</template>

<script>
    export default {
        name: 'Breadcrumbs',
        computed: {
            breads () {
                let breadcrumbs = this.$route.path.split('/')
                breadcrumbs.shift()
                breadcrumbs = breadcrumbs.filter((item, index) => (index % 2 === 0))
                breadcrumbs = breadcrumbs.map(item => {
                    const data = {}
                    data.text = item
                    data.path = this.$route.path.split(item)[0] + item
                    return data
                })

                return breadcrumbs
            }
        }
    }
</script>

<style lang="scss">
    @import '~_sass_config/vars';
    @import '~_sass_config/mixins';

    .breads {
        padding: 0;
    }

    .breadcrumbs {
        &__item {
            text-transform: capitalize;
            color: #1f363d !important;
            font-weight: bold;
            font-size: 12px;
        }
    }
</style>