<template>
    <section class="Page">
        <div class="Page_contact">
            <h2 class="contact_header">
                Skontaktuj się z nami za pomocą formularza
            </h2>
            <section class="contact_info">
                <p class="info_email">
                    {{ contact.email }}
                </p>
                <p class="info_phone">
                    {{ contact.phone }}
                </p>
                <p class="info_city">
                    {{ contact.city }}
                </p>
            </section>
            <form class="contact_form" @submit.prevent="submit">
                <Input v-model="fullname" type="text" placeholder="Wpisz imię i nazwisko" name="fullname" label="Imię i nazwisko" />
                <p v-if="errors.fullnameError" class="form_error">{{ errors.fullnameError }}</p>
                <Input v-model="email" type="email" placeholder="Wpisz e-mail" name="email" label="Adres E-mail" />
                <p v-if="errors.emailError" class="form_error">{{ errors.emailError }}</p>
                <Input v-model="phone" type="tel" placeholder="Wpisz nr telefonu" name="phone" label="Nr telefonu" />
                <p v-if="errors.phoneError" class="form_error">{{ errors.phoneError }}</p>
                <Input v-model="msg" type="textarea" placeholder="Wpisz treść..." name="msg" label="Treść wiadomości" />
                <p v-if="errors.msgError" class="form_error">{{ errors.msgError }}</p>
                <p v-if="success" class="form_success">Wiadomość została wysłana!</p>
                <Button val="Wyślij wiadomość" element="submit" />
            </form>
        </div>
    </section>
</template>

<script>
import { contactValidation } from '../helpers/validations';

export default {
    data: () => ({
        fullname: '',
        email: '',
        phone: '',
        msg: '',
        errors: {
            emailError: null,
            fullnameError: null,
            phoneError: null,
            msgError: null,
        },
        success: false
    }),
    async asyncData ({ store }) {
        const contact = await store.dispatch('getContactInfo');
        
        return { contact }
    },
    methods: {
        resetStatus () {
            this.errors = {
                emailError: null,
                fullnameError: null,
                phoneError: null,
                msgError: null,
            }

            this.success = false;
        },
        async submit () {
            try {
                this.resetStatus();

                const fields = {
                    data: {
                        fullname: this.fullname,
                        email: this.email,
                        phone: this.phone,
                        msg: this.msg
                    }
                }

                const validated = contactValidation(fields.data);

                if (validated.errors) {
                    const { errors } = validated;

                    this.errors = {
                        fullnameError: errors.fullnameError,
                        emailError: errors.emailError,
                        phoneError: errors.phoneError,
                        msgError: errors.msgError
                    }
                } else {
                    await this.$store.dispatch('sendEmail', fields);
                    this.success = true;
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>