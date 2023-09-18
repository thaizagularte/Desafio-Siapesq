import React, { useState } from 'react';
import axios from 'axios';
import fetchData from './/App.js'

export default function CharacterForm() {
    const baseUrl = 'http://localhost:3001/characters';
    const [formData, setFormData] = useState({
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      originName: '',
      locationName: '',
      image: '',
      episode: '', // Manter como uma string inicialmente
      url: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = () => {
      // Dividir a entrada do campo "episode" em uma matriz usando a vírgula como separador
      const episodes = formData.episode.split(',');
  
      // Envie os dados do formulário para o servidor (POST request)
      axios.post(baseUrl, {
        ...formData,
        episode: episodes, // Use a matriz de episódios aqui
      })
        .then((response) => {
          // Lógica para lidar com a resposta
          console.log('Personagem adicionado:', response.data);
          fetchData();
        })
        .catch((error) => {
          console.error('Erro ao adicionar personagem:', error);
        });
    };
  
    return (
      <div>
        <h2>To add character</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="species">Species:</label>
            <input
              type="text"
              id="species"
              name="species"
              value={formData.species}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="type">Type:</label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="originName">Origin:</label>
            <input
              type="text"
              id="originName"
              name="originName"
              value={formData.originName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="locationName">Location:</label>
            <input
              type="text"
              id="locationName"
              name="locationName"
              value={formData.locationName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="episode">Episode:</label>
            <textarea id="episode" name="episode" value={formData.episode} onChange={handleInputChange}/>
          </div>
          <div>
            <label htmlFor="url">Url:</label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
    );
  }
  