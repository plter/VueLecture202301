<script setup lang="ts">
import FirstView from "./components/FirstView.vue";
import CustomEvent from "./components/CustomEvent.vue";
import AbstractComponent from "./components/AbstractComponent.vue";


function customventHandler() {
  console.log("Custom event triggered");
}

</script>

<template>
  <first-view name="大1"></first-view>
  <hr>
  <custom-event @customevent="customventHandler"></custom-event>
  <hr>
  <abstract-component>
    Custom content
    <template #list="{items}">
      <div v-for="i in items">
        <span style="font-weight: bold;color: red;">名字：{{ i.name }}</span>,年龄：{{ i.age }}
      </div>
    </template>
    <template #footer>
      Custom footer
    </template>
  </abstract-component>
</template>
