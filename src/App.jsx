import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import FormUsers from './components/FormUsers';
import UseCard from './components/UseCard';
const BASE_URL = 'https://users-crud.academlo.tech/';

function App() {
  //Estado para almacenar los usuarios y  mostrarlos
  const [users, setUsers] = useState();
  //Funcion para obtener todos los usuarios
  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`;
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  //Funcion para crear usuario
  const createUser = (data) => {
    const URL = `${BASE_URL}users/`;
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };
  //Se obtienen todos los usuarios al cargar la aplicacion
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <h1>Crud Users</h1>
      <FormUsers createUser={createUser} />
      {users?.map((user) => (
        <UseCard key={user.id} user={user} deleteUser={deleteUser} />
      ))}
    </div>
  );
}
export default App;
