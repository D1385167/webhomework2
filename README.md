# Vue 前端（作業3 釣魚網站 改寫）

本專案將原本的前端改寫為 Vue 3 + Vite，保留原有後端檔案不變。主要變更：

- 前端程式置於 `src/`，元件放在 `src/components/`。
- 保持 `public/index.html` 與 `src/main.js` 簡潔，模組化程式碼放入 SFC。

快速啟動：

1. 安裝相依：

```bash
npm install
```

2. 啟動開發伺服器：

```bash
npm run dev
```

備註：後端 API 路徑假設為 `/api`（與原本 Express 應用整合）。
