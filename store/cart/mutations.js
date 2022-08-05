export default {
  LoadCart(state) {
    const cart = localStorage.getItem('eCart')
    if (cart) {
      state.cart = JSON.parse(cart)
    }
  },
  AddToCart(state, product) {
    // Check if item is in the cart already
    const itemFound = state.cart.find((p) => p.product.id === product.id)
    if (!itemFound) {
      state.cart.push({
        product,
        quantity: 1,
      })
    }
    if (itemFound) {
      itemFound.quantity += 1
    }

    // Update localStorage
    localStorage.setItem('eCart', JSON.stringify(state.cart))

    this.$swal({
      toast: true,
      text: 'Cart updated',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
      position: 'top-end',
    })
  },
  DecreaseItemCount(state, index) {
    const item = state.cart[index]
    if (!item) return
    if (item.quantity === 1) {
      state.cart.splice(index, 1)
    } else {
      item.quantity -= 1
    }

    // Update localStorage
    localStorage.setItem('eCart', JSON.stringify(state.cart))

    this.$swal({
      toast: true,
      text: 'Cart updated',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
      position: 'top-end',
    })
  },
  RemoveCartItem(state, index) {
    state.cart.splice(index, 1)

    // Update localStorage
    localStorage.setItem('eCart', JSON.stringify(state.cart))

    this.$swal({
      toast: true,
      text: 'Item removed',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
      position: 'top-end',
    })
  },
  IncreaseItemCount(state, index) {
    const item = state.cart[index]
    item.quantity += 1

    // Update localStorage
    localStorage.setItem('eCart', JSON.stringify(state.cart))

    this.$swal({
      toast: true,
      text: 'Cart updated',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
      position: 'top-end',
    })
  },
  ClearCart(state) {
    state.cart = []
    localStorage.removeItem('eCart')
  },
}
