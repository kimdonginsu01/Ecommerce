<template>
  <div>
    <Nav />
    <v-container>
      <v-row dense>
        <v-col md="3">
          <div>
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              outlined
              clearable
              :placeholder="$t('search')"
            ></v-text-field>
            <v-list
              v-if="$vuetify.breakpoint.mdAndUp"
              subheader
              color="transparent"
            >
              <v-subheader class="text-md-h6">{{
                $t('categories')
              }}</v-subheader>
              <v-list-item
                v-for="(category, index) in categories"
                :key="`category${index}`"
                link
              >
                <v-list-item-avatar>
                  <v-img :src="category.image"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ category.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col md="9">
          <v-row>
            <template v-for="(product, index) in filteredProducts">
              <v-col :key="`product${product.id}-${index}`" cols="12" md="6">
                <v-card
                  nuxt
                  :to="
                    localePath({
                      path: `products/${product.id}`,
                    })
                  "
                  color="surface"
                  class="el ma-2 mb-5 mr-5"
                >
                  <v-img :src="product.image" height="300">
                    <template #placeholder>
                      <v-row
                        class="fill-height"
                        justify="center"
                        align="center"
                      >
                        <v-progress-circular
                          width="2"
                          size="100"
                          color="primary"
                          indeterminate
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <v-card-title class="text-md-body-1 font-weight-bold">{{
                    product.name
                  }}</v-card-title>
                  <v-card-subtitle class="primary--text pb-3">{{
                    product.price
                  }}</v-card-subtitle>
                  <v-card-text>
                    <v-chip
                      v-for="(tag, index) in product.tags"
                      :key="`prod${product.id}-${index}`"
                      x-small
                      label
                      outlined
                      class="mr-1"
                      >{{ tag }}</v-chip
                    >
                  </v-card-text>
                </v-card>
              </v-col>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: { Nav },
  data() {
    return {
      products: null,
      categories: null,
      search: null,
    }
  },
  computed: {
    filteredProducts() {
      if (!this.search || !this.products) return this.products || []
      return this.products.filter((product) => {
        const s = this.search.toLowerCase()
        const n = product.name.toLowerCase()
        const price = product.price.toString()
        const sprice = product.salePrice?.toString() || ''
        const r = product.ratings.toString()

        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s)
        )
      })
    },
  },
  async created() {
    this.categories = await this.$content('category').fetch()
    this.products = await this.$content('products').fetch()
  },
}
</script>

<style></style>
