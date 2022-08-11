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
        @click="
          $router.push(
            `/${$i18n.locale === $i18n.defaultLocale ? '' : $i18n.locale}`
          )
        "
      >
        Ecommerce
      </v-toolbar-title>
      <v-spacer />
      <v-menu offset-y left open-on-hover>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon size="20">mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list class="pa-0 el">
          <v-list-item
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            link
          >
            {{ locale.name }}
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon nuxt :to="localePath({ name: 'products' })">
        <v-icon size="20">mdi-store-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon size="20">mdi-cart-outline</v-icon>
      </v-btn>
      <v-divider vertical class="mx-md-5 mx-2" />
      <v-menu offset-y left open-on-hover>

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
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

<style></style>
