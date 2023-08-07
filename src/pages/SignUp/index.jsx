import styles from './signUp.module.css'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useState } from 'react'
import { handleInputOnChange } from '../../utils/handleInputOnChange'
import { Form } from '../../components/Form'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
  const [forms, setForms] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate()

  function handleSignUp() {
    if (forms.email && forms.password && forms.confirmPassword) {
      return navigate('/sign_in')
    }

    alert('Preencha os campos')
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={handleSignUp}>
        <Input
          label="E-mail"
          type="email"
          value={forms.email}
          onChange={e => handleInputOnChange(setForms, 'email', e.target.value)}
        />
        <Input
          label="Senha"
          value={forms.password}
          type="password"
          onChange={e =>
            handleInputOnChange(setForms, 'password', e.target.value)
          }
        />
        <Input
          label="Escreva a sua senha novamente"
          value={forms.confirmPassword}
          type="password"
          onChange={e =>
            handleInputOnChange(setForms, 'confirmPassword', e.target.value)
          }
        />
        <Button type="submit" title="Entrar" />

        <p>
          Tem conta?
          <b className={styles.link} onClick={() => navigate('/sign_in')}>
            Conecta-se!
          </b>
        </p>
      </Form>
    </div>
  )
}
