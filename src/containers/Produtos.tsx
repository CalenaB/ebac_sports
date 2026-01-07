import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { Produto as ProdutoType } from '../types/Produto'

import * as S from './styles'

type Props = {
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  favoritos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {
  const { data: produtos = [], isLoading, error } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const idsDosFavoritos = favoritos.map((f) => f.id)

    return idsDosFavoritos.includes(produtoId)
  }

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  if (error) {
    return <p>Erro ao carregar os produtos</p>
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          favoritar={favoritar}
          aoComprar={adicionarAoCarrinho}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent

