import { useSelector } from 'react-redux'

import { useGetProdutosQuery } from '../server/api'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { RootReducer } from '../store'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const favoritosId = favoritos.map((f) => f.id)

    return favoritosId.includes(produtoId)
  }

  if (isLoading) return <h2>Carregando .....</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
