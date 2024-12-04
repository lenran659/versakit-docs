<script setup lang="ts">
import { VerButton, VerRow } from "versakit-ui";
</script>

<template>
  <ver-row>
    <VerButton shade style="margin: 0.5rem" circle icon="search"></VerButton>
    <VerButton style="margin: 0.5rem" circle type="success" icon="success"></VerButton>

    <VerButton style="margin: 0.5rem" circle type="warning" color="white" icon="edit"></VerButton>

    <VerButton style="margin: 0.5rem" circle type="danger" icon="delete-o"></VerButton>
  </ver-row>
</template>
