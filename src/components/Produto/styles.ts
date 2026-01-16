import styled from 'styled-components'
import { cores } from '../../styles'

export const Produto = styled.div`
  background-color: ${cores.corFundo};
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h3`
  min-height: 64px;
  margin: 8px 0;
  color: ${cores.corTexto};
`

export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 4px;
  }
`

export const Prices = styled.div`
  margin: 16px 0;
  color: ${cores.corTexto};

  small {
    font-size: 16px;
    text-decoration: line-through;
    margin-right: 8px;
    opacity: 0.7;
  }

  strong {
    font-size: 18px;
  }
`

export const Tag = styled.span`
  background-color: ${cores.corPrincipal};
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
  color: ${cores.corFundo};
  border-radius: 4px;
`

export const Plataformas = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 0;
  padding: 0;
  list-style: none;

  li {
    background-color: ${cores.corPrincipal};
    padding: 8px;
    font-size: 10px;
    white-space: nowrap;
    margin-right: 8px;
    margin-bottom: 8px;
    color: ${cores.corFundo};
    font-weight: bold;
    border-radius: 4px;
  }
`

export const BtnComprar = styled.button`
  display: block;
  width: 100%;
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 8px;

  &:hover:not(:disabled) {
    background-image: linear-gradient(
      -45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
