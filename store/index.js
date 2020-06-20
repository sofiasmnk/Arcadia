export const state = () => ({
  shoppingCart: [],
  cartOpen: false,
  menuOpen: false
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
  },
  CLOSE_CART(state) {
    state.cartOpen = false
  },
  OPEN_CART(state) {
    state.cartOpen = true
  },
  CLOSE_MENU(state) {
    state.menuOpen = false
  },
  OPEN_MENU(state) {
    state.menuOpen = true
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
  },
  closeCart({ state, commit }) {
    commit('CLOSE_CART')
  },
  openCart({ state, commit }) {
    commit('OPEN_CART')
  },
  toggleCart({ state, commit }) {
    if (state.cartOpen) commit('CLOSE_CART')
    else commit('OPEN_CART')
  },
  closeMenu({ state, commit }) {
    commit('CLOSE_MENU')
  },
  openMenu({ state, commit }) {
    commit('OPEN_MENU')
  },
  toggleMenu({ state, commit }) {
    if (state.menuOpen) commit('CLOSE_MENU')
    else commit('OPEN_MENU')
  }
}
