<template>
  <div v-for="i in items">
    name:{{ i.name }}, age:{{ i.age }}
  </div>
</template>

<script>
export default {
  name: "RenderList",

  data() {
    return {
      items: [
        {name: "大1", age: 20},
        {name: "中2", age: 21},
        {name: "小3", age: 22}
      ]
    }
  }
}
</script>

<style scoped>

</style>