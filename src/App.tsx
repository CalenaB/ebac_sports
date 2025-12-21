import { useSelector, useDispatch } from 'react-redux'
import { useGetProdutosQuery } from './services/api'

import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

import type { RootState } from './store'
import { adicionar } from './store/carrinhoSlice'
import type { Produto } from './types/Produto'

function App() {
  const {
    data: produtos,
    isLoading,
    error
  } = useGetProdutosQuery()

  const carrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  const dispatch = useDispatch()

  function adicionarAoCarrinho(produto: Produto) {
    const existe = carrinho.find((p) => p.id === produto.id)

    if (existe) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionar(produto))
    }
  }

  if (isLoading) return <p>Carregando produtos...</p>
  if (error) return <p>Erro ao carregar produtos</p>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={carrinho} favoritos={[]} />
        <Produtos
          produtos={produtos ?? []}
          favoritos={[]}
          favoritar={() => {}}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App

