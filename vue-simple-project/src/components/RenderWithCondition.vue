<template>
  Render with condition:
  <div>
    <button @click="visible=!visible">Show/Hide</button>
    <div v-if="visible" style="width: 100px;height: 100px;background-color: red;"></div>
  </div>
</template>

<script>
export default {
  name: "RenderWithCondition",

  data() {
    return {
      visible: true
    };
  }
}
</script>

<style scoped>

</style>