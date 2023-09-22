import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getAllCharacters = async (req: Request, res: Response) => {
  try {
    const displayCharacters = await prisma.character.findMany();
    res.json({ displayCharacters });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar personagens' });
  }
};

export const getCharacterById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const character = await prisma.character.findUnique({
      where: { id: parseInt(id) },
    });

    if (!character) {
      return res.status(404).json({ error: 'Personagem não encontrado' });
    }
    res.status(200).json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar personagem por ID' });
  } finally {
    await prisma.$disconnect(); 
  }
};

export const updateCharacter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const characterData = req.body;
    const updateCharacter = await prisma.character.update({
      where: {
        id: parseInt(id),
      },
      data: characterData,
    });
    res.json({ updateCharacter });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar personagem.' });
  }
};

export const deleteCharacter = async (req: Request, res: Response) => {
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
};

export const createCharacter = async (req: Request, res: Response) => {
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
};
