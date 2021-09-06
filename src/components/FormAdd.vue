<template>
  <div class="form-group add-task">
    <button
      v-if="!isShowForm"
      type="button"
      class="btn btn-info btn-block"
      v-on:click="onClickAddTask"
    >
      Add Task
    </button>
    <button
      v-else
      type="button"
      class="btn btn-primary btn-block"
      v-on:click="onClickCloseTask"
    >
      Close Form
    </button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "form-add",
  data() {
    return {};
  },
  computed: {
    ...mapState(["isShowForm"])
  },
  methods: {
    ...mapActions(["toggleForm"]),
    onClickAddTask() {
      this.toggleForm();
    },
    onClickCloseTask() {
      this.toggleForm();
    }
  }
};
</script>

<style>
</style>
