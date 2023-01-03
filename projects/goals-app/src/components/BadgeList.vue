<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <base-card>
       <!-- "v-slot:header" is the same as "#header" -->
        <template v-slot:header>
            <h2>Available Badges</h2>
        </template>

        <template v-slot:default>
            <ul>
                <li>
                    <base-badge type="admin" caption="ADMIN"></base-badge>
                </li>
                <li>
                    <base-badge type="author" caption="AUTHOR"></base-badge>
                </li>
            </ul>
        </template>
    </base-card>
</template>

<!-- styles encapsulation
Implementation: vue adds custom data-... attribute with generated ID and also adjusts css selectors to match these attrs -->
<style scoped>
    section h2 {
        margin: 0.5rem 0;
        color: #3a3a3a;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
    }

    li {
        margin-right: 1rem;
    }
</style>
