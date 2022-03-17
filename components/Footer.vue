<template>
    <footer class="footer">
        <div class="footer_container">
            <section class="container_menu">
                <ul class="menu_list">
                    <li class="list_item">
                        <NuxtLink to="/" class="item_link">Strona główna</NuxtLink>
                    </li>
                    <li class="list_item">
                        <NuxtLink to="/articles" class="item_link">Artykuły</NuxtLink>
                    </li>
                    <li class="list_item">
                        <NuxtLink to="/about" class="item_link">O nas</NuxtLink>
                    </li>
                    <li class="list_item">
                        <NuxtLink to="/contact" class="item_link">Kontakt</NuxtLink>
                    </li>
                </ul>
            </section>
            <section class="container_contact">
                <h3 class="contact_header">
                    Dane kontaktowe:
                </h3>
                <p class="contact_email">
                    kdobrowolski12345@gmail.com
                </p>
                <p class="contact_phone">
                    +48 506 490 865
                </p>
                <p class="contact_city">
                    83-200 Starogard Gdański
                </p>
            </section>
            <section class="container_copyright">
                Copyright &copy; Kacper Dobrowolski 2022
            </section>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>