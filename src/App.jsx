import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import FormUsers from './components/FormUsers';
const BASE_URL = 'https://users-crud.academlo.tech/';

function App() {
  //Funcion para obtener todos los usuarios
  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`;
    axios
      .get(URL)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  //Funcion para crear usuario

  const createUser = (data) => {
    const URL = `${BASE_URL}users/`;
    axios
      .post(URL, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  //Se obtienen todos los usuarios al cargar la aplicacion
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <FormUsers createUser={createUser} />
    </div>
  );
}
export default App;
