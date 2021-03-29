<template>
  <div>
    <div>
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <ModalTemplateBase v-if="showModal" @close="showModal = false">
        <h3 slot="header">custom header</h3>
      </ModalTemplateBase>
    </div>
  </div>
</template>

<script>
import ModalTemplateBase from "./modal";

export default {
  name: "ModalComponent",
  data() {
    return {
      showModal: false
    };
  },
  components: { ModalTemplateBase }
};
</script>