<template>
    <section class="Page">
        <div class="Page_articles">
            <h2 class="articles_header">
                Artykuły
            </h2>
            <SearchInput />
            <h3 v-if="articles.length == 0" class="articles_header">
                Brak artykułów
            </h3>
            <ArticleCard
                v-for="article in articles"
                :key="article.id"
                :article-id="article.id"
                :title="article.attributes.title"
                :description="article.attributes.description"
                :tags="article.attributes.tags"
                :content="article.attributes.content"
                :image="article.attributes.image.data.attributes.url"
                :date="article.attributes.createdAt"
            />
        </div>
    </section>
</template>

<script>
export default {
    async asyncData ({ store, $md }) {
        await store.dispatch('articles/getArticles');

        const res = store.getters['articles/getArticles'];

        const articles = res.data;

        return { articles };
    }
}
</script>