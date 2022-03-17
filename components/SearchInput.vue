<template>
    <div class="search">
        <form class="search_form" @submit.prevent="submit">
            <input class="form_input" v-model="val" type="text" name="search" placeholder="Wyszukaj" />
            <Button val="Wyszukaj" element="submit" />
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        val: ''
    }),
    methods: {
        submit () {
            this.$router.push(`/search/${this.val}`);
        }
    }
}
</script>