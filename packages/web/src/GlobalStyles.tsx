import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
    word-break: keep-all !important;
    font-family: 'Ubuntu', sans-serif;

    @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,700&display=swap');

    text-align: center;
  }

  html,
  body,
  * {
    font-family: 'Ubuntu', sans-serif;

  }

  body {
    margin: 0;
    background-color: #e9e9e9;
  }
`

export const AppContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,700&display=swap');

  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0;
  width: 100%;
  margin: 0;

  body {
    background-color: transparent;
  }

  .root {
    width: 100%;
  }
`

export const MainContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  padding: 0;
  width: 100%;
  margin: 0;
`
