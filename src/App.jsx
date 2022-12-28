import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import FormUsers from './components/FormUsers';
import UseCard from './components/UseCard';
const BASE_URL = 'https://users-crud.academlo.tech/';
//https://users-crud.academlo.tech/swagger/

function App() {
  //Estado para almacenar los usuarios y  mostrarlos
  const [users, setUsers] = useState();
  const [userUpdate, setUserUpdate] = useState();
  const [isShowForm, setIsShowForm] = useState(false);
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
        handleChangeShowModal();
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

  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`;
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
        setUserUpdate();
        handleChangeShowModal();
      })
      .catch((err) => console.log(err));
  };

  const handleChangeShowModal = () => {
    setIsShowForm(!isShowForm);
  };

  const handleClickNewUser = () => {
    setUserUpdate();
    handleChangeShowModal();
  }; //Se obtienen todos los usuarios al cargar la aplicacion
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <div className="header-container">
        <h1 className="header__title">Crud Users</h1>
        <button onClick={handleClickNewUser} className="header__btn">
          <i className="bx bx-plus"></i>Create new user
        </button>
      </div>

      <FormUsers
        createUser={createUser}
        userUpdate={userUpdate}
        updateUser={updateUser}
        isShowForm={isShowForm}
        handleChangeShowModal={handleChangeShowModal}
      />

      <div className="users-container">
        {users?.map((user) => (
          <UseCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserUpdate={setUserUpdate}
            handleChangeShowModal={handleChangeShowModal}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
