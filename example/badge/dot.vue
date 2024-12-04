<script setup lang="ts">
import { VerButton, VerCol, VerBadge, VerRow, VerAvatar } from "versakit-ui";
</script>

<template>
  <ver-row>
    <ver-col :span="6">
      <ver-badge dot type="success"> <VerAvatar src="../../assets/avatar.webp" /> </ver-badge>
    </ver-col>

    <ver-col :span="6">
      <ver-badge dot type="danger">
        <VerAvatar src="../../assets/avatar.webp" />
      </ver-badge>
    </ver-col>
  </ver-row>
</template>
