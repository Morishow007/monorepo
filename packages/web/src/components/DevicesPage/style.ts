import styled from 'styled-components'

export const DevicesTableContainer = styled.div`
  width: 100%;
  justify-content: space-evenly;
  border-radius: 10px;
`

export const DevicesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  margin-top: 20px;
`

export const HeaderRow = styled.tr`
  background-color: lightgrey;
  color: black;
  font-weight: bold;
  border-bottom: solid 1px;

  @media (max-width: 767px) {
    display: block;
  }
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  @media (max-width: 767px) {
    display: block;
    margin-bottom: 10px;
  }
`

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;

  @media (max-width: 767px) {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
`

/*######### New Device Form Styles ######### */
export const FormContainer = styled.form`
  max-width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #e9e9e9;
  margin: 0 auto;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  margin: auto;
`

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  margin: auto;
`

export const ColumnContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: 100;
  color: black;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(79, 98, 148);
`

export const StyledForm = styled.div`
  background: #0e101c;
  max-width: 400px;
  margin: 0 auto;
`

export const ErrorMessage = styled.p`
  color: #e60000;
  text-align: left;

  &::before {
    display: inline;
    content: '⚠ ';
  }
`

export const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  text-align: start;
  border-radius: 4px;
  border: transparent;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`

export const Label = styled.label`
  line-height: 1;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: black;
  font-weight: bold;
  font-size: 14px;
  font-weight: 200;
`

export const SubmitButton = styled.button`
  background: grey;
  color: white;
  border-radius: 10px;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 2px;

  &:hover {
    background-color: #e60000;

    cursor: pointer;
  }

  &:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
  }
`

export const Button = styled.button`
  display: block;
  appearance: none;
  background: #333;
  color: white;
  border: none;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
`

export const Separator = styled.hr`
  margin-top: 30px;
`

export const StyledButton = styled.button`
  display: block;
  appearance: none;
  margin-top: 40px;
  border: 1px solid #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
`

export const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
