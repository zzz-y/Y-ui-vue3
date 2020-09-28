<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", asideVisible);
  },
};
</script>
