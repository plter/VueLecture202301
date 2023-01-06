<template>
  <button @click="count++">Click count {{ count }}</button>

  <first-view></first-view>
</template>

<script>
import FirstView from "@/components/FirstView.vue";

export default {
  name: "App",
  components: {FirstView},
  data() {
    return {count: 0}
  }
}
</script>