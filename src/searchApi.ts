import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

// Função para buscar personagens da API e adicionar ao banco de dados
async function searchAdd() {
  try {
    // Fazer uma solicitação HTTP para a API para obter a lista de personagens
    const response = await axios.get('https://rickandmortyapi.com/api/character');

    // Verificar se a solicitação foi bem-sucedida e se os dados estão presentes
    if (response.status === 200 && response.data.results) {
      const characters = response.data.results;

      // Iterar sobre a lista de personagens e adicioná-los ao banco de dados
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

// Chamando função para buscar e adicionar os personagens
searchAdd();
