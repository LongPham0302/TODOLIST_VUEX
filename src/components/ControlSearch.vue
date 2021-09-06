<template>
  <div class="col-12">
    <div class="input-group">
      <input
        v-bind:value="strSearch"
        v-on:input="handleSearch"
        type="text"
        class="form-control"
        placeholder="Search for..."
      />
      <span class="input-group-append">
        <button class="btn btn-info" type="button" v-on:click="handleClear">
          Clear!
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "control-search",
  computed: {
    ...mapState(["strSearch"])
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["handleSearch"]),
    handleClear() {
      this.$store.dispatch("handleSearch", "");
    },
    handleSearch(e) {
      this.$store.dispatch("handleSearch", e.target.value);
    }
  }
};
</script>

<style>
</style>
