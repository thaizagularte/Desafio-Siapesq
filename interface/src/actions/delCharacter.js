import axios from "axios";

function DeleteCharacter(characterId) {
    axios.delete(`http://localhost:3001/characters/${characterId}`)
    .then(() => {
      console.log(`Personagem com ID ${characterId} excluído com sucesso`);
    })
    .catch((error) => {
      console.error('Erro ao excluir personagem:', error);
    });
    window.location.reload();
};

export default DeleteCharacter;