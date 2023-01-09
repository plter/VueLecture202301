<template>
  Class binding:
  <div :class="{red:color=='red',green:color=='green'}" style="width: 100px;height: 100px">
    <button @click="color=color=='red'?'green':'red'">Switch</button>
  </div>
</template>

<script setup>

import {ref} from "vue";

const color = ref("red");

</script>

<style>

.red {
  background-color: red;
}

.green {
  background-color: green;
}

</style>