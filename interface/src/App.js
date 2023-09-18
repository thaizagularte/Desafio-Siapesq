import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterForm from './/addCharacters';
import DeleteCharacterForm from './/delCharacter';

function App() {
  const baseUrl = 'http://localhost:3001/characters';
  const [jsonData, setJsonData] = useState('');
  const [loading, setLoading] = useState(true); 
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDeleteFormVisible, setIsDeleteFormVisible] = useState(false);
  
  useEffect(() => {
    axios.get(baseUrl)
      .then(response => {
        setJsonData(response.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        setLoading(false); 
      });
  }, []);

  const handleDeleteClick = () => {
    setIsDeleteFormVisible(true);
  };
  

  return (
    <div>
        <button onClick={() => setIsFormVisible(true)}>To add</button>
        <button onClick={handleDeleteClick}>Delete</button>
        {isFormVisible && <CharacterForm />}
        {isDeleteFormVisible && <DeleteCharacterForm />} 
        {loading ? (
        <p>Carregando...</p>) : (
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>)}
        </div>
      );
    }
    
    export default App;