<template>
    <panel-item :field="field">
        <template slot="value">
            <a :href="phoneUrl" class="cursor-pointer dim inline-block text-primary font-bold no-underline">{{ field.value }}</a>
        </template>
    </panel-item>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],

    computed: {
        phoneUrl: function () {
            return 'tel:' +
                this.field.value.match(/\d+/g).join('');
        }
    }
}
</script>
