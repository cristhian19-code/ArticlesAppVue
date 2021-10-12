<template>
  <div class="container-articles flex flex-wrap justify-content-center">
    <CardArticleVue
      v-for="(article, index) in getFilteredArticles"
      :key="article.title"
      :index="index"
      :article="article"
      :route="$route.path"
    />
  </div>
</template>

<script>
import CardArticleVue from "../components/CardArticle.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CardArticleVue,
  },
  computed: {
    ...mapGetters(["getFilteredArticles"]),
  },
};
</script>

<style scoped>
.container-articles {
  grid-gap: 15px;
}
</style>
