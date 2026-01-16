import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  margin: 32px 0;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  border-radius: 6px;

  h1 {
    font-size: 18px;
    flex: 1;
    font-style: italic;
    color: ${cores.corFundo};
  }

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      width: 18px;
    }

    span {
      color: ${cores.corFundo};
      font-size: 14px;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    div {
      margin-top: 12px;
      gap: 8px;
    }
  }
`
