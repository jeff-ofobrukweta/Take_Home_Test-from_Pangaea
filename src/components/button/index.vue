<template>
  <button :name="customName" @click="handleButtonAction" :class="`button ${customClass}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    customClass: {
      type: String,
      default: ""
    },
    customName: {
      type: String,
      default: "",
      required: true
    }
  },
  methods: {
    handleButtonAction() {
      this.$emit('buttonClick', {
        name: this.customName
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("./index.scss");
</style>
