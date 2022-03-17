<template>
    <section class="comments">
        <h2 class="comments_header">
            Dodaj komentarz
        </h2>
        <form class="comments_form" @submit.prevent="submit">
            <Input v-model="username" type="text" placeholder="Wpisz imię i nazwisko" name="username" label="Imię i nazwisko" />
            <p v-if="errors.usernameError" class="form_error">{{ errors.usernameError }}</p>
            <Input v-model="content" type="textarea" placeholder="Wpisz treść..." name="content" label="Treść wiadomości" />
            <p v-if="errors.contentError" class="form_error">{{ errors.contentError }}</p>
            <p v-if="success" class="form_success">Dodano komentarz!</p>
            <Button val="Dodaj komentarz" element="submit" />
        </form>
        <h3 class="comments_header">
            Komentarze
        </h3>
        <Comment 
            v-for="comment in commentsData"
            :key="comment.id"
            :username="comment.attributes.username"
            :content="comment.attributes.content"
            :date="comment.attributes.createdAt"
        />
    </section>
</template>

<script>
import { commentValidation } from '../helpers/validations';

export default {
    data: () => ({
        username: '',
        content: '',
        commentsData: null,
        errors: {
            usernameError: null,
            contentError: null
        },
        success: false
    }),
    props: ['comments'],
    created() {
        this.commentsData = this.comments;
    },
    methods: {
        resetStatus () {
            this.errors = {
                usernameError: null,
                contentError: null,
            }

            this.success = false;
        },
        async submit () {
            try {
                this.resetStatus();

                const articleId = this.$route.params.article;

                const comment = {
                    data: {
                        username: this.username,
                        content: this.content,
                        article: articleId
                    }
                }

                const validated = commentValidation(comment);

                if (validated.errors) {
                    const { errors } = validated;

                    this.errors = {
                        usernameError: errors.usernameError,
                        contentError: errors.contentError
                    }
                } else {

                    const article = await this.$store.dispatch('comments/createComment', comment);
                    
                    this.commentsData = article.data.attributes.comments.data;
                    this.success = true;
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>