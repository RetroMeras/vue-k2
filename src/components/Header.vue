<template>
  <div class="relative mb-14">
    <div class="fixed top-0 left-0 right-0 h-14 bg-white flex flex-row justify-between items-center w-full px-10">
      <div class="text-xl">Freelance</div>
      <div class="flex flex-row gap-10">
        <router-link :to="{name: 'Main'}">Все задачи</router-link>
        <router-link :to="{name: 'Create'}">Создать</router-link>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
</script>
