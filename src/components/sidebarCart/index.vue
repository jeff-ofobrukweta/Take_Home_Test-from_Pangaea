<template>
  <div class="transparent-holder">
    <ModalDialogue>
      <ProductCard customClass="side-bar-product-card">
      </ProductCard>
    </ModalDialogue>
  </div>
</template>

<script>
import ProductCard from "../productCard/index";
import ModalDialogue from "../modalDialogue/index";

export default {
  name: "Sidebar",
  data() {
    return {
    };
  },
  components: {
    ProductCard,
    ModalDialogue,
  },
  methods: {
  },
  props: {
    customClass: {
      type: String,
      default: "",
    },
    showModal:{
      type:Boolean,
      default:false
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("./index.scss");
</style>
