import axios from "axios";

function DeleteCharacter(characterId) {
    axios.delete(`http://localhost:3001/characters/${characterId}`)
    .then(() => {
      console.log(`Personagem com ID ${characterId} excluído com sucesso`);
      window.location.reload();
    })
    .catch((error) => {
      console.error('Erro ao excluir personagem:', error);
    });
};

export default DeleteCharacter;