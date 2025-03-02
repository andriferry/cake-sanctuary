<script setup lang="ts">
definePageMeta({
  layout: 'blank',
  middleware: 'unauth',
})

const { $toast } = useNuxtApp()
const router = useRouter()
const {
  isPasswordVisible,
  passWordField,
  passwordIcon,
  isPasswordConfirmVisible,
  passwordConfirmIcon,
  passwordFieldConfirm,
} = useUtils()

const form = ref<UserValidation>()
const passwordConfirm = ref('')
const formAuth = reactive({
  name: '',
  email: '',
  password: '',
})

const onSubmit = async () => {
  try {
    const dataValid = await form.value?.validate()

    if (!dataValid?.valid)
      return

    await $fetch('/api/auth/register', {
      method: 'POST',
      body: formAuth,
    })

    router.push('/login').then(() => {
      $toast('Error', { description: 'User has been registered successfully !' })
    })
  }
  catch (error: any) {
    if (error) {
      $toast('Error', {
        description: error.data.message,
        action: {
          label: 'Login',
          onClick: () => router.push('/login'),
        },
      })
    }
    throw error
  }
}
</script>

<template>
  <div class="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
    <div class="bg-background flex flex-col h-screen items-center justify-center">
      <div>
        <Card class="w-[349px]">
          <CardHeader>
            <Logo />
            <CardDescription class="text-secondary mt-3 items-center justify-center flex gap-2 text-center">
              <span> Start Your Adventure from here </span>
              <Icon
                name="noto:rocket"
                class="w-6"
              />
            </CardDescription>
          </CardHeader>

          <CardContent class="pb-0">
            <FormObserver ref="form">
              <FieldProvider
                v-slot="{ errors, field }"
                v-model="formAuth.name"
                name="name"
                label="Name"
                rules="required"
              >
                <FormItem class="">
                  <FormControl
                    label="Name"
                    v-bind="field"
                    :error-message="errors[0]"
                    placeholder="Input Your Name"
                    @keyup.enter="onSubmit"
                  />
                  <FormMessage />
                </FormItem>
              </FieldProvider>

              <FieldProvider
                v-slot="{ errors, field }"
                v-model="formAuth.email"
                name="email"
                label="Email"
                rules="required|email"
              >
                <FormItem class="">
                  <FormControl
                    label="Email"
                    v-bind="field"
                    :error-message="errors[0]"
                    placeholder="Input Your Email"
                    @keyup.enter="onSubmit"
                  />
                  <FormMessage />
                </FormItem>
              </FieldProvider>

              <FieldProvider
                v-slot="{ errors, field }"
                v-model="formAuth.password"
                name="password"
                label="Password"
                rules="required|min:8"
              >
                <FormItem>
                  <FormControl
                    label="Password"
                    v-bind="field"
                    :append-icon="passwordIcon"
                    :type="passWordField"
                    :error-message="errors[0]"
                    placeholder="Input Your Password"
                    @keyup.enter="onSubmit"
                    @click-append="isPasswordVisible = !isPasswordVisible"
                  />
                  <FormMessage />
                </FormItem>
              </FieldProvider>

              <FieldProvider
                v-slot="{ errors, field }"
                v-model="passwordConfirm"
                name="confirmpassword"
                label="Password"
                rules="confirmed:@password"
              >
                <FormItem>
                  <FormControl
                    label="Confirm Password"
                    v-bind="field"
                    :append-icon="passwordConfirmIcon"
                    :type="passwordFieldConfirm"
                    :error-message="errors[0]"
                    placeholder="Input Your Password"
                    @keyup.enter="onSubmit"
                    @click-append="isPasswordConfirmVisible = !isPasswordConfirmVisible"
                  />
                  <FormMessage />
                </FormItem>
              </FieldProvider>
            </FormObserver>
          </CardContent>

          <CardFooter class="flex justify-start items-center flex-col gap-3 pb-6">
            <Button
              size="full"
              @click="onSubmit"
            >
              Submit
            </Button>
            <p class="text-secondary text-sm">
              Already have an account ?
              <Button
                variant="link"
                class="p-0 text-sm"
                as-child
              >
                <NuxtLink to="/login">
                  Login
                </NuxtLink>
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
    <div class="hidden bg-muted lg:block">
      <img
        src="https://images.unsplash.com/photo-1670710028588-4e71498034cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FrZSUyMHN0b3JlfGVufDB8fDB8fHww"
        alt="Image"
        width="1920"
        class="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
</template>
