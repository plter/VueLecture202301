<template>
  Class binding:
  <div v-text="count">
  </div>
  <div :class="{red:color=='red',green:color=='green'}" style="width: 100px;height: 100px">
    <button @click="color=color=='red'?'green':'red'">Switch</button>
  </div>
</template>

<script setup>

import {ref} from "vue";

const color = ref("red");
const count = ref(1);

</script>

<style scoped>

.red {
  background-color: red;
}

.green {
  background-color: green;
}

</style>