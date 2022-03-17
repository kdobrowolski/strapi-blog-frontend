<template>
    <div class="input_container">
        <label class="container_label" :for="name">{{ label }}</label>

        <template v-if="type != 'textarea'">
            <input class="container_input" @input="updateValue($event.target.value)" :type="type" :placeholder="placeholder" :name="name" />
        </template>

        <template v-else>
            <textarea class="container_textarea" @input="updateValue($event.target.value)" :name="name" :placeholder="placeholder" />
        </template>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            required: true,
            type: String
        },
        placeholder: {
            type: String,
        },
        name: {
            required: true,
            type: String
        },
        label: {
            required: true,
            type: String
        }
    },
    methods: {
        updateValue (value) {
            this.$emit('input', value);
        },
    },
}
</script>