<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <section>
        <base-card>
            <!-- named slots. "tempalte" - native html element
            content inside <template> tag will go to <base-card> "header" named slot -->
            <template v-slot:header>
                <h3>{{ fullName }}</h3>
                <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
            </template>

            <!-- the rest, outside named slot, will go to default slot.
           But also we can explicitly indicate "default" slot -->
            <template v-slot:default>
                <p>{{ infoText }}</p>
            </template>
        </base-card>
    </section>
</template>

<script>
    export default {
        props: ['fullName', 'infoText', 'role'],
    };
</script>
