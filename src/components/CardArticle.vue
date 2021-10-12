<template>
  <Card class="p-3" style="width: 25em">
    <template #header>
      <img class="bg-white" :src="article.image" style="height: 20rem" />
    </template>
    <template #title>
      <div class="flex align-items-center justify-content-around">
        <p class="my-1">{{ article.title }}</p>
        <Button
          v-if="route === '/articles' || route === '/favorites'"
          @click="handleFavoriteArticle(index)"
          icon="pi pi-heart"
          class="ml-auto p-button-text p-button-outlined"
          :class="article.favorite ? 'p-button-danger' : 'p-button-info'"
        />
      </div>
    </template>
    <template #subtitle>
      {{ article.author }}
    </template>
    <template #footer>
      <Button icon="pi pi-eye" label="View" />
      <Button
        v-if="article.author === 'Christian Ricardo'"
        @click="handelDeleteArticle(article.id)"
        icon="pi pi-trash"
        label="Delete"
        class="p-button-danger ml-2"
      />
    </template>
  </Card>
</template>

<script>
import { mapActions } from "vuex";
import Button from "primevue/button";
import Card from "primevue/card";
export default {
  props: {
    route: {
      type: String,
    },
    article: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    ...mapActions(["handleFavoriteArticle", "handelDeleteArticle"]),
  },
  components: {
    Button,
    Card,
  },
};
</script>

<style>
.p-card-content {
  padding: 0 !important;
}
</style>
