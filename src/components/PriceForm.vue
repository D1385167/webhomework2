<template>
  <section class="input-section">
    <h2>新增物價記錄</h2>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>日期</label>
        <input type="date" v-model="date" required />
      </div>
      <div class="form-group">
        <label>商品名稱</label>
        <select v-model="name" required>
          <option value="">-- 請選擇商品 --</option>
          <option>紐約客牛排</option>
          <option>肋眼牛排</option>
          <option>菲力牛排</option>
          <option>丁骨牛排</option>
          <option>其他</option>
        </select>
      </div>
      <div class="form-group">
        <label>價格 (元)</label>
        <input type="number" v-model.number="price" min="0" step="10" required />
      </div>
      <button class="btn" type="submit">新增記錄</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['added'])

const date = ref(new Date().toISOString().split('T')[0])
const name = ref('')
const price = ref(null)

function submit() {
  if (!date.value || !name.value || price.value === null) return
  emit('added', { date: date.value, name: name.value, price: price.value })
  // reset
  date.value = new Date().toISOString().split('T')[0]
  name.value = ''
  price.value = null
}
</script>

<style scoped>
.input-section { background: #fff; padding: 12px; border-radius: 6px }
.form-group { margin-bottom: 8px }
.btn { padding: 8px 12px }
</style>
