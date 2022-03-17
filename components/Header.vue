<template>
    <header class="Header">
        <section class="Header_banner">
            <h1 class="banner_headline">
                {{ headerTitle }}
            </h1>
            <p class="banner_underline">{{ headerDescription }}</p>
            <Button val="Zobacz artykuły" href="/articles" element="nuxtlink"/>
        </section>
    </header>
</template>

<script>
import {mapState} from 'vuex';

export default {
    computed: {
        ...mapState({
            headerTitle: state => state.headerInfo.headerTitle.attributes.title,
            headerDescription: state => state.headerInfo.headerDescription.attributes.description
        })
    }
}
</script>