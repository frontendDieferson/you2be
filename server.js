const express = require('express');
const downloadController = require('./controllers/downloadController')
const fileInfoController = require('./controllers/fileInfoController')
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const port = process.env.PORT || 3001;

app.get('/download/:id', downloadController.download)
app.post('/fileinfo', fileInfoController.info)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));