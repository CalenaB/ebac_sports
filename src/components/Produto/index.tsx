import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'

import { Produto } from '../../types/Produto'
import { adicionarAoCarrinho } from '../../store/cartSlice'
import { AppDispatch, RootState } from '../../store'

type Props = {
  produto: Produto
  favoritar: (produto: Produto) => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const ProdutoComponent = ({ produto, favoritar, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  const itensNoCarrinho = useSelector((state: RootState) => state.cart.itens)

  const produtoJaNoCarrinho = itensNoCarrinho.some(
    (item) => item.id === produto.id
  )

  const adicionar = () => {
    if (produtoJaNoCarrinho) {
      alert('Item já adicionado')
      return
    }

    dispatch(adicionarAoCarrinho(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>

      <S.Titulo>{produto.nome}</S.Titulo>

      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>

      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>

      <S.BtnComprar
        onClick={adicionar}
        type="button"
        disabled={produtoJaNoCarrinho}
      >
        {produtoJaNoCarrinho ? 'Já no carrinho' : 'Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
