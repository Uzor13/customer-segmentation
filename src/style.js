import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #1F2937;
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 2rem;
  background: #374151;
`

export const NavBar = styled.nav`
  display: flex;
  width: 25%;
`

export const NavList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #EEEEEE;
`


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  color: #EEEEEE;
  align-items: center;
  width: 60%;
  gap: 1rem;
`
export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
`
export const PredictBtn = styled.button`
  width: 40%;
  background: #E43F5A;
  color: #EEEEEE;
  border: 0;
  outline: 0;
  border-radius: .4rem;
  height: 40px;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 2rem;
  margin-top: 1rem;
`

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #EEEEEE;
`