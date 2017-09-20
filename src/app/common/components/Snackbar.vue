<template>
    <v-snackbar v-model="active" :timeout="timeout">
        <div v-html="message"></div>
        <v-btn flat class="light-green--text" @click.native="close()">Close</v-btn>
    </v-snackbar>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: {
            timeout: {
                type: Number,
                default: 6000
            }
        },
        computed: {
            active: {
                get () {
                    return this.$store.state.snackbar.active
                },
                set (value) {
                    this.setSnack(value)
                }
            },
            message () {
                return this.$store.state.snackbar.message
            }
        },
        methods: {
            ...mapActions([
                'closeSnack',
                'setSnack'
            ]),
            close () {
                this.closeSnack()
            }
        }
    }
</script>

<style lang="scss" scoped></style>