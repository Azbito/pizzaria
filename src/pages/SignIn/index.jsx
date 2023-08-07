import styles from './signIn.module.css'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useContext, useState } from 'react'
import { handleInputOnChange } from '../../utils/handleInputOnChange'
import { Form } from '../../components/Form'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth'

export function SignIn() {
  const [forms, setForms] = useState({
    email: '',
    password: ''
  })
  const { setUserData } = useContext(AuthContext)

  const navigate = useNavigate()

  function handleSignIn() {
    if (forms.email && forms.password) {
      setUserData(forms)
      return navigate('/')
    }

    alert('Preencha os campos')
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={handleSignIn}>
        <Input
          label="E-mail"
          value={forms.email}
          type="email"
          onChange={e => handleInputOnChange(setForms, 'email', e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          value={forms.password}
          onChange={e =>
            handleInputOnChange(setForms, 'password', e.target.value)
          }
        />
        <Button type="submit" title="Entrar" />

        <p>
          Não tem conta?
          <b className={styles.link} onClick={() => navigate('/sign_up')}>
            Registra-se!
          </b>
        </p>
      </Form>
    </div>
  )
}
