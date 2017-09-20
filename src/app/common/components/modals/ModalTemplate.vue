<template>
    <div>
        <v-dialog v-if="type === 'fullscreen'" v-model="opened" fullscreen persistent>
            <v-card>
                <v-card-row>
                    <v-toolbar class="secondary">
                        <v-btn icon="icon" @click.native="close()" light>
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>
                            <slot name="title"></slot>
                        </v-toolbar-title>
                        <slot name="actions"></slot>
                    </v-toolbar>
                </v-card-row>
                <v-card-row>
                    <v-card-text>
                        <slot></slot>
                    </v-card-text>
                </v-card-row>
            </v-card>
        </v-dialog>
        <v-dialog v-else v-model="opened" persistent>
            <v-card>
                <v-card-row>
                    <v-card-title>
                        <slot name="title"></slot>
                    </v-card-title>
                </v-card-row>
                <v-card-row>
                    <v-card-text>
                        <slot></slot>
                    </v-card-text>
                </v-card-row>
                <v-card-row actions>
                    <slot name="actions"></slot>
                </v-card-row>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: 'Modal-Template',
        props: {
            type: {
                type: String,
                required: false
            },
            modal: {
                type: String,
                required: true
            }
        },
        computed: {
            opened: {
                get () {
                    return this.$store.state.modal[this.modal]
                },
                set (bool) {
                    this.$store.dispatch('setToggleModal', {
                        type: this.modal,
                        bool
                    })
                }
            }
        },
        methods: {
            close () {
                this.$store.dispatch('toggleModal', this.modal)
            }
        }
    }
</script>

<style lang="scss"></style>
