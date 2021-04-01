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
    keyid: {
      type: Number,
      default: 10000,
    },
    eventNameToEmit: {
      type: String,
      default: "buttonClick",
      required: true,
    },
    item_title: {
      type: String,
      default: "empty",
    },
    item_image: {
      type: String,
      default: "empty",
    },
    item_price: {
      type: Number,
      default: 10000,
    },
  },
  methods: {
    handleButtonAction() {
      this.$emit(`${this.eventNameToEmit}`, {
        name: this.customName,
        items: {
          id: this.keyid,
          title: this.item_title,
          price: this.item_price,
          image: this.item_image,
          quantity: 1,
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./index.scss";
</style>
