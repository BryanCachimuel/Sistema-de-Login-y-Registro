import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.scss';

const Welcome = () => {

  const [name, setName] = useState();

  const navegar = useNavigate();

  // obtenemos el token desde el localstorage
  const token = localStorage.getItem('tokenusuario')

  // se examina que si el token exista se pueda logear el usuario
  useEffect(() => {
    if(token){
      axios.get('http://localhost:3005/usuario', {
        headers : {
          tokenusuario: token, 
        },
      })
      .then(({data}) => setName(data.nombre))
      .catch((error) => console.error(error))
    }
  },[token])

  return (
    <div className={styles.welcome}>
      <h2>{name ? `Felicitaciones ${name}!` : 'Que estas haciendo'}</h2>
      <h3>{name ? 'Iniciaste Sesión Correctamente' : 'Te estamos vigilando...'}</h3>
      <div className={styles.buttons}>
        <button onClick={() => navegar("/login")}>Inicia Sesión</button>
        <button onClick={() => navegar("/")}>Registro</button>
      </div>
    </div>
  )
}

export default Welcome
