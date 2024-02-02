import { Toaster } from 'react-hot-toast'
import { AppContainer } from './GlobalStyles'
import { Router } from './routes/routes'

export const App = () => {
  return (
    <AppContainer>
      <Toaster />
      <Router />
    </AppContainer>
  )
}
