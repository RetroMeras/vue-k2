<template>
  <h1 class="text-xl text-center p-5 bg-white w-1/3 mx-auto rounded-sm mt-10">{{ newText }}</h1>
</template>

<script setup lang="ts">
let { newText } = defineProps<{ newText: String }>();
</script>
