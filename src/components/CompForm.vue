<template>
  <b-col cols="12" lg="6">
    <form-add />
    <form
      v-if="isShowForm"
      action=""
      method="POST"
      class="form-inline justify-content-between"
    >
      <div class="form-group">
        <label class="sr-only" for="">label</label>
        <input
          v-model="taskName"
          type="text"
          class="form-control"
          placeholder="Task Name"
        />
      </div>
      <div class="form-group">
        <label class="sr-only" for="">label</label>
        <select v-model="level" class="form-control" required="required">
          <option value="0">Small</option>
          <option value="1">Medium</option>
          <option value="2">High</option>
        </select>
      </div>

      <button type="button" class="btn btn-primary" v-on:click="handleAddNew">
        Submit
      </button>
      <button type="button" class="btn btn-primary" v-on:click="handleEditTask">
        Update
      </button>
      <button type="button" v-on:click="HandleCancel" class="btn btn-secondary">
        Cancel
      </button>
    </form>
  </b-col>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FormAdd from "./FormAdd";
import uuidv4 from "uuid/v4";
export default {
  name: "comp-form",
  components: {
    FormAdd
  },
  data() {
    return {
      taskName: "",
      level: 0
    };
  },
  computed: {
    ...mapState(["isShowForm", "taskSelected"])
  },
  watch: {
    taskSelected: function(newData, oldData) {
      if (newData !== null) {
        this.taskName = newData.name;
        this.level = newData.level;
      }
      console.log("watcher taskSelected", newData, oldData);
    }
  },
  beforeUpdate() {},
  methods: {
    ...mapActions(["toggleForm"]),
    handleEditTask() {
      let objTaskUpdate = {
        id: this.taskSelected.id,
        name: this.taskName,
        level: parseInt(this.level)
      };
      this.$store.dispatch("handleEditTask", objTaskUpdate);
      this.handleResetData();
    },
    handleAddNew() {
      if (this.taskName.trim()) {
        let objTask = {
          id: uuidv4(),
          name: this.taskName.trim(),
          level: parseInt(this.level)
        };
        this.$store.dispatch("handleAddNew", objTask);
        this.HandleCancel();
      } else {
        alert("Vui lòng nhập tên ");
      }
    },
    HandleCancel() {
      this.toggleForm();
      this.handleResetData();
    },
    handleResetData() {
      this.taskName = "";
      this.level = 0;
    }
  }
};
</script>
<style>
</style>
