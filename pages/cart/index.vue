<template>
  <div>
    <Nav />
    <br />
    <div v-if="$store.state.cart.cart.length === 0" class="text-center">
      <p>No items just yet. Keep shopping</p>
    </div>
    <v-container>
      <div v-if="$store.state.cart.cart.length > 0" class="mb-3">
        <v-btn
          nuxt
          to="/cart/confirm"
          min-width="150"
          min-height="45"
          color="primary"
        >
          Checkout
        </v-btn>
      </div>
      <v-row>
        <template v-for="(cart, index) in $store.state.cart.cart">
          <v-col :key="`cartItem${index}`">
            <v-card color="surface" flat>
              <v-btn
                absolute
                top
                right
                icon
                class="pa-6"
                @click="$store.commit('cart/RemoveCartItem', index)"
              >
                <v-icon color="red" size="20">mdi-delete</v-icon>
              </v-btn>

              <v-row dense>
                <v-col md="3">
                  <v-img
                    class="rouded-lg"
                    height="220"
                    :src="cart.product.image"
                  ></v-img>
                </v-col>
                <v-col class="pl-5 pt-2" md="9">
                  <h2 class="text-md-6 font-weight-bold">
                    {{ cart.product.name }} x {{ cart.quantity }}
                  </h2>
                  <p class="primary--text mt-2">
                    {{ $formatMoney(cart.product.price * cart.quantity) }}
                  </p>
                  <v-btn
                    icon
                    @click="$store.commit('cart/IncreaseItemCount', index)"
                  >
                    <v-icon size="20">mdi-plus-circle</v-icon>
                  </v-btn>
                  <span class="mx-2">{{ cart.quantity }}</span>
                  <v-btn
                    icon
                    @click="$store.commit('cart/DecreaseItemCount', index)"
                  >
                    <v-icon size="20">mdi-minus-circle</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
