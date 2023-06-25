const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/data', async (req, res) => {
  try {
    const { currency, interval, coin, count, date_at, date_to } = req.query; // Изменено на req.query
    console.log(req.query);
    const response = await axios.get(
      `https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/historical`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
        },
        params: {
          symbol: coin,
          convert: currency,
          count: Number(count),
          interval: `${interval}`,
          time_start: date_at,
          time_end: date_to,
        },
      },
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
