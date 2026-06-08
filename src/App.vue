<template>
  <div class="app">
    <AppHeader />
    <main class="main-content">
      <div class="left">
        <PriceForm @added="onAdded" />
        <SearchBar @search="onSearch" @reset="onReset" />
      </div>
      <div class="right">
        <PriceTable :prices="prices" />
        <Stats :prices="prices" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from './components/Header.vue'
import PriceForm from './components/PriceForm.vue'
import PriceTable from './components/PriceTable.vue'
import Stats from './components/Stats.vue'
import SearchBar from './components/SearchBar.vue'

const prices = ref([])
const API_URL = '/api'

async function loadPrices(name = '') {
  try {
    let url = `${API_URL}/prices`
    if (name) url += `?name=${encodeURIComponent(name)}`
    const res = await fetch(url)
    const json = await res.json()
    if (json && json.data) prices.value = json.data
  } catch (e) {
    console.error('loadPrices', e)
    prices.value = []
  }
}

async function onAdded(payload) {
  try {
    const res = await fetch(`${API_URL}/prices`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error('新增失敗')
    await loadPrices()
  } catch (e) {
    console.error(e)
  }
}

function onSearch(name) { loadPrices(name) }
function onReset() { loadPrices() }

onMounted(() => loadPrices())
</script>

<style>
.app { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans TC', 'Helvetica Neue', Arial; padding: 12px }
.main-content { display: flex; gap: 16px; }
.left { width: 360px }
.right { flex: 1 }
</style>
