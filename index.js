const express = require('express');
const app = express();
const port = 3000;

app.use(cors());  // Применяем middleware для разрешения CORS

app.get('/api/check', (req, res) => {
    // Логика проверки
    const isValid = true; // Или false, в зависимости от логики
    
    // Возвращаем true или false
    res.json({ result: isValid });
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});