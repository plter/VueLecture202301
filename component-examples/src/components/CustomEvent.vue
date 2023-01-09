<template>
  Custom event:
  <div>
    <button @click="clicked">Trigger custom event</button>
  </div>
</template>

<script>
export default {
  name: "CustomEvent",
  emits: ["customevent"],

  methods: {
    clicked() {
      this.$emit("customevent");
    }
  }
}
</script>

<style scoped>

</style>