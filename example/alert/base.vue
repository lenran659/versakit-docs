<template>
  <ver-alert title="success" type="success" />
  <ver-alert title="info" type="info" />
  <ver-alert title="warning" type="warning" />
  <ver-alert title="danger" type="danger" />
</template>

<script lang="ts" setup>
import { VerAlert } from "versakit-ui";
</script>

<style scoped>
.ver-alert + .ver-alert {
  margin: 10px 0;
}
</style>
