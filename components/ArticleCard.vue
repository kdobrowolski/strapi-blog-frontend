<template>
    <article class="Article_card">
        <img class="card_image" :src="image" alt="article_image"/>
        <section class="card_container">
            <p class="container_tags_and_date">
                {{ tags + " - " }} {{ date | formatDate }}
            </p>
            <h2 class="container_title">
                {{ title }}
            </h2>
            <p class="container_description">
                {{ description }}
            </p>
            <Button val="Przeczytaj" :href="`/articles/${articleId}`" element="nuxtlink" />
        </section>
    </article>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String
        },
        description: {
            required: true,
            type: String
        },
        tags: {
            required: true,
            type: String
        },
        content: {
            required: true,
            type: String
        },
        articleId: {
            required: true,
            type: Number | String
        },
        image: {
            type: String
        },
        date: {
            type: String
        }
    }
}
</script>