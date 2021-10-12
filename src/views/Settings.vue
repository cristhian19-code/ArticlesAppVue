<template>
  <div class="flex flex-column px-4">
    <div class="my-2">
      <p>Dark Mode</p>
      <InputSwitch @change="handleDarkmode()" v-model="darkmode" />
    </div>
    <div class="my-2">
      <Toast />
      <p>Avatar</p>
      <FileUpload name="avatar[]" :customUpload="true" @uploader="onUpload" />
      <br>
    </div>
    <div class="my-2">
      <p>Plan</p>
      <div class="flex justify-content-center">
        <Card style="width: 25rem; margin-bottom: 2em">
            <template #title>
              Active Plan
            </template>
            <template #content>
              <ul class="list-none">
                  <li class="my-2">
                    Date of purchase: <Badge severity="info">15/08/2021</Badge>
                  </li>
                  <li class="my-2">
                    Remaining days: <Badge severity="danger">8</Badge>
                  </li>
                  <li class="my-2">
                    Plan: <Badge severity="info">Free</Badge>
                  </li>
              </ul>
            </template>
            <template #footer>
              <div class="flex justify-content-center">
                <Button @click="displayMaximizable = !displayMaximizable" icon="pi pi-chevron-up" label="Upload plan"/>
              </div>
            </template>
        </Card>
      </div>
    </div>
    <div class="flex justify-content-center my-4">
      <Button icon="pi pi-times" class="p-button-danger" label="Delete Account"/>
    </div>
    <DialogPlanVue />
  </div>
</template>

<script>
import InputSwitch from 'primevue/inputswitch'
import FileUpload from 'primevue/fileupload'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Badge from 'primevue/badge'
import DialogPlanVue from '../components/DialogPlan.vue'
import { provide, ref } from 'vue'
import { mapActions } from 'vuex'

export default {
  setup() {
    const displayMaximizable = ref(false);
    provide('displayMaximizable',displayMaximizable);

    return {
      displayMaximizable
    }
  },
  data() {
    return {
      darkmode: false,
      file: null
    }
  },
  methods: {
      ...mapActions(['handleDarkmode']),
      onUpload(e) {
        console.log(e);
        this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
      }
  },
  components:{
    InputSwitch,
    FileUpload,
    Toast,
    Button,
    Card,
    Badge,
    DialogPlanVue
  }
}
</script>

<style>
.display-1{
  font-size: 3rem;
}
</style>