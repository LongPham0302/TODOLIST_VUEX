<template>
  <tr>
    <td class="text-center">{{ index }}</td>
    <td>{{ task.name }}</td>
    <td class="text-center">
      <span class="badge" v-bind:class="classLevel">{{ getLevelName }}</span>
    </td>
    <td>
      <button type="button" v-on:click="handleEdit()" class="btn btn-warning">
        Edit
      </button>
      <button v-on:click="handleDelete()" type="button" class="btn btn-danger">
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
import mapLevel from "../mock/level";
import { mapState, mapActions } from "vuex";
export default {
  name: "todo-list-item",
  props: {
    task: { type: Object, default: null },
    index: Number,
  },
  computed: {
    ...mapState(["isHide"]),
    getLevelName() {
      return this.mapLevel[this.task.level].level;
    },
    classLevel() {
      return this.mapLevel[this.task.level].class;
    },
  },
  data() {
    return {
      mapLevel: mapLevel,
    };
  },
  methods: {
    ...mapActions({ actionhandleDelete: "handleDelete" }),
    handleDelete() {
      if (confirm("bạn có muốn xóa " + this.task.name)) {
        this.actionhandleDelete(this.task);
      }
    },
    handleEdit() {
      this.$store.dispatch("handelEdit", this.task);
    },
    handleHide() {
      this.$store.dispatch("handleHide");
    },
  },
};
</script>

<style></style>
