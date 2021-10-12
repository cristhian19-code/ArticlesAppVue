<template>
  <div class="col-12 lg:col-4">
    <div class="p-3 h-full">
      <div class="shadow-2 p-3 h-full flex flex-column" style="border-radius: 6px">
        <div class="text-900 font-medium text-xl mb-2">{{ plan.title }}</div>
        <div class="text-600">{{ plan.subtitle }}</div>
        <hr class="my-3 mx-0 border-top-1 border-bottom-none border-300" />
        <div class="flex align-items-center">
          <span class="font-bold text-2xl text-900">${{ plan.price }}</span>
          <span class="ml-2 font-medium text-600">per month</span>
        </div>
        <hr class="my-3 mx-0 border-top-1 border-bottom-none border-300" />
        <ul class="list-none p-0 m-0 flex-grow-1">
          <li
            v-for="description in plan.description"
            :key="description"
            class="flex align-items-center mb-3"
          >
            <i class="pi pi-check-circle text-green-500 mr-2"></i>
            <span>{{ description }}</span>
          </li>
        </ul>
        <hr class="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
        <Button label="Buy Now" class="p-3 w-full mt-auto"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  props: {
    plan: {
      type: Object,
    },
  },
  components: {
    Button,
  },
};
</script>

<style></style>
