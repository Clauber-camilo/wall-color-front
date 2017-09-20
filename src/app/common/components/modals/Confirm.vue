<template>
    <modal-template modal="confirm">
        <template slot="title">{{ title }}</template>
        {{ text }}
        <template slot="actions">
            <v-btn @click.native="close" primary light>Não</v-btn>
            <v-btn @click.native="onConfirm" error light>Sim</v-btn>
        </template>
    </modal-template>
</template>

<script>
    import ModalTemplate from './ModalTemplate.vue'

    export default {
        name: 'Modal-Confirm',
        components: {
            ModalTemplate
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            onConfirm: {
                type: Function,
                default: () => {}
            }
        },
        methods: {
            close () {
                this.$store.dispatch('toggleModal', 'confirm')
            }
        }
    }
</script>

<style lang="scss" scoped></style>