import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <TextField type="text" name="name" variant="outlined" size='small'  color="primary" margin="dense"/>
      </label>
      <label className={css.label}>
        Email
        <TextField type="email" name="email" variant="outlined" size='small'  color="primary" margin="dense"/>
      </label>
      <label className={css.label}>
        Password
        <TextField type="password" name="password" variant="outlined" size='small'  color="primary" margin="dense"/>
      </label>
      <Button type="submit" variant="contained" size='small'>Register</Button>
    </form>
  );
};
