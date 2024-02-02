import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { ROUTES } from '../global/constants'
import { DevicesPage } from '../pages/DevicesPage'
import { HomePage } from '../pages/HomePage'

export const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={ROUTES.base} element={<HomePage />} />
        <Route path={ROUTES.devices} element={<DevicesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
