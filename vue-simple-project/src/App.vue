<template>
  <first-view></first-view>
  <hr>
  <second-view></second-view>
  <hr>
  <third-view></third-view>
  <hr>
  <class-binding></class-binding>
  <hr>
  <style-binding></style-binding>
  <hr>
  <render-with-condition></render-with-condition>
  <hr>
  <render-list></render-list>
  <hr>
  <data-binding></data-binding>
</template>

<script>
import FirstView from "@/components/FirstView.vue";
import SecondView from "@/components/SecondView.vue";
import ClassBinding from "@/components/ClassBinding.vue";
import ThirdView from "@/components/ThirdView.vue";
import StyleBinding from "@/components/StyleBinding.vue";
import RenderWithCondition from "@/components/RenderWithCondition.vue";
import RenderList from "@/components/RenderList.vue";
import DataBinding from "@/components/DataBinding.vue";

export default {
  name: "App",
  components: {
    DataBinding,
    RenderList, RenderWithCondition, StyleBinding, ThirdView, ClassBinding, SecondView, FirstView
  }
}
</script>