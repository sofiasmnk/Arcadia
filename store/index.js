export const state = () => ({
  shoppingCart: []
})

export const mutations = {
  ADD_TO_CART(state, { id, quantity }) {
    state.shoppingCart.push({
      id,
      quantity
    })
  },
  CHANGE_QUANTITY(state, { index, quantity }) {
    state.shoppingCart[index].quantity = quantity
  }
}

export const actions = {
  addItemToCart({ state, commit }, { id, quantity }) {
    const index = state.shoppingCart.findIndex((item) => item.id.equals(id))
    if (index === -1) commit('ADD_TO_CART', { id, quantity })
    else commit('CHANGE_QUANTITY', { index, quantity })
  },
  changeItemQuantity({ state, commit }, { id, quantity }) {
    const index = state.shoppingCart.findIndex((item) => item.id.equals(id))
    commit('CHANGE_QUANTITY', { index, quantity })
  }
}
