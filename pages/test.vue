<template>
    <div>
        <h1>
            All those three links will try to do the same thing but only the
            first one will trigger a recursive Sentry Error
        </h1>
        <p>
            If you click on one of the links they should redirect you back to
            the index page (<code>/</code>). But instead, the router plugin
            (<code>./plugins/router.js</code>) will infer and redirect you to
            the test page where you currently are.
        </p>
        <ol>
            <li
                @click="handleLinkClick"
                style="text-decoration: underline; cursor: pointer"
            >
                A <code>@click</code>-handler redirecting you to Index
            </li>
            <li>
                <router-link :to="{ name: 'index' }">
                    A <code>router-link</code> redirecting you to the Index
                </router-link>
            </li>
            <li>
                <a href="/">and a link (<code>&lt;a&gt;</code>)</a>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "TestPage",
    methods: {
        handleLinkClick() {
            this.$router.push({ name: "index" });
        },
    },
};
</script>
