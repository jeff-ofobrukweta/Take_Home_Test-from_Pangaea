<template>
  <div>
    <div>
      <ModalTemplateBase v-if="GET_MODAL_STATE">
        <h3 slot="header">custom header</h3>
      </ModalTemplateBase>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_MODAL_STATE } from "./vuex-module/index.types";
import ModalTemplateBase from "./modal";

export default {
  name: "ModalComponent",
  data() {
    return {
      modalState: false,
    };
  },
  computed: {
    ...mapGetters([GET_MODAL_STATE]),
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
  components: { ModalTemplateBase },
};
</script>