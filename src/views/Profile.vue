<template>
  <div>
    <div class="portada flex justify-content-center">
        <img class="avatar" src="https://images.pexels.com/photos/41315/africa-african-animal-cat-41315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    </div>
    <div class="flex justify-content-center mt-8">
        <div class="col-8">
            <div class="flex flex-wrap">
                <div class="my-2 flex flex-column col-12 md:col-6">
                    <span>Firstname:</span>
                    <InputText class="mt-2" value="Christian Ricardo"/> 
                </div>
                <div class="my-2 flex flex-column col-12 md:col-6">
                    <span>Lastname:</span>
                    <InputText class="mt-2" value="Aponte Gutierrez"/>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="my-2 flex flex-column col-12 md:col-6">
                    <span>Phone:</span>
                    <InputText type="number" class="mt-2" value="918955118"/>
                </div>
                <div class="my-2 flex flex-column col-12 md:col-6">
                    <span>Sex:</span>
                    <InputText class="mt-2" value="Male"/>
                </div>
            </div>
            <div>
                <div class="my-2 flex flex-column col-12">
                    <span>Email:</span>
                    <InputText class="mt-2 md:col-12" value="christian.aponte.g@uni.pe"/>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="my-2 flex   flex-column col-12">
                    <span>Location:</span>
                    <InputText class="mt-2 md:col-12" value="Mz C lote 10, Lurin"/>
                </div>
            </div>
            <div class="flex flex-wrap justify-content-center  mt-3">
                <Button icon="pi pi-pencil" class="p-button-success mr-2" label="Edit"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

export default {
    components: {
        InputText,
        Button
    }
}
</script>

<style scoped>
.avatar{
    height: 150px;
    width: 150px;
    border-radius: 8px;
    position: absolute;
    bottom: -50px;
    border: 4px solid white;
}

.portada{
    background-image: url(https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-position: center top;
    background-size: cover;
    height: 60vh;
    position: relative;
}
</style>