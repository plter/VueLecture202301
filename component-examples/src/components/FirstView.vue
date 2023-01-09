<template>
  First view:
  <div>Your name is: {{ name }}</div>
</template>

<script>
export default {
  name: "FirstView",
  props: ["name"]
}
</script>

<style scoped>

</style>