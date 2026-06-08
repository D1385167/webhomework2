<template>
  <section class="search-section">
    <h2>查詢物價歷史</h2>
    <div class="search-controls">
      <input v-model="q" placeholder="輸入商品名稱進行搜尋..." />
      <button @click="doSearch">搜尋</button>
      <button @click="doReset">重置</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['search','reset'])
const q = ref('')
function doSearch(){ if(!q.value) return emit('search',''); emit('search', q.value) }
function doReset(){ q.value=''; emit('reset') }
</script>

<style scoped>
.search-controls { display:flex; gap:8px; align-items:center }
input { flex:1; padding:6px }
</style>
