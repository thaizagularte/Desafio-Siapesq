import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

async function searchAdd() {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');

    if (response.status === 200 && response.data.results) {
      const characters = response.data.results;

      for (const character of characters) {
        await prisma.character.create({
          data: {
            name: character.name,
            status: character.status,
            species: character.species,
            type: character.type,
            gender: character.gender,
            originName: character.origin.name,
            locationName: character.location.name,
            image: character.image,
            episode: character.episode,
            url: character.url
          },
        });
      }
      console.log('Todos os personagens foram adicionados ao banco de dados.');
    } else {
      console.error('Falha ao buscar dados da API.');
    }
  } catch (error) {
    console.error('Erro ao buscar e adicionar personagens:', error);
  } finally {
    await prisma.$disconnect();
  }
}

searchAdd();
