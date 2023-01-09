<script>
import {defineComponent} from "vue";
import HeaderBar from "./components/HeaderBar.vue";

export default defineComponent({
  components: {HeaderBar}
})
</script>

<template>
  <header-bar></header-bar>
  <router-view></router-view>
</template>

<style>

</style>
