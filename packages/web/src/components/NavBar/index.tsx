import { UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { MainContainer } from '../../GlobalStyles'
import { ROUTES } from '../../global/constants'
import { t } from '../../i18n'
import {
  BottomContainer,
  LinksContainer,
  NavIcon,
  NavLink,
  NavbarContainer,
  ProfileContainer,
  TopContainer,
} from './styles'

export const NavBar = () => {
  const navigate = useNavigate()

  const handleNavigation = () => {}
  return (
    <MainContainer id="maintestse">
      <NavbarContainer>
        <TopContainer>
          <h1>{t('constants.navBar.title')}</h1>
        </TopContainer>
        <BottomContainer>
          <NavIcon
            src="https://de-he.step.vodafone.com/images/vdflogo.png"
            alt="Vodafone Icon"
          />
          <LinksContainer>
            <NavLink onClick={() => navigate(ROUTES.base)}>
              {t('constants.navBar.home')}
            </NavLink>
            <NavLink onClick={() => navigate(ROUTES.devices)}>
              {t('constants.navBar.devices')}
            </NavLink>
          </LinksContainer>
          <ProfileContainer>
            <UserRound size={32} />
          </ProfileContainer>
        </BottomContainer>
      </NavbarContainer>
    </MainContainer>
  )
}
