<template>
    <div class="w-full bg-white p-4 flex flex-col gap-5 rounded-sm">
        <div class="flex flex-row justify-between">
            <div class="text-xl">{{item.title}}</div>
            <el-tag effect="dark" round :type="tag_types[item.status]">{{item.status}}</el-tag>
        </div>
        <div class="flex flex-col gap-2">
            <div class="text-sm">{{ formattedDate }}</div>
            <div>
                <el-button type="success" rounded @click="router.push(`/item/${item.id}`)">Посмотреть</el-button>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import {IItem} from "@local-types/IItem";
import { useRouter } from "vue-router";
import {tag_types} from "../utils/tag_types";
import {formatDate} from "../utils/formatDate";

let router = useRouter();

let {item} = defineProps<{item: IItem}>()

const formattedDate = formatDate(item.date)
</script>
