<template>
  <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="primary" dark>
    <h2 class="text-md-h3">{{ $t('newsLetter') }}</h2>
    <p class="text-md-h6 mt-5">{{ $t('newsLetterDesciption') }}</p>
    <br />
    <v-sheet color="transparent" class="mx-auto" max-width="400">
      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        outlined
        color="#fff"
      ></v-text-field>
      <v-btn outlined min-height="50" block @click="submit">
        {{ $t('subscribe') }}
      </v-btn>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: null,
    }
  },
  methods: {
    async submit() {
      await this.$swal.fire(
        this.$t('swalTitle'),
        this.$t('swalText'),
        'success'
      )
    },
  },
}
</script>

<style></style>
