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
    value: 15,
  },
  pattern: {
    message: 'Write a valid email',
    value: regularExpresion,
  },
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
            {...register('password')}
          />
        </div>
        <div className="form__div">
          <label className="form__label" htmlFor="">
            First Name
          </label>
          <input
            className="form__input"
            placeholder="Enter your first name"
            type="text"
            {...register('first_name')}
          />
        </div>
        <div className="form__div">
          <label className="form__label" htmlFor="">
            Last Name
          </label>
          <input
            className="form__input"
            placeholder="Enter your last name"
            type="text"
            {...register('last_name')}
          />
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
