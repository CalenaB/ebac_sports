import { useState } from 'react'
import Produto from '../components/Produto'
import { Produto as ProdutoType } from '../types/Produto'
import { useGetProdutosQuery } from '../store/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  const [favoritos, setFavoritos] = useState<ProdutoType[]>([])

  const favoritar = (produto: ProdutoType) => {
    const produtoJaFavorito = favoritos.some((f) => f.id === produto.id)

    if (produtoJaFavorito) {
      setFavoritos(favoritos.filter((f) => f.id !== produto.id))
      return
    }

    setFavoritos([...favoritos, produto])
  }

  const produtoEstaNosFavoritos = (produto: ProdutoType) =>
    favoritos.some((f) => f.id === produto.id)

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  if (isError) {
    return <p>Erro ao carregar produtos. Tente novamente.</p>
  }

  if (!produtos || produtos.length === 0) {
    return <p>Nenhum produto encontrado.</p>
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
