<template>
  Style binding
  <div :style="{backgroundColor:color}" style="width: 100px;height: 100px;">
    <button @click="color=color=='red'?'green':'red'">Switch color</button>
  </div>
</template>

<script>
export default {
  name: "StyleBinding",

  data() {
    return {
      color: 'red'
    }
  }
}
</script>

<style scoped>

</style>