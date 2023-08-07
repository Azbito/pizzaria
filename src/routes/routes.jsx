import { Routes as Paths, Route, BrowserRouter } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Home } from '../pages/Home'
import { PrivateRoutes } from './PrivateRoutes'

export default function Routes() {
  return (
    <BrowserRouter>
      <Paths>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Paths>
    </BrowserRouter>
  )
}
