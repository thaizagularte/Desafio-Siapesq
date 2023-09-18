import express from 'express';
import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';


const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/characters', async (req: Request, res: Response) => {
  try {
    const displayCharacters = await prisma.character.findMany();
    res.json({ displayCharacters });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar personagens' });
  }
});

app.put('/characters/:id', async (req: Request, res: Response) => {
 
  try {

    const { id } = req.params;
    const characterData = req.body;

    const updateCharacter = await prisma.character.update({
      where: { 
        id: parseInt(id),
      },
      data: characterData
    });
    res.json({ updateCharacter });
  } catch(error) {
    console.error(error)
    res.status(500).json({error: 'Erro ao atualizar personagem.'})
  }
});

app.delete('/characters/:id', async (req: Request, res: Response) => {
 
  try {

    const { id } = req.params;

    await prisma.character.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json({ message: 'Personagem excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o personagem' });
  }
});


app.post('/characters', async (req: Request, res: Response) => {
    try {
      const characterData = req.body;
      const character = await prisma.character.create({
        data: characterData, 
      });
      res.json({ character });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao adicionar novo personagem' });
    }
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});