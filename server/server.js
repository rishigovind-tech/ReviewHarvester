const express = require('express');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(express.json());

app.use('/reviews', reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
