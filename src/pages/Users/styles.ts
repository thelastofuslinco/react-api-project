import styled from 'styled-components'

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .usersContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    > div {
      background-color: darkgray;
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      border-radius: 0.5rem;
      padding: 1rem;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .selectedContainer {
    display: flex;
    flex-direction: column;
    border: 2px solid black;
  }
`
