<template>
  <button
    :name="customName"
    @click="handleButtonAction"
    :class="`button ${customClass}`"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    customClass: {
      type: String,
      default: "",
    },
    customName: {
      type: String,
      default: "",
      required: true,
    },
    eventNameToEmit:{
      type: String,
      default: "buttonClick",
      required: true,
    }
  },
  methods: {
    handleButtonAction() {
      this.$emit(`${this.eventNameToEmit}`, {
        name: this.customName,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./index.scss";
</style>
