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
      if (this.$i18n.locale === 'en') {
        await this.$swal.fire(
          'Thank you for subscribing',
          'You will be notified when we have a deal or items on sale',
          'success'
        )
      }
      if (this.$i18n.locale === 'vn') {
        await this.$swal.fire(
          'Cảm ơn bạn đã đăng ký',
          'Bạn sẽ được thông báo mỗi khi chúng tôi có mã khuyến mãi hoặc sản phẩm đang sale',
          'success'
        )
      }
    },
  },
}
</script>

<style></style>
