import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterForm from './actions/addCharacters';
import DeleteCharacter from './actions/delCharacter';

function App() {
  const baseUrl = 'http://localhost:3001/characters';
  const [jsonData, setJsonData] = useState('');
  const [loading, setLoading] = useState(true); 
  const [isFormVisible, setIsFormVisible] = useState(false);
 

  useEffect(() => {
    axios.get(baseUrl)
      .then(response => {
        setJsonData(response.data.displayCharacters);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        setLoading(false); 
      });
  }, []);

  const handleDeleteClick = (characterId) => {
    DeleteCharacter(characterId);
  };

  const handleEdit = (characterId) => {

  };
  
  return (
    <div>
      <button onClick={() => setIsFormVisible(true)}> Adicionar </button>
      { isFormVisible && <CharacterForm /> }
      

      {loading ? ( 
        <p> Caregando ... </p>
      ) : (
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Status </th>
              <th> Species </th>
              <th> Type </th>
              <th> Gender </th>
              <th> Created </th>
              <th> Origin </th>
              <th> Location </th>
              <th> Image </th>
              <th> Url </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map(character => (
              <tr key={character.id}>
                <td>{character.name}</td>
                <td>{character.status}</td>
                <td>{character.species}</td>
                <td>{character.type}</td>
                <td>{character.gender}</td>
                <td>{character.created}</td>
                <td>{character.originName}</td>
                <td>{character.locationName}</td>
                <td>
                  <img src={character.image} alt={`Imagem de ${character.name}`} height={50} width={50} />
                </td>
                <td>{character.url}</td>
                <td>
                    <button>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteClick(character.id)}>
                      Delete
                    </button>
                </td>       
              </tr>
            ))}
          </tbody>
        </table>
      )
    }
    </div>
)}

export default App;