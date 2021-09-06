<template>
  <div class="col-12 col-lg-6">
    <div class="row">
      <ControlSort v-bind:orderBy="orderBy" v-bind:orderDir="orderDir">
      </ControlSort>
      <ControlSearch></ControlSearch>
    </div>
  </div>
</template>

<script>
import ControlSort from "./ControlSort";
import ControlSearch from "./ControlSearch";
import { mapActions, mapState } from "vuex";
export default {
  name: "comp-control",
  components: {
    ControlSort,
    ControlSearch
  },
  computed: {
    ...mapState(["orderBy", "orderDir"])
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
