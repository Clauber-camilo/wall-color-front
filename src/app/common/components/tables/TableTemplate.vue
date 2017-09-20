<template>
    <div>
        <v-card>
            <v-card-title>
                <slot></slot>
                <v-spacer></v-spacer>
                <v-text-field
                    append-icon="search"
                    label="Pesquisar"
                    single-line
                    hide-details
                    v-model="search" />
            </v-card-title>
            <v-data-table 
                :items="items"
                :headers="header"
                :search="search"
                :rows-per-page-items="filterTable"
                rows-per-page-text="Itens por página:"
                no-data-text="Não existe registro disponível"
                no-results-text="Nenhum registro encontrado">
                <template slot="items" scope="props">
                    <td class="table-row" v-for="prop in header" @click="onRowClick(props.item)">
                        {{ prop.formatter ? prop.formatter(props.item[prop.value]) : props.item[prop.value] }}
                    </td>
                    <td>
                        <v-layout row>
                            <v-flex class="text-xs-right" xs12>
                                <template v-for="(action, index) in actions">
                                    <a v-if="action.external" :href="actionLink(props.item, action.link)" target="_blank">
                                        <v-btn
                                            v-tooltip:top="{ html: action.tooltip }"
                                            icon="icon"
                                            :class="`${action.color}--text`">
                                            <v-icon>{{ action.icon }}</v-icon>
                                        </v-btn>
                                    </a>
                                    <v-btn v-else-if="action.link"
                                        :router="true"
                                        :href="actionLink(props.item, action.link)"
                                        v-tooltip:top="{ html: action.tooltip }"
                                        icon="icon"
                                        :class="`${action.color}--text`">
                                        <v-icon>{{ action.icon }}</v-icon>
                                    </v-btn>
                                    <v-btn v-else
                                        @click.native.stop="action.func(props.item)"
                                        v-tooltip:top="{ html: action.tooltip }"
                                        icon="icon"
                                        :class="`${action.color}--text`">
                                        <v-icon>{{ action.icon }}</v-icon>
                                    </v-btn>
                                </template>

                                <v-btn v-if="onEdit"
                                    v-tooltip:top="{ html: 'Editar' }"
                                    @click.native.stop="onEdit(props.item)"
                                    :disabled="disableButton(props.item)"
                                    icon="icon"
                                    class="blue--text">
                                    <v-icon>mode_edit</v-icon>
                                </v-btn>
                                <v-btn v-if="onDelete"
                                    v-tooltip:top="{ html: 'Deletar' }"
                                    @click.native.stop="onDelete(props.item)"
                                    :disabled="disableButton(props.item)"
                                    icon="icon"
                                    class="red--text">
                                    <v-icon>delete</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </td>
                </template>
            </v-data-table>
        </v-card>
        <v-btn v-if="onCreate" @click.native.stop="onCreate()" floating class="secondary btn-create">
            <v-icon light>add</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: 'Table-Template',

        data () {
            return {
                search: '',
                filterTable: [5, 15, 25, { text: 'Todos', value: -1 }]
            }
        },

        props: {
            header: {
                type: Array,
                required: true
            },
            items: {
                type: Array,
                required: true
            },
            actions: {
                type: Array,
                default: () => []
            },
            onCreate: {
                type: Function,
                default: () => {}
            },
            onEdit: {
                type: Function,
                default: () => {}
            },
            onDelete: {
                type: Function,
                default: () => {}
            },
            onRowClick: {
                type: Function,
                default: () => {}
            }
        },

        methods: {
            actionLink (item, link) {
                let cleanLink = link

                if (link && link.match(/&\w*;/g)) {
                    link.match(/&\w*;/g).map(prop => {
                        const cleanProp = prop.substring(1, prop.length - 1)
                        cleanLink = cleanLink.replace(prop, item[cleanProp])
                        return cleanLink
                    })
                }

                return cleanLink
            },

            disableButton (item) {
                const activatedAt = item.activated_at

                return (typeof activatedAt === 'undefined')
                    ? false
                    : !activatedAt
            }
        }
    }
</script>

<style lang="scss">
    .btn-create {
        position: fixed !important;
        z-index: 1;
        bottom: 65px;
        right: 50%;
        transform: translateX(50%);
    }
</style>