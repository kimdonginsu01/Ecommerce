<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row justify="center" align="center" dense>
          <v-col cols="10" md="4">
            <v-card elevation="0">
              <v-img
                :src="require('../assets/img/logo.png')"
                alt="Ecommerce logo"
                contain
                height="200"
              ></v-img>
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-card-text>
                    <ValidationObserver v-slot="{ handleSubmit }">
                      <v-form
                        ref="form"
                        @submit.prevent="handleSubmit(onSubmit)"
                      >
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Email"
                          rules="required|email"
                        >
                          <v-text-field
                            v-model="email"
                            :error-messages="errors[0]"
                            label="Email"
                            name="email"
                            type="email"
                            prepend-inner-icon="mdi-mail"
                            outlined
                          ></v-text-field>
                        </ValidationProvider>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Password"
                          rules="required|min:8"
                        >
                          <v-text-field
                            v-model="password"
                            :error-messages="errors[0]"
                            label="Password"
                            name="password"
                            prepend-inner-icon="mdi-lock"
                            :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPw ? 'text' : 'password'"
                            outlined
                            @click:append="showPw = !showPw"
                          ></v-text-field>
                        </ValidationProvider>
                        <v-btn type="submit" color="primary" x-large block>
                          Log in
                        </v-btn>
                        <v-card-actions class="text--secondary">
                          <v-checkbox
                            color="primary"
                            label="Remember me"
                          ></v-checkbox>
                          <v-spacer></v-spacer>
                          No account?
                          <v-btn class="ml-2" @click="step++">Sign up</v-btn>
                        </v-card-actions>
                      </v-form>
                    </ValidationObserver>
                  </v-card-text>
                </v-window-item>
                <v-window-item :value="2">
                  <v-card-text>
                    <ValidationObserver v-slot="{ handleSubmit }">
                      <v-form @submit.prevent="handleSubmit(onSubmit)">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Username"
                          rules="required"
                        >
                          <v-text-field
                            v-model="username"
                            :error-messages="errors[0]"
                            label="Username"
                            name="username"
                            type="text"
                            prepend-inner-icon="mdi-account"
                            outlined
                          ></v-text-field>
                        </ValidationProvider>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Email"
                          rules="required|email"
                        >
                          <v-text-field
                            v-model="email"
                            :error-messages="errors[0]"
                            label="Email"
                            name="email"
                            type="email"
                            prepend-inner-icon="mdi-mail"
                            outlined
                          ></v-text-field>
                        </ValidationProvider>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Password"
                          rules="required|min:8"
                          vid="password"
                        >
                          <v-text-field
                            v-model="password"
                            :error-messages="errors[0]"
                            label="Password"
                            name="password"
                            prepend-inner-icon="mdi-lock"
                            :append-icon="
                              showPwConfirm ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :type="showPwConfirm ? 'text' : 'password'"
                            outlined
                            @click:append="showPwConfirm = !showPwConfirm"
                          ></v-text-field>
                        </ValidationProvider>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Password Confirmation"
                          rules="required|confirmed:password"
                        >
                          <v-text-field
                            v-model="confirmation"
                            :error-messages="errors[0]"
                            label="Password Confirmation"
                            name="password"
                            prepend-inner-icon="mdi-lock"
                            :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPw ? 'text' : 'password'"
                            outlined
                            @click:append="showPw = !showPw"
                          ></v-text-field>
                        </ValidationProvider>
                        <v-btn type="submit" color="primary" x-large block>
                          Sign up
                        </v-btn>
                        <v-card-actions class="text--secondary">
                          <v-spacer></v-spacer>
                          Already have one?
                          <v-btn class="ml-2" @click="step--">Log in</v-btn>
                        </v-card-actions>
                      </v-form>
                    </ValidationObserver>
                  </v-card-text>
                </v-window-item>
              </v-window>
              <v-card-actions class="mx-6 text-center">
                <p>
                  By continuing, you agree to eCommerce's
                  <a href="#">Policy</a> &
                  <a href="#">Terms of User</a>
                </p>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
import { required, email, min, confirmed } from 'vee-validate/dist/rules'

extend('email', {
  ...email,
  message: '{_field_} is not valid',
})

extend('required', {
  ...required,
  message: '{_field_} is required',
})

extend('min', {
  ...min,
  message: '{_field_} must have at least {length} charaters',
})

extend('confirmed', {
  ...confirmed,
  message: '{_field_} does not match',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      step: 1,
      showPw: false,
      showPwConfirm: false,
      username: null,
      email: null,
      password: null,
    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
