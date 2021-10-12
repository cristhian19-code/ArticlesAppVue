<template>
    <div class="container-articles py-3 flex flex-wrap justify-content-center">
        <CardArticleVue v-for="article in getMyArticles" :article="article" :key="article.title"/>
    </div>
</template>

<script>
import CardArticleVue from '../components/CardArticle.vue'
import { mapGetters } from 'vuex';

export default {
    components: {
        CardArticleVue
    },
    computed: {
        ...mapGetters([
            'getMyArticles',
        ])
    },
}
</script>

<style>
.container-articles{
    grid-gap: 15px;
}
</style>