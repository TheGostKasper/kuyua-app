const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/env');
const locationRoutes = require('./routes/locationRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', locationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
