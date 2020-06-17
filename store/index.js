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
  REMOVE_FROM_CART(state, index) {
    state.shoppingCart.splice(index, 1)
  },
  CHANGE_QUANTITY(state, { index, quantity }) {
    state.shoppingCart[index].quantity = quantity
  }
}

export const actions = {
  addItemToCart({ state, commit }, { id, quantity }) {
    let index = -1
    if (state.shoppingCart.length > 0) {
      index = state.shoppingCart.findIndex((item) => item.id === id)
    }
    if (index === -1) commit('ADD_TO_CART', { id, quantity })
    else {
      const newQuantity = state.shoppingCart[index].quantity + quantity
      commit('CHANGE_QUANTITY', { index, quantity: newQuantity })
    }
  },
  changeItemQuantity({ state, commit }, { index, quantity }) {
    commit('CHANGE_QUANTITY', { index, quantity })
  },
  removeItemFromCart({ state, commit }, index) {
    commit('REMOVE_FROM_CART', index)
  }
}
