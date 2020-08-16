<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <vue-tel-input
                v-model="value"
                :placeholder="field.name"
                wrapperClasses="w-full form-control form-input form-input-bordered pl-0"
                inputClasses="text-80 text-md"
                mode="international"
                @country-changed="updateCountry"
                >
            </vue-tel-input>
        </template>
    </default-field>

</template>

<style>
.vue-tel-input {
    border-radius: .5rem !important;
    /* overflow: hidden; */
}

.vue-tel-input input {
    outline: none !important;
}
</style>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    data() {
        return {
            country: null,
            number: null,
        }
    },


    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value;
        },


        updateCountry(country) {
            this.country = country;
        }
    },
}
</script>
