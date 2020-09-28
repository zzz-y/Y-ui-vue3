<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>lalala UI</h1>
      <h2>一个厉害的UI</h2>
      <p class="actions">
        <a href="https://github.com">github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";

export default {
  components: {
    Topnav,
  },
};
</script>
