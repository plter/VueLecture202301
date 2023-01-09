<template>

  <div>
    <textarea ref="ta" style="width: 500px;height: 200px;" v-model="output"></textarea>
  </div>
  <div>
    <input @keyup="keydownHandler" v-model="input">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      output: "",
      input: ""
    }
  },

  methods: {
    keydownHandler(e) {
      console.debug(e);
      if (e.keyCode == 13) {
        this.output += new Date() + "\n" + this.input + "\n";
        this.input = "";

        this.$nextTick(() => {
          this.$refs.ta.scrollTop = this.$refs.ta.scrollHeight;
        });
      }
    }
  }
}
</script>

<style scoped>
</style>
