<template>
<Dialog header="Pricing" v-model:visible="displayMaximizable" :style="{width: '90vw'}" :maximizable="true" :modal="true">
    <PricesVue />
</Dialog>
</template>

<script>
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import PricesVue from './Prices.vue'

import { inject } from 'vue'

export default {
    setup() {
        const displayMaximizable = inject('displayMaximizable');

        return {
            displayMaximizable
        }
    },
    components:{
        Dialog,
        Button,
        PricesVue
    }
}
</script>