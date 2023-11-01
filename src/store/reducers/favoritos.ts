import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}
const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarAoFavoritos: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload
      if (state.itens.find((p) => p.id == favorito.id)) {
        const favoritoSemProduto = state.itens.filter(
          (p) => p.id !== favorito.id
        )
        state.itens = favoritoSemProduto
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { adicionarAoFavoritos } = favoritoSlice.actions

export default favoritoSlice.reducer
