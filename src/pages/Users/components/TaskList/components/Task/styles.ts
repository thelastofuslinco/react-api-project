import styled, { css } from 'styled-components'

export const TaskContainer = styled.div<{ taskStatus: string }>`
  ${({ taskStatus }) => css`
    display: flex;
    justify-content: space-between;
    border-radius: 0.5rem;
    ${taskStatus === 'Requested' &&
    css`
      background-color: yellow;
    `}
    ${taskStatus === 'Accepted' &&
    css`
      background-color: green;
    `}
    ${taskStatus === 'Declined' &&
    css`
      background-color: red;
    `}
    padding: 0.5rem;
  `}
`
