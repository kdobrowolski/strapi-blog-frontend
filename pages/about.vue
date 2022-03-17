<template>
    <section class="Page">
        <div class="Page_about">
            <h2 class="about_header">
                Kilka słów o nas
            </h2>
            <div class="about_content" v-html="content">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    async asyncData ({ store, $md }) {
        try {
            await store.dispatch('getAboutMe');
            
            const aboutMe = store.getters['getAboutMe'];
            const aboutMeContent = aboutMe.data.attributes.content;

            const content = $md.render(aboutMeContent);

            return { content }
        } catch (error) {
            console.error(error);
        }
    }
}
</script>