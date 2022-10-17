<script setup lang="ts">
import Body from '../components/Body.vue'
import { IItem } from '@local-types/IItem';
import { useStore } from 'vuex';
import { key } from '../store/store';
import { computed } from '@vue/reactivity';

const store = useStore(key)

let items = computed<IItem[]>(() => store.state.items);

</script>

<template>
  <Body :items='items' />
</template>

