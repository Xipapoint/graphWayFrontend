import React, { useState } from 'react'
import styles from './form.module.scss'
import RegisterButton from '../Buttons/auth/RegisterButton'
import { registerSchema } from './schemas/registerSchema';
interface IFormFields{
  nickname: string;
  email: string;
  password: string
}

const RegisterForm = () => {
  const [formData, setFormData] = useState<IFormFields>({
    nickname: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<IFormFields>>({
    nickname: '',
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    setFormErrors({ nickname: '', email: '', password: '' });

    const result = registerSchema.safeParse(formData);

    if (result.success) {
      console.log('Form submitted successfully:', formData);
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
          placeholder='Nickname' 
          type='text' 
          value={formData.nickname}
          onChange={handleChange}
          required
        />
        {formErrors.nickname && <p>{formErrors.nickname}</p>}
        <input 
          className={styles.authInput} 
          placeholder='Email' 
          type='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        {formErrors.email && <p>{formErrors.email}</p>}
        <input
        className={styles.authInput} 
        placeholder='Password' 
        type='password' 
        value={formData.password}
        onChange={handleChange}
        required
        />
        {formErrors.password && <p>{formErrors.password}</p>}
      </form>
      <RegisterButton/>
      <p style={{fontSize: '13px'}}>Already have an account? Log in</p>
    </div>
  )
}

export default RegisterForm
