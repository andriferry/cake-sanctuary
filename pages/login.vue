<script setup lang="ts">
definePageMeta({
    layout: 'blank',
    middleware: 'unauth',
});

const { $toast } = useNuxtApp();
const { fetch: fetchUserSession, user } = useUserSession();
const { isPasswordVisible, passWordField, passwordIcon } = useUtils();

const router = useRouter();

const form = ref<UserValidation>();

const formAuth = reactive({
    email: 'demo@mail.com',
    password: 'demo123456789',
});

const location = useBrowserLocation();
const url = useCookie('url');
const route = useRoute();

const errorHandling = (error: any) => {
    if (error.data.statusCode === 401) {
        $toast.error('Error', {
            description: error.data.message,
        });
    } else {
        let allError = JSON.parse(error.data.message);

        if (allError.issues.length > 0) {
            allError.issues.forEach((item: any) => {
                $toast.error('Error', {
                    description: item.message,
                });
            });
        }
    }
};

const onSubmit = async () => {
    try {
        const dataValid = await form.value?.validate();

        if (!dataValid?.valid) return;

        await $fetch('/api/auth/login', {
            method: 'POST',
            body: formAuth,
        });

        await fetchUserSession();

        router.push('/dashboard').then(() => {
            $toast('Success', {
                description: `Hello, ${user.value?.name} Welcome Back`,
            });
        });
    } catch (error) {
        if (error) {
            errorHandling(error);
        }

        throw error;
    }
};

const loginWithSocial = async (service: 'google') => {
    url.value = `${route.path}`;

    window.location.href = `${location.value.origin}/api/auth/${service}`;
};
</script>

<template>
    <div class="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
        <div
            class="bg-background flex flex-col h-screen items-center justify-center">
            <div class="">
                <Card class="w-[349px]">
                    <CardHeader>
                        <Logo />

                        <CardDescription
                            class="text-secondary mt-3 text-center">
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>

                    <CardContent class="pb-0">
                        <FormObserver ref="form">
                            <FieldProvider
                                v-slot="{ errors, field }"
                                name="username"
                                v-model="formAuth.email"
                                label="Email"
                                rules="required|email">
                                <FormItem class="">
                                    <FormControl
                                        label="Email"
                                        v-bind="field"
                                        type="email"
                                        @keyup.enter="onSubmit"
                                        :errorMessage="errors[0]"
                                        placeholder="Input your Email" />
                                    <FormMessage />
                                </FormItem>
                            </FieldProvider>

                            <FieldProvider
                                v-slot="{ errors, field }"
                                name="password"
                                v-model="formAuth.password"
                                label="Password"
                                rules="required|min:8">
                                <FormItem>
                                    <FormControl
                                        label="Password"
                                        v-bind="field"
                                        :appendIcon="passwordIcon"
                                        :type="passWordField"
                                        :errorMessage="errors[0]"
                                        placeholder="Input your Password"
                                        @keyup.enter="onSubmit"
                                        hint="*at least 8 characters"
                                        @clickAppend="
                                            isPasswordVisible =
                                                !isPasswordVisible
                                        " />
                                    <FormMessage />
                                </FormItem>
                            </FieldProvider>
                        </FormObserver>
                    </CardContent>

                    <CardFooter
                        class="flex justify-start items-center flex-col gap-3 pb-6">
                        <Button size="full" @click="onSubmit"> Submit </Button>

                        <Button
                            size="full"
                            variant="outline"
                            prependIcon="tabler:brand-google-filled"
                            @click="loginWithSocial('google')">
                            Login With Google
                        </Button>

                        <p class="text-secondary text-sm">
                            New on our platform ?
                            <Button variant="link" class="p-0 text-sm" as-child>
                                <NuxtLink to="/register">
                                    Create an account
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
                class="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale" />
        </div>
    </div>
</template>
