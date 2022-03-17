<template>
        <div v-if="element == 'nuxtlink'" class="btn" @click="redirect">
            <NuxtLink class="btn_container" :to="{ path: this.href }">
                {{ val }}
            </NuxtLink>
            <font-awesome-icon class="btn_icon" :icon="['fa', 'arrow-right']" />
        </div>
        <button v-else-if="element == 'submit'" type="submit" class="btn btn--submit">
            <span class="btn_container">{{ val }}</span>
            <font-awesome-icon class="btn_icon" :icon="['fa', 'arrow-right']" />
        </button>
</template>

<script>
export default {
    props: {
        val: {
            type: String,
            required: true
        },
        href: {
            type: String
        },
        form: {
            type: Boolean
        },
        element: {
            required: true,
            type: String
        }
    },
    methods: {
        redirect () {
            this.$router.push(this.href);
        }
    }
}
</script>