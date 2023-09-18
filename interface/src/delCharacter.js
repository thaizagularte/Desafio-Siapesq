import React, { useState } from 'react';
import axios from 'axios';

function DeleteCharacterForm({ onDelete }) {
  const [characterId, setCharacterId] = useState('');

  const handleInputChange = (e) => {
    setCharacterId(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .delete(`http://localhost:3001/characters/${characterId}`)
      .then(() => {
        console.log(`Personagem com ID ${characterId} excluído com sucesso`);
        onDelete(); 
      })
      .catch((error) => {
        console.error('Erro ao excluir personagem:', error);
      });
  };

  return (
    <div>
      <h2>Delete character</h2>
      <form>
        <div>
          <label htmlFor="characterId">Character id:</label>
          <input
            type="number"
            id="characterId"
            name="characterId"
            value={characterId}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          delete
        </button>
      </form>
    </div>
  );
}

export default DeleteCharacterForm;

