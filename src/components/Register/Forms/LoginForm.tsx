import React, { MouseEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';
import { AuthApi } from '../../../api/authApi';
import useErrorToast from '../../../shared/hooks/errorToast';
import { useLocalStorage } from '../../../shared/hooks/useLocalStorage';
import 'react-toastify/dist/ReactToastify.css';
import styles from './form.module.scss'
import { loginSchema } from './schemas/loginSchema';
import LoginButton from '../Buttons/auth/LoginButton';
interface IFormFields {
  email: string;
  password: string;
}

interface ILoginFormProps{
  setIsLogin: (isLogin: boolean) => void
}
const LoginForm: React.FC<ILoginFormProps> = ({setIsLogin}) => {
  const [formData, setFormData] = useState<IFormFields>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<IFormFields>>({
    email: '',
    password: '',
  });
  const { handleError } = useErrorToast();
  const { setItem } = useLocalStorage();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFormErrors({ email: '', password: '' });

    const result = loginSchema.safeParse(formData);

    if (result.success) {
      try {

        const response = await AuthApi.loginUser(formData.email, formData.password);
        console.log(response.data);
        
        const { accessToken, id } = response.data;
        setItem('accessToken', accessToken);
        setItem('UID', id);
        setItem('auth', true)
        navigate('/home');
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    } else {
      const errors: Partial<IFormFields> = {};
      result.error.errors.forEach((err) => {
        const path = err.path[0] as keyof IFormFields;
        errors[path] = err.message;
      });
      setFormErrors(errors);
      setLoading(false);
    }
  };

  function handleSetIsLogin(): MouseEventHandler<HTMLDivElement> | undefined {
    setIsLogin(false)
    return
  }

  return (
    <div className={styles.authForm}>
      <h1>Login</h1>
      {loading ? 'Logging in...' : 'Login'}
      <div className={styles.auth0Resources}>
        <button className={styles.auth0button}>Login with Google</button>
        <button className={styles.auth0button}>Login with GitHub</button>
      </div>
      <p>-OR-</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.authInput}
          placeholder='Email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}
        <input
          className={styles.authInput}
          placeholder='Password'
          name='password'
          type='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        {formErrors.password && <p className={styles.error}>{formErrors.password}</p>}
        <LoginButton/>
      </form>
      <div className={styles.bottomText}>Don't have an account? <p onClick={handleSetIsLogin} className={styles.link}> Register</p></div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        transition={Bounce}
      />
    </div>
  );
};

export default LoginForm;
