<template>
<Sidebar v-model:visible="activeSidebar" position="left">
	<router-link v-for="button in buttons" :key="button.path" :to="{name: button.label}">
        <Button  :icon="button.icon" class="p-button-secondary p-button-text mt-5 my-1" :label="button.label"/>
    </router-link>
</Sidebar>
</template>

<script>
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'
import { inject } from 'vue'

export default {
    setup() {
        const activeSidebar = inject('activeSidebar');

        return {
            activeSidebar
        }
    },
    data() {
        return {
            buttons: [
                {icon: 'pi pi-home',label:'Home',path:'home'},
                {icon: 'pi pi-bookmark',label:'Articles',path:'articles'},
                {icon: 'pi pi-bookmark',label:'My Articles',path:'my_articles'},
                {icon: 'pi pi-heart',label:'Favorites',path: 'favorites'},
                {icon: 'pi pi-user',label:'Profile',path:'profile'},
                {icon: 'pi pi-cog',label:'Settings',path:'settings'},
            ]
        }
    },
    components:{
        Sidebar,
        Button
    }
}
</script>

<style scoped>
.p-button{
    width: 100%
}

a{
    text-decoration: none;
}
</style>