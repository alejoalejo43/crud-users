import { formToJSON } from 'axios';
import React, { useEffect } from 'react';
import { appendErrors, useForm } from 'react-hook-form';

const defaultValues = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: '',
};
const regularExpresion = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
const validationEmail = {
  required: 'Email is required !!',
  minLength: {
    message: 'Email is too short',
    value: 3,
  },
  maxLength: {
    message: 'Email is too long',
    value: 25,
  },
  pattern: {
    message: 'Write a valid email',
    value: regularExpresion,
  },
};
const validationPass = {
  required: 'Password is required !!',
  minLength: {
    message: 'Password is too short',
    value: 3,
  },
  maxLength: {
    message: 'Password is too long',
    value: 15,
  },
};
const validationName = {
  required: 'Word is required !!',
  minLength: {
    message: 'Word is too short',
    value: 2,
  },
  maxLength: {
    message: 'Word is too long',
    value: 15,
  },
  pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
  message: 'Numbers are not permited',
};
const FormUsers = ({
  createUser,
  userUpdate,
  updateUser,
  isShowForm,
  handleChangeShowModal,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

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
  console.log(errors);
  return (
    <div className={`container-form ${isShowForm ? '' : 'diseable-form'}`}>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <i onClick={handleChangeShowModal} className="form__x bx bx-x"></i>
        <h2 className="form__title">{titleForm}</h2>
        <div className="form__div">
          <label className="form__label" htmlFor="">
            Email
          </label>
          <input
            className="form__input"
            placeholder="Enter yor email"
            type="email"
            {...register('email', validationEmail)}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form__div">
          <label className="form__label" htmlFor="">
            Password
          </label>
          <input
            className="form__input"
            placeholder="Enter your password"
            type="password"
            {...register('password', validationPass)}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="form__div">
          <label className="form__label" htmlFor="">
            First Name
          </label>
          <input
            className="form__input"
            placeholder="Enter your first name"
            type="text"
            {...register('first_name', validationName)}
          />
          {errors.first_name && <p>{errors.first_name.message}</p>}
        </div>
        <div className="form__div">
          <label className="form__label" htmlFor="">
            Last Name
          </label>
          <input
            className="form__input"
            placeholder="Enter your last name"
            type="text"
            {...register('last_name', validationName)}
          />
          {errors.last_name && <p>{errors.last_name.message}</p>}
        </div>
        <div className="form__div">
          <label className="form__label" htmlFor="">
            Birthday
          </label>
          <input
            className="form__input"
            type="date"
            {...register('birthday')}
          />
        </div>
        <button className="form__btn">{textButton}</button>
      </form>
    </div>
  );
};

export default FormUsers;
