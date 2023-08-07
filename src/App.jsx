import { AuthProvider } from './contexts/Auth'
import Routes from './routes/routes'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
