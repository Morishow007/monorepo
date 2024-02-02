import styled from 'styled-components'

export const MapWrapper = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`
export const ModalDeviceContainer = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  margin-top: 10px;
  align-content: start;
  text-align: start;
  justify-content: start;
`

export const TextFieldModal = styled.p`
  margin-bottom: 4px;
  text-align: start;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ModalButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

export const InformationButton = styled.button`
  display: inline-flex;
  height: 30px;
  width: 150px;
  margin: 0 10px 0 10px;
  padding: 0 10px 0 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: grey;
  color: white;
  font-size: large;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

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
