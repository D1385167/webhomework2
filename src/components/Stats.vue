<template>
  <section class="stats-section">
    <h2>價格統計</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <h3>平均價格</h3>
        <p>{{ avgText }}</p>
      </div>
      <div class="stat-card">
        <h3>最高價格</h3>
        <p>{{ maxText }}</p>
      </div>
      <div class="stat-card">
        <h3>最低價格</h3>
        <p>{{ minText }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ prices: Array })

const values = computed(() => (props.prices || []).map(p => Number(p.price)))

const avgText = computed(() => {
  if (!values.value.length) return '-'
  const avg = Math.round(values.value.reduce((a,b)=>a+b,0)/values.value.length)
  return `NT$${avg.toLocaleString('zh-TW')}`
})
const maxText = computed(() => values.value.length ? `NT$${Math.max(...values.value).toLocaleString('zh-TW')}` : '-')
const minText = computed(() => values.value.length ? `NT$${Math.min(...values.value).toLocaleString('zh-TW')}` : '-')
</script>

<style scoped>
.stats-grid { display:flex; gap:8px }
.stat-card { background:#fff; padding:8px; border-radius:6px; flex:1 }
</style>
