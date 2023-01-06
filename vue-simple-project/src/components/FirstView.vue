<template>
  <div>
    FirstView:
    <div>
      <button @click="count++">Click count {{ count}}</button>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

let count = ref(0)

</script>

<style scoped>

</style>