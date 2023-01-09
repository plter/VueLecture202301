<template>
  Data binding:
  <div>
    <input v-model="value">
  </div>
  <div>
    <input v-model="value">
  </div>
</template>

<script>
export default {
  name: "DataBinding",
  data() {
    return {value: ""}
  }
}
</script>

<style scoped>

</style>