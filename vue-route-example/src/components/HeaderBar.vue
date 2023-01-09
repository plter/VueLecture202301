<template>
  <div class="header">
    <router-link to="/" style="margin-right: 10px;" :style="{color:currentPath=='/'?'red':'black'}">
      FirstPage
    </router-link>
    <router-link to="/second" style="margin-right: 10px;" :style="{color:currentPath=='/second'?'red':'black'}">
      SecondPage
    </router-link>
    <router-link to="/third" style="margin-right: 10px;" :style="{color:currentPath=='/third'?'red':'black'}">
      ThirdPage
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {currentPath: "/"}
  },

  watch: {
    $route(to, from) {
      this.currentPath = to.path;
    }
  }
}
</script>

<style>

</style>