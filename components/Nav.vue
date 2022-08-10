<template>
  <div>
    <v-app-bar
      color="surface"
      height="80"
      class="el"
      app
      :style="{ padding: $vuetify.breakpoint.mdAndUp ? `0 100px` : '' }"
    >
      <v-toolbar-title
        class="text-md-h5 font-weight-bold pointer"
        @click="$router.push('/')"
      >
        Ecommerce
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-if="$i18n.locale !== 'en'"
        :to="switchLocalePath('en')"
        class="mr-5"
        light
      >
        en
      </v-btn>

      <v-btn
        v-if="$i18n.locale !== 'vn'"
        :to="switchLocalePath('vn')"
        class="mr-5"
        light
      >
        vn
      </v-btn>
      <v-btn icon>
        <v-icon size="20">mdi-store-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon size="20">mdi-cart-outline</v-icon>
      </v-btn>
      <v-divider vertical class="mx-md-5 mx-2" />
      <v-menu offset-y left>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon size="20">mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list class="pa-0 el">
          <v-list-item link @click="toggleTheme">
            <v-icon size="20" class="mr-5">mdi-brightness-4</v-icon>
            <v-list-title>{{ $t('changeTheme') }}</v-list-title>
          </v-list-item>
          <v-list-item link>
            <v-icon size="20" class="mr-5">mdi-cash-multiple</v-icon>
            <v-list-title>{{ $t('viewOrders') }}</v-list-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link>
            <v-icon size="20" class="mr-5">mdi-logout</v-icon>
            <v-list-title>{{ $t('logOut') }}</v-list-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

<style></style>
