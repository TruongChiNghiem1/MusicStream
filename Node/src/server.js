const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const cors = require('cors');
const router = require('./routers');
const bodyParser = require('body-parser');

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI_DB = process.env.URI_DB;


connect(URI_DB, { useNewUrlParser: true,
    useUnifiedTopology: true, })
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch(err => console.error(err));

app.use(cors({ credentials: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
