<template>
    <div
        class="mx-auto w-2/3 mt-5 p-5 flex flex-col gap-5 bg-white rounded-sm"
    >
    <div v-if="item" class="flex flex-col gap-5">
        <div class="text-xl">{{item.title}}</div>
        <div class="flex flex-col gap-2">
            <div>Статус: <el-tag effect="dark" round :type="tag_types[item.status]">{{ item.status }}</el-tag></div>
            <div>Дедлайн: {{ formattedDate }}</div>
            <div>Описание: {{ item.description }}</div>
        </div>
        <div>
            <el-button plain type="success" round @click="changeStatus('active')">Взять в работу</el-button>
            <el-button type="success" round @click="changeStatus('done')">Завершить</el-button>
            <el-button type="danger" round @click="changeStatus('canceled')">Отменить</el-button>
            <el-button type="danger" round @click="handleDelete">Удалить</el-button>
        </div>
    </div>
    <div v-else>Задача с таким id не найдена</div>
    </div>
</template>



<script setup lang="ts">
import { useRoute } from 'vue-router';
import {tag_types} from "../utils/tag_types";
import {formatDate} from "../utils/formatDate";
import { IItem, IStatus } from '@local-types/IItem';
import { useStore } from 'vuex';
import { key } from '../store/store';
import { computed } from '@vue/reactivity';

const route = useRoute()

const store = useStore(key)
const id = route.params.id as string
const item = computed<IItem>(() => store.state.items.find(item => item.id == id) || null!)
const formattedDate = formatDate(item.value.date || new Date())


let changeStatus = (status: IStatus) => {
    if(item){
        store.commit("update", {id, item: {...item.value, status}})
    }
}

let  handleDelete = () => {
    if(item){
        store.commit("delete", id)
    }
}


</script>