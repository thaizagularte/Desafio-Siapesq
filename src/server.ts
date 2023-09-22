import express from 'express';
import cors from 'cors';
import charactersRoutes from './routes/characters-routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(charactersRoutes);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
