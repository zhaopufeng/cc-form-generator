<template>
  <el-form label-width="90px">
    <el-form-item label="字段名">
      <el-input v-model="current.field" placeholder="请输入字段名" clearable></el-input>
    </el-form-item>
    <el-form-item label="标题">
      <el-input v-model="current.label" placeholder="请输入标题" clearable></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="current.value" placeholder="请输入默认值" clearable></el-input>
    </el-form-item>
    <el-form-item label="评分总数">
      <el-input-number :min="1" v-model="current.attrs.max" placeholder="请输入评分总数" clearable></el-input-number>
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number v-model="current.labelWidth"></el-input-number>
    </el-form-item>
    <el-form-item label="选中图标">
      <el-input v-model="current.attrs.voidIcon" clearable placeholder="请输入激活图标">
        <template #append>
          <el-button :icon="Pointer" @click="choose('voidIcon')">选择</el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="未选中图标">
      <el-input v-model="current.attrs.inactiveIcon" clearable placeholder="请输入后图标">
        <template #append>
          <el-button :icon="Pointer" @click="choose('disabledVoidIcon')">选择</el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="未激活颜色">
      <el-color-picker v-model="current.attrs.voidColor"></el-color-picker>
    </el-form-item>
    <el-form-item label="只读时颜色">
      <el-color-picker v-model="current.attrs.disabledVoidColor"></el-color-picker>
    </el-form-item>
    <el-form-item label="允许半选">
      <el-switch v-model="current.attrs.allowHalf"></el-switch>
    </el-form-item>
    <el-form-item label="显示文案">
      <el-switch v-model="current.attrs.showText"></el-switch>
    </el-form-item>
    <el-form-item label="显示评分">
      <el-switch v-model="current.attrs.showScore"></el-switch>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="current.showLabel"></el-switch>
    </el-form-item>
    <el-form-item label="是否必填" v-if="current.showLabel">
      <el-switch v-model="current.required"></el-switch>
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="current.attrs.disabled"></el-switch>
    </el-form-item>
  </el-form>
  <choose-icon title="选择图标" v-model:visible="visible" @click-item="clickItem"></choose-icon>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'
import { computed, ComputedRef, ref, watch } from 'vue'
import { Pointer } from '@element-plus/icons'
import chooseIcon from '@/components/chooseIcon/index.vue'

let store = useStore()

let current: ComputedRef<any> = computed(() => store.state.currentComponent)
let position = ref<string>('')
let visible = ref<boolean>(false)

let choose = (p: string) => {
  position.value = p
  visible.value = true
}

let clickItem = (val: string) => {
  current.value.attrs[position.value] = val
  visible.value = false
}

watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>