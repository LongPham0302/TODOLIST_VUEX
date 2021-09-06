<template>
  <div class="card panel-success">
    <div class="card-header">List Task</div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th style="width: 10%" class="text-center">#</th>
          <th>Task</th>
          <th style="width: 20%" class="text-center">Level</th>
          <th style="width: 160px">Action</th>
        </tr>
      </thead>
      <tbody v-if="listTaskSearch.length !== 0">
        <todo-list-item
          v-for="(task, index) in listTaskSearch"
          v-bind:key="task.id"
          v-bind:task="task"
          v-bind:index="index + 1"
        />
      </tbody>

      <tbody v-else>
        <tr>
          <td colspan="4"><h3>List Empty</h3></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "todo-list-table",
  components: {
    TodoListItem,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["listTaskSearch"]),
  },
  created() {
    let tasks = localStorage.getItem("tasks") || "[]";
    console.log("create todolist table.vue", JSON.parse(tasks));
    this.changeTasks(JSON.parse(tasks));
  },
  methods: {
    ...mapActions(["changeTasks"]),
  },
};
</script>

<style></style>
