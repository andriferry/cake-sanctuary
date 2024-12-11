<script setup lang="ts">
import type { PrivateFormContext } from 'vee-validate';
definePageMeta({
    layout: 'blank',
});

const form = ref<PrivateFormContext>();

const userName = ref('');
const password = ref('');

const onSubmit = async () => {
    form.value?.validate().then((res) => {
        console.log(res);
    });
};
</script>

<template>
    <div class="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
        <div
            class="flex bg-background flex-col h-screen items-center justify-center">
            <div class="mx-auto container-lg">
                <Card class="w-full">
                    <CardHeader>
                        <CardTitle
                            class="flex text-primary items-center gap-3 text-xl">
                            <Icon
                                name="file-icons:cakephp"
                                class="text-4xl text-primary" />

                            <span class="text-primary"> Cake Sanctuary </span>
                        </CardTitle>
                        <CardDescription class="text-secondary">
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
                                        :errorMessage="errors"
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
                                        type="password"
                                        :errorMessage="errors"
                                        placeholder="Input your Password" />
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
