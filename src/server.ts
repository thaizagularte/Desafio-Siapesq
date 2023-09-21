import express from 'express';
import cors from 'cors';
import { controllersCharacter } from './controllers/controllersCharacter';

const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;
const controllerCharacter = new controllersCharacter();


router.use(cors());
router.use(express.json());

router.get('/characters', controllerCharacter.getCharaters);

router.put('/characters/:id', controllerCharacter.putCharacter);

router.delete('/characters/:id', controllerCharacter.deleteCharacter);

router.post('/characters', controllerCharacter.newCharacter);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});