<template>
  <div class="container-articles flex flex-wrap justify-content-center">
    <CardArticleVue
      v-for="(article, index) in getArticlesbyFavorites"
      :key="article.title"
      :article="article"
      :route="$route.path"
      :index="index"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardArticleVue from "../components/CardArticle.vue";

export default {
  components: {
    CardArticleVue,
  },

  computed: {
    ...mapGetters(["getArticlesbyFavorites"]),
  },
};
</script>

<style scoped>
.container-articles {
  grid-gap: 15px;
}
</style>
