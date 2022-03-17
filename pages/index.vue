<template>
  <section class="Page">
    <section class="Page_articles">
      <h2 class="articles_header">
        Najnowsze artykuły
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
        :createdAt="article.attributes.createdAt"
      />
    </section>
  </section>
</template>

<script>
export default {
  async asyncData ({ store, $md }) {
    const articles = await store.dispatch('articles/getFilteredArticles');
    return { articles };
  }
}
</script>
