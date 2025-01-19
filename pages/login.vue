<script setup lang="ts">
import type { UserValidation } from '@/types/index';
// const { loggedIn, user, session, fetch, clear } = useUserSession();

definePageMeta({
    layout: 'blank',
});

const { icons } = useAppConfig();

const form = ref<UserValidation>();

const userName = ref('');
const password = ref('');
const eyeIconOff = ref(false);

const passWordField = computed(() => (eyeIconOff.value ? 'text' : 'password'));
const passwordIcon = computed(() =>
    eyeIconOff.value ? icons.eyeIconOff : icons.eyeIcon
);

const location = useBrowserLocation();
const url = useCookie('url');
const route = useRoute()

const onSubmit = async () => {
    form.value?.validate().then((res) => {
        console.log(res);

        url.value = `${route.path}`;

        window.location.href = `${location.value.origin}/api/auth/google`;
    });
};
</script>

<template>
    <div class="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
        <div
            class="bg-background flex flex-col h-screen items-center justify-center">
            <div class="">
                <Card class="w-full">
                    <CardHeader>
                        <Logo />
                        <CardDescription class="text-secondary mt-3">
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <FormObserver ref="form">
                            <FieldProvider
                                v-slot="{ errors, field }"
                                name="username"
                                v-model="userName"
                                label="Email"
                                rules="required|email">
                                <FormItem class="">
                                    <FormControl
                                        label="Email"
                                        v-bind="field"
                                        type="email"
                                        :errorMessage="errors[0]"
                                        placeholder="Input your Email" />
                                    <FormMessage />
                                </FormItem>
                            </FieldProvider>

                            <FieldProvider
                                v-slot="{ errors, field }"
                                name="password"
                                v-model="password"
                                label="Password"
                                rules="required">
                                <FormItem>
                                    <FormControl
                                        label="Password"
                                        v-bind="field"
                                        :appendIcon="passwordIcon"
                                        :type="passWordField"
                                        :errorMessage="errors[0]"
                                        placeholder="Input your Password"
                                        @clickAppend="
                                            eyeIconOff = !eyeIconOff
                                        " />
                                    <FormMessage />
                                </FormItem>
                            </FieldProvider>
                        </FormObserver>
                        <Button @click="onSubmit"> Submit </Button>
                    </CardContent>
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
