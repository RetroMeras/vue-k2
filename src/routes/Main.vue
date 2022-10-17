<script setup lang="ts">
import Body from "../components/Body.vue";
import { IItem } from "@local-types/IItem";
import { useStore } from "vuex";
import { key } from "../store/store";
import { computed } from "@vue/reactivity";
import New from "../components/New.vue";

const store = useStore(key);

let items = computed<IItem[]>(() => store.state.items);
</script>

<template>
  <New newText="Моя ветка 😕"></New>
  <Body :items="items" />
</template>
