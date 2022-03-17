<template>
    <nav class="Nav" :class="{ 'active': isActive }">
        <div class="Nav_container">
            <span class="Nav_logo">StrapiBlog</span>
            <section class="Nav_menu">
                <ul class="menu_list">
                    <li class="list_item">
                        <NuxtLink to="/" class="item_link" @click.native="closeNav">Strona główna</NuxtLink>
                    </li>
                    <li class="list_item">
                        <NuxtLink to="/articles" class="item_link" @click.native="closeNav">Artykuły</NuxtLink>
                    </li>
                    <li class="list_item">
                        <NuxtLink to="/about" class="item_link" @click.native="closeNav">O nas</NuxtLink>
                    </li>
                    <li class="list_item">
                        <NuxtLink to="/contact" class="item_link" @click.native="closeNav">Kontakt</NuxtLink>
                    </li>
                </ul>
            </section>
            <font-awesome-icon class="container_close_icon" :icon="['fa', 'xmark']" @click="toggleNav" />
            <font-awesome-icon class="container_open_icon" icon="bars" @click="toggleNav" />
        </div>
    </nav>
</template>

<script>
export default {
    data: () => ({
        isActive: false
    }),
    methods: {
        toggleNav() {
            this.isActive = !this.isActive;
        },
        closeNav () {
            if (this.isActive) {
                this.isActive = !this.isActive;
            }
        }
    }
}
</script>