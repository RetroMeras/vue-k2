<template>
  <h1>{{ newText }}</h1>
</template>

<script setup lang="ts">
let { newText } = defineProps<{ newText: String }>();
</script>
