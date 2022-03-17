<template>
    <section class="Page">
        <article class="Page_article">
            <img class="article_image" :src="image" alt="article_image" />
            <p class="article_tags_and_date">
                {{ article.attributes.tags + " - " }} {{ article.attributes.createdAt | formatDate }}
            </p>
            <h2 class="article_header">
                {{ article.attributes.title }}
            </h2>
            <div class="article_content" v-html="content"></div>
            <CommentContainer :comments="comments"/>
        </article>
    </section>
</template>

<script>
export default {
    async asyncData ({ store, route, $md }) {
        const articleId = route.params.article;

        const res = await store.dispatch('articles/getOneArticle', articleId);

        const article = res.data;
        const image = article.attributes.image.data.attributes.url;

        const content = $md.render(article.attributes.content);

        const comments = article.attributes.comments.data;

        return { article, content, image, comments };
    }
}
</script>