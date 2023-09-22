import { useState } from "react";
import axios from "axios";
import '../App.css';

function EditCharacter({characterId}) {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");
    const [type, setType] = useState("");
    const [gender, setGender] = useState("");
    const [originName, setOriginName] = useState("");
    const [locationName, setLocationName] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const characterData = {
            name,
            status,
            species,
            type,
            gender,
            originName,
            locationName,
            image,
            url,
        };
        
        try {
            const response = await axios.put(
                `http://localhost:3001/characters/${characterId}`,
                characterData
                );
            if (response.status === 200) {
                console.log(`Personagem com ID ${characterId} atualizado com sucesso`);
              } else {
                console.error("Erro ao editar o personagem ", response.data);
               }
        } catch(error) {
            console.error(error);
        }
        window.location.reload();
    };

    return (
        <div className="container">
          <h2>Editar personagem - Preencha todos os dados para editar</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="name">Status: </label>
              <input
                type="text"
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="species">Species: </label>
              <input
                type="text"
                id="species"
                name="species"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="type">Type: </label>
              <input
                type="text"
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="gender">Gender: </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="originName">Origin: </label>
              <input
                type="text"
                id="originName"
                name="originName"
                value={originName}
                onChange={(e) => setOriginName(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="locationName">Location: </label>
              <input
                type="text"
                id="locationName"
                name="locationName"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="image">Image: </label>
              <input
                type="text"
                id="image"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="url">Url: </label>
              <input
                type="text"
                id="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}/>
            </div>
            <button type="submit">
              Edit
            </button>
          </form>
        </div>
      );
};

export default EditCharacter;