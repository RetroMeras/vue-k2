<template>
    <el-form
        ref="ruleFormRef"
        :model="form"
        :rules="rules"
        label-position="top"
        label-width="120px"
        class="mx-auto w-2/3 mt-5 p-5 flex flex-col gap-5 bg-white rounded-sm"
    >
        <el-form-item label="Название" prop="title">
            <el-input v-model="form.title" placeholder="Введите название" />
        </el-form-item>
        <el-form-item label="Описание" prop="description">
            <el-input v-model="form.description" placeholder="Введите описание" />
        </el-form-item>
        <el-form-item label="Дата"  prop="date">
            <el-date-picker v-model="form.date" type="date" placeholder="Выберете дату" />
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="onSubmit(ruleFormRef)">Создать</el-button>
        </el-form-item>
    </el-form>
</template>


<script setup lang="ts">
import { IItem } from '@local-types/IItem';
import { FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from "../store/store"

const generateID = () => Math.floor(Math.random()*1000000).toString();

const form = reactive<IItem>({
    title: '',
    description: '',
    date: new Date(),
    status: 'pending',
    id: generateID()
})

const store = useStore(key);

const ruleFormRef = ref<FormInstance>()

const rules = {
    title: [
        {required: true, message: "Необходимо ввести название", trigger: 'change'},
        {min: 3, message: "Описание не может быть короче 3 символов", trigger: 'blur'},
        {max: 50, message: "Описание не может быть длиннее 50 символов", trigger: 'blur'},
    ],
    description: [
        {required: true, message: "Необходимо ввести описание", trigger: 'change'},
    ],
    date: [
        {required: true, message: "Необходимо выбрать дату", trigger: 'blur'},
    ]
}

const onSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (!valid) return;
        store.commit("push", ({...form} as IItem))
        form.id = generateID()
    })
    }
</script>
