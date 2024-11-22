<script setup lang="ts">
import { VerButton, VerRow } from "versakit-ui";
</script>

<template>
  <ver-row class="mb-4">
    <ver-button disabled>Default</ver-button>
    <ver-button disabled type="primary">Primary</ver-button>
    <ver-button disabled type="success">Success</ver-button>
    <ver-button disabled type="info">Info</ver-button>
    <ver-button disabled type="warning">Warning</ver-button>
    <ver-button disabled type="danger">Danger</ver-button>
  </ver-row>
  <ver-row class="mb-4">
    <ver-button disabled plain>Plain</ver-button>
    <ver-button disabled plain type="primary">Primary</ver-button>
    <ver-button disabled plain type="success">Success</ver-button>
    <ver-button disabled plain type="info">Info</ver-button>
    <ver-button disabled plain type="warning">Warning</ver-button>
    <ver-button disabled plain type="danger">Danger</ver-button>
  </ver-row>
</template>

<style scoped>
.mb-4 {
  margin-bottom: 1rem;
}
.ver-btn + .ver-btn {
  margin: 0px 10px;
}
</style>
