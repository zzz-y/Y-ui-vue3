<template>
<div>
  <router-link to="/">index</router-link>
  <router-link to="/to">to</router-link>
</div>
<router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
