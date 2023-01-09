<template>
  <div>
    <div>Title</div>
    <div>
      <slot>Content</slot>
    </div>
    <div>
      <slot name="list" :items="items">
        <div v-for="i in items">Name:{{ i.name }}, age:{{ i.age }}</div>
      </slot>
    </div>
    <div>
      <slot name="footer">Footer</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbstractComponent",

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