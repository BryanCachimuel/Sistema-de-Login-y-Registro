import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom'

import styles from './styles.module.scss';

const Welcome = () => {

  const [name, setName] = useState();

  const navegar = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3005/usuario/${id}`)
    .then(({data}) => setName(data.nombre))
    .catch((error) => console.error(error))
  },[id])

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
