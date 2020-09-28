<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const asideVisible = ref(false);
    provide("side", asideVisible);
  },
};
</script>
