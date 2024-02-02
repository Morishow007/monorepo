import styled from 'styled-components'

export const DevicePageContainer = styled.div`
  background-color: transparent;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleContainer = styled.div`
  width: 100%;
  justify-content: center;
  padding: 20px;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
`

export const DevicesContainer = styled.div`
  background-color: white;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const ActionsButton = styled.button`
  display: inline-flex;
  height: 50px;
  width: 200px;
  margin: 0 10px 0 10px;
  padding: 0 10px 0 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: grey;
  color: white;
  font-size: large;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e60000;
  }

  &:disabled {
    background-color: lightgrey;
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const DeleteButton = styled.button`
  display: inline-flex;
  height: 50px;
  width: 200px;
  margin: 0 10px 0 10px;
  padding: 0 10px 0 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: lightgrey;
  color: white;
  font-size: large;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: red;
  }

  &:disabled {
    background-color: lightgrey;
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const ShowActionsContainer = styled.div`
  display: inline-flex;
  gap: 10px;
  justify-content: space-between;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const Dropdown = styled.select`
  padding: 8px;
  margin-left: 10px;
`

export const Spacer = styled.div`
  width: 25px;
`
