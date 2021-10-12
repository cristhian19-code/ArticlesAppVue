<template>
  <div :class="darkmode ? 'bg-gray-900 text-white' : ''">
    <Sidebar />
    <div class="header flex justify-content-between p-3">
      <Button
        @click="activeSidebar = !activeSidebar"
        icon="pi pi-bars"
        class="p-button-text"
      />
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText type="text" placeholder="Search" />
      </span>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { mapState } from 'vuex';

export default {
  setup(props) {
    const activeSidebar = ref(false);
    provide("activeSidebar", activeSidebar);

    return {
      activeSidebar,
    };
  },
  computed: {
    ...mapState(['darkmode'])
  },
  components: {
    Sidebar,
    Button,
    InputText,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
