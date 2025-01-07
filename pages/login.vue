<script setup lang="ts">
import type { UserValidation } from '@/types/index';
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

const onSubmit = async () => {
    form.value?.validate().then((res) => {
        console.log(res);
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
                src=""
                alt="Image"
                width="1920"
                height="1080"
                class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
        </div>
    </div>
</template>
