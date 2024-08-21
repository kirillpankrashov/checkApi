const express = require('express');
const app = express();
const port = 4000;

// Разрешаем принимать JSON в теле запросов
app.use(express.json());

// Пример эндпоинта, который возвращает true или false
app.post('/check', (req, res) => {
    const { condition } = req.body;

    // Пример простой логики
    if (condition === 'ok') {
        res.json({ result: true });
    } else {
        res.json({ result: false });
    }
});

app.listen(port, () => {
    console.log(`Server running at https://check-api-jade.vercel.app/:${port}`);
});