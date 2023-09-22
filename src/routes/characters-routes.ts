import express from 'express';
import { getAllCharacters, getCharacterById, updateCharacter,deleteCharacter,createCharacter} from '../controllers/characters-controllers';

const router = express.Router();

router.get('/characters', getAllCharacters);
router.get('/characters/:id', getCharacterById);
router.put('/characters/:id', updateCharacter);
router.delete('/characters/:id', deleteCharacter);
router.post('/characters', createCharacter);

export default router;

