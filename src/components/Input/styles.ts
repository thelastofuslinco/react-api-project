import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  background-color: lightgray;
  padding: 0.5rem;
  border-radius: 0.5rem;

  > label {
    font-size: large;
    font-weight: bold;
  }

  > input {
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;

    &:focus {
      outline: none;
    }
  }
`
