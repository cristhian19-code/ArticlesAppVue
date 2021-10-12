<template>
  <div class="grid m-0">
    <CardPriceVue v-for="plan in prices" :key="plan.title" :plan="plan" />
  </div>
</template>

<script>
import CardPriceVue from "./CardPrice.vue";

export default {
  data() {
    return {
      prices: [
        {
          title: "Basic",
          subtitle: "Plan Description",
          price: 9,
          description: [
            "Arcu vitae elementum",
            "Dui faucibus in ornare",
            "Morbi tincidunt augue",
          ],
        },
        {
          title: "Premiun",
          subtitle: "Plan Description",
          price: 29,
          description: [
            "Arcu vitae elementum",
            "Dui faucibus in ornare",
            "Morbi tincidunt augue",
            "Duis ultricies lacus sed",
          ],
        },
        {
          title: "Enterprice",
          subtitle: "Plan Description",
          price: 49,
          description: [
            "Arcu vitae elementum",
            "Dui faucibus in ornare",
            "Morbi tincidunt augue",
            "Duis ultricies lacus sed",
            "Imperdiet proin",
            "Nisi scelerisque",
          ],
        },
      ],
    };
  },
  components: {
    CardPriceVue,
  },
};
</script>

<style></style>
