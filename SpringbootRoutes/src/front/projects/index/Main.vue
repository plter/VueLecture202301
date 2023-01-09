<template>
  <div class="card" style="max-width: 200px">
    <div class="card-header">前端渲染</div>
    <div class="card-body">
      <button class="btn btn-primary" @click="count++">Click count {{ count }}</button>
    </div>
  </div>

  <first-view></first-view>
</template>
<script setup>
let count = Vue.ref(0);
</script>