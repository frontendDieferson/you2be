const express = require('express');
const downloadController = require('./controllers/downloadController')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 3001;

app.post('/download', downloadController.download)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));