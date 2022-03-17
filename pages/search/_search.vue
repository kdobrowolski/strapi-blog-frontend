<template>
    <section class="Page">
        <div class="Page_search">
            <h2 class="search_header">
                Wyszukaj post
            </h2>
            <SearchInput />
            <h3 v-if="searchedArticles.length !== 0" class="search_header">
                Wyszukane posty
            </h3>
            <h3 v-else class="search_header">
            Brak wyszukanych postów
            </h3>
            <section class="search_articles">
                <ArticleCard
                    v-for="article in searchedArticles"
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
        </div>
    </section>
</template>

<script>
export default {
    async asyncData ({ store, params }) {
        await store.dispatch('articles/getArticles');
        const res = store.getters['articles/getArticles'];
        const articles = res.data;

        const searchedArticles = [];
        const searchVal = params.search;
        const wordToUpperCase = searchVal.toUpperCase();

        articles.map((article) => {
            const titleUpperCase = article.attributes.title.toUpperCase();
            const descriptionUpperCase = article.attributes.description.toUpperCase();

            const found = titleUpperCase.includes(wordToUpperCase) || descriptionUpperCase.includes(wordToUpperCase);
            
            if (found) {
                searchedArticles.push(article);
            }
        })

        return { searchedArticles };
    }
}
</script>