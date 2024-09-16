import React, { MouseEventHandler, useState } from 'react'
import styles from './form.module.scss'
import RegisterButton from '../Buttons/auth/RegisterButton'
import { registerSchema } from './schemas/registerSchema';
import { IRegiterUserRequestDto } from '../../../dto/request/auth/RegisterUserRequestDTO.dto';
import { AuthApi } from '../../../api/authApi';
import { useLocalStorage } from '../../../shared/hooks/useLocalStorage';
import useErrorToast from '../../../shared/hooks/errorToast';
import { ToastContainer, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface IFormFields{
  nickname: string;
  email: string;
  password: string
}

interface IRegisterFormProps{
  setIsLogin: (isLogin: boolean) => void
}

const RegisterForm: React.FC<IRegisterFormProps> = ({setIsLogin}) => {
  const [formData, setFormData] = useState<IRegiterUserRequestDto>({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<IRegiterUserRequestDto>>({
    username: '',
    email: '',
    password: '',
  });
  const { handleError } = useErrorToast()
  const { setItem } = useLocalStorage()
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    setFormErrors({ username: '', email: '', password: '' });

    const result = registerSchema.safeParse(formData);

    if (result.success) {
      console.log('Form submitted successfully:', formData);
      try {
        const response = await AuthApi.registerUser(formData.username, formData.email, formData.password)
        const {accessToken, id} = response.data;
        setItem('accessToken', accessToken)
        setItem('UID', id)
        setItem('auth', true)
        navigate('/home')
      } catch (error) {
        handleError(error)
      } finally{
        setLoading(false)
      }
      setLoading(false)
    } else {
      const errors: Partial<IFormFields> = {};
      result.error.errors.forEach((err) => {
        const path = err.path[0] as keyof IFormFields;
        errors[path] = err.message;
      });
      setFormErrors(errors);
      setLoading(false)
    }
  };

  function handleSetIsLogin(): MouseEventHandler<HTMLDivElement> | undefined {
    setIsLogin(true)
    return
  }
  return (
    
    <div className={styles.authForm}>
      <h1>Create account</h1>
      {loading ? 'Logging in...' : 'Login'}
      <div className={styles.auth0Resources}>
        <button className={styles.auth0button}>Sign up with Google</button>
        <button className={styles.auth0button}>Sign up with GitHub</button>
      </div>
      <p>-OR-</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          className={styles.authInput} 
          placeholder='Username' 
          name='username'
          type='text' 
          value={formData.username}
          onChange={handleChange}
          required
        />
        {formErrors.username && <p className={styles.error}>{formErrors.username}</p>}
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
        <RegisterButton/>

      </form>
      <div className={styles.bottomText}>Already have an account? <p onClick={handleSetIsLogin} className={styles.link}>Log in</p></div>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        />

    </div>
  )
}

export default RegisterForm
