<template>
    <section class="comment">
        <p class="comment_fullname">
            {{ username }}
        </p>
        <p class="comment_date">
            {{ date | formatDate }}
        </p>
        <p class="comment_content">
            {{ content }}
        </p>
    </section>
</template>

<script>
export default {
    props: {
        username: {
            required: true,
            type: String
        },
        content: {
            required: true,
            type: String
        },
        date: {
            required: true,
            type: String
        }
    }
}
</script>