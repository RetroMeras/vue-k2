<template>
    <div class="mx-auto w-2/3 mt-5 flex flex-col gap-5">
        <div>Всего активных задач: {{ items.filter(item => item.status == "active").length }}</div>
        <Item :item="item" v-for="item in items" />
    </div>
</template>


<script setup lang="ts">
import {IItem} from "@local-types/IItem";
import Item from "./Item.vue";


let {items} = defineProps<{items: IItem[]}>()
</script>
