import { formToJSON } from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const defaultValues = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: '',
};

const FormUsers = ({ createUser, userUpdate, updateUser }) => {
  const { handleSubmit, register, reset } = useForm();

  const submitForm = (data) => {
    if (userUpdate) {
      updateUser(userUpdate.id, data);
    } else {
      createUser(data);
    }
    reset(defaultValues);
  };
  const titleForm = userUpdate ? 'Edit User' : 'New User';
  const textButton = userUpdate ? 'Edit User' : 'Add New User';
  useEffect(() => {
    if (userUpdate) {
      reset(userUpdate);
    }
  }, [userUpdate]);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <h2>{titleForm}</h2>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" {...register('email')} />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" {...register('password')} />
      </div>
      <div>
        <label htmlFor="">First Name</label>
        <input type="text" {...register('first_name')} />
      </div>
      <div>
        <label htmlFor="">Last Name</label>
        <input type="text" {...register('last_name')} />
      </div>
      <div>
        <label htmlFor="">Birthday</label>
        <input type="date" {...register('birthday')} />
      </div>
      <button>{textButton}</button>
    </form>
  );
};

export default FormUsers;
