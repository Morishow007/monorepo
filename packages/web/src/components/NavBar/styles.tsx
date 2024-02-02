import styled from 'styled-components'

export const NavbarContainer = styled.div`
  background-color: transparent;
  color: black;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;

  justify-content: center;
  align-items: center;
  text-align: left;
`

export const Icon = styled.i`
  /* Replace 'fa-icon-class' with the actual class of your Font Awesome icon */
  width: 40px;
  height: 40px;
  font-size: 2em;
`

export const LinksContainer = styled.div`
  display: block;
  width: 100%;
  justify-content: start;
  align-items: start;
  text-align: start;
`

export const TopContainer = styled.div`
  display: flex;
  background-color: #333;
  flex-direction: row;
  align-items: center;
  text-align: end;
  justify-content: flex-end;
  margin: auto;
  padding: 0;
  width: 100%;
  height: 20px;

  h1 {
    color: white;
    font-size: 10px;
    font-weight: lighter;
    margin: 0;
    padding: 10px;
  }
`

export const BottomContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
  align-items: center;
  text-align: end;
  justify-content: space-between;
  margin: auto;
  padding: 15px;
  width: 100%;
  height: auto;
  gap: 20px;
`

export const NavIcon = styled.img`
  /* Add any custom styles for your image here */
  width: 30px;
  height: 30px;
`

export const NavLink = styled.a`
  color: black;
  text-decoration: none;
  margin: 0 10px;
  font-size: large;
  font-weight: normal;
  transition: color 0.3s ease;
  &:hover {
    color: red;
    cursor: pointer;
  }
`

export const ProfileContainer = styled.div`
  justify-content: end;
`
