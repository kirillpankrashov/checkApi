const express = require('express');
const app = express();

// Простой маршрут API, который возвращает true или false
app.get('/api/check', (req, res) => {
    const result = Math.random() < 0.5; // Вернуть true или false случайным образом
    res.json({ result });
});

// Настроим сервер для прослушивания на порту, предоставляемом Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});