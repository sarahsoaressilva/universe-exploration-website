// src/app.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getMarsImages } from '../api/nasa.js';


// Configura servidor web (express)
const app = express();
app.use(express.json());

// Configura dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(path.dirname(__filename), '..', '..');  // Sobe dois níveis até a raiz do projeto

console.log(__dirname);

// Configurar a pasta estática para 'src/static'
app.use(express.static(path.join(__dirname, 'src', 'static')));

// Cria raiz da aplicação
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'home.html'));  
});

// Cria rota GET 'mars'
app.get('/mars', async (req, res) => {
    try {
        const response = await getMarsImages();  // Usar await para esperar o resultado
        res.send(response);  // Enviar o resultado depois que os dados são obtidos
    } catch (error) {
        res.status(500).send('Erro ao obter dados da API da NASA');  // Tratamento de erro
    }
});


// Exporta a constante app como padrão
export default app;