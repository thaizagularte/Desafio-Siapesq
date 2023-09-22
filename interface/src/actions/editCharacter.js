import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';

function EditCharacter({ characterId }) {
  const [characterData, setCharacterData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3001/characters/${characterId}`);
        setCharacterData(response.data);
      } catch (error) {
        console.error("Erro ao buscar personagem", error);
      }
    }
    fetchData();
  }, [characterId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/characters/${characterId}`,
        characterData
      );
      if (response.status === 200) {
        console.log(`Personagem com ID ${characterId} atualizado com sucesso`);
        setIsEditing(false);
      } else {
        console.error("Erro ao editar o personagem ", response.data);
      }
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharacterData({ ...characterData, [name]: value });
  };

  return (
    <div className="container">
      <h2>Editar personagem - Preencha todos os dados para editar</h2>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          {isEditing ? (
            <input
              type="text"
              id="name"
              name="name"
              value={characterData.name}
              onChange={handleInputChange}
            />
          ) : (
            <span>{characterData.name}</span>
          )}
        </div>
        <div>
          <label htmlFor="status">Status: </label>
          {isEditing ? (
            <input
              type="text"
              id="status"
              name="status"
              value={characterData.status}
              onChange={handleInputChange}
            />
          ) : (
            <span>{characterData.status}</span>
          )}
        </div>
        <div>
          <label htmlFor="species">Species: </label>
          {isEditing ? (
            <input
              type="text"
              id="species"
              name="species"
              value={characterData.species}
              onChange={handleInputChange}
            />
          ) : (
            <span>{characterData.species}</span>
          )}
        </div>
        <div>
          <label htmlFor="type">Type: </label>
          {isEditing ? (
            <input
              type="text"
              id="type"
              name="type"
              value={characterData.type}
              onChange={handleInputChange}
            />
          ) : (
            <span>{characterData.type}</span>
          )}
        </div>
        <div>
          <label htmlFor="species">Gender: </label>
          {isEditing ? (
            <input
              type="text"
              id="gender"
              name="gender"
              value={characterData.gender}
              onChange={handleInputChange}
            />
          ) : (
            <span>{characterData.gender}</span>
          )}
        </div>
        <div>
          <label htmlFor="originName">Origin: </label>
          {isEditing ? (
            <input
              type="text"
              id="originName"
              name="originName"
              value={characterData.originName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{characterData.originName}</span>
          )}
        </div>
        <div>
          <label htmlFor="locationName">Location: </label>
          {isEditing ? (
            <input
              type="text"
              id="locationName"
              name="locationName"
              value={characterData.locationName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{characterData.locationName}</span>
          )}
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          {isEditing ? (
            <input
              type="text"
              id="image"
              name="image"
              value={characterData.image}
              onChange={handleInputChange}
            />
          ) : (
            <span>{characterData.image}</span>
          )}
        </div>
        <div>
          <label htmlFor="url">Url: </label>
          {isEditing ? (
            <input
              type="text"
              id="url"
              name="url"
              value={characterData.url}
              onChange={handleInputChange}
            />
          ) : (
            <span>{characterData.url}</span>
          )}
        </div>
        {isEditing ? (
          <button type="button" onClick={handleSave}>
            Salvar
          </button>
        ) : (
          <button type="button" onClick={handleEdit}>
            Editar
          </button>
        )}
      </form>
    </div>
  );
}

export default EditCharacter;