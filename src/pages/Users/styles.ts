import styled from 'styled-components'

export const UsersContainer = styled.div`
  display: flex;
  justify-content: center;

  .usersContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
      display: flex;
      gap: 0.5rem;
      background-color: darkgray;
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      border-radius: 0.5rem;
      padding: 1rem;

      .userData {
        display: flex;
        gap: 0.5rem;
        font-size: large;
        font-weight: bold;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
`
