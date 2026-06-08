<template>
  <section class="data-section">
    <h2>物價紀錄表</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>商品名稱</th>
            <th>價格 (元)</th>
            <th>記錄時間</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!prices || prices.length===0"><td colspan="4">目前沒有記錄</td></tr>
          <tr v-for="p in prices" :key="p.id">
            <td>{{ formatDate(p.date) }}</td>
            <td>{{ p.name }}</td>
            <td>NT${{ formatNumber(p.price) }}</td>
            <td>{{ formatDateTime(p.created_at) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="data-summary">總記錄數: {{ prices ? prices.length : 0 }}</div>
  </section>
</template>

<script setup>
import { toRef } from 'vue'
const props = defineProps({ prices: Array })
const prices = toRef(props, 'prices')

function formatDate(s) { if(!s) return '-'; return new Date(s).toLocaleDateString('zh-TW') }
function formatDateTime(s) { if(!s) return '-'; return new Date(s).toLocaleString('zh-TW') }
function formatNumber(n) { return parseFloat(n).toLocaleString('zh-TW') }
</script>

<style scoped>
table { width: 100%; border-collapse: collapse }
th, td { padding: 6px 8px; border-bottom: 1px solid #eee }
.data-summary { margin-top: 8px }
</style>
