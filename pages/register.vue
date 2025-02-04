<script setup lang="ts">
import { useToast } from '~/components/ui/toast';
import { ToastAction } from '@/components/ui/toast';

definePageMeta({
    layout: 'blank',
    middleware: 'unauth',
});

const { icons } = useAppConfig();
const { toast } = useToast();
const router = useRouter();

const eyeIconOff = ref(false);
const eyeIconOffConfirm = ref(false);
const form = ref<UserValidation>();
const passwordConfirm = ref('');
const formAuth = reactive({
    name: '',
    email: '',
    password: '',
});

const passWordField = computed(() => (eyeIconOff.value ? 'text' : 'password'));
const passwordIcon = computed(() =>
    eyeIconOff.value ? icons.eyeIconOff : icons.eyeIcon
);
const passwordFieldConfirm = computed(() =>
    eyeIconOffConfirm.value ? 'text' : 'password'
);
const passwordConfirmIcon = computed(() =>
    eyeIconOffConfirm.value ? icons.eyeIconOff : icons.eyeIcon
);

const errorHandling = (error: any) => {
    toast({
        title: 'Error',
        description: error.data.message,
        variant: 'destructive',
        action: h(
            ToastAction,
            {
                altText: 'Try hello',
            },

            {
                default: () => 'Try again',
            }
        ),
    });
};

const onSubmit = async () => {
    try {
        const dataValid = await form.value?.validate();

        if (!dataValid?.valid) return;

        await $fetch('/api/auth/register', {
            method: 'POST',
            body: formAuth,
        });

        toast({
            title: 'Success',
            description: 'Register user has been successfully',
        });

        router.push('/login');
    } catch (error) {
        if (error) {
            errorHandling(error);
        }
        throw error;
    }
};
</script>

<template>
    <div class="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
        <div
            class="bg-background flex flex-col h-screen items-center justify-center">
            <div>
                <Card class="w-[349px]">
                    <CardHeader>
                        <Logo />
                        <CardDescription
                            class="text-secondary mt-3 items-center justify-center flex gap-2 text-center">
                            <span> Start Your Adventure from here </span>
                            <Icon name="noto:rocket" class="w-6"></Icon>
                        </CardDescription>
                    </CardHeader>

                    <CardContent class="pb-0">
                        <FormObserver ref="form">
                            <FieldProvider
                                v-slot="{ errors, field }"
                                name="name"
                                label="Name"
                                rules="required"
                                v-model="formAuth.name">
                                <FormItem class="">
                                    <FormControl
                                        label="Name"
                                        v-bind="field"
                                        @keyup.enter="onSubmit"
                                        :errorMessage="errors[0]"
                                        placeholder="Input Your Name" />
                                    <FormMessage />
                                </FormItem>
                            </FieldProvider>

                            <FieldProvider
                                v-slot="{ errors, field }"
                                name="email"
                                label="Email"
                                rules="required|email"
                                v-model="formAuth.email">
                                <FormItem class="">
                                    <FormControl
                                        label="Email"
                                        v-bind="field"
                                        @keyup.enter="onSubmit"
                                        :errorMessage="errors[0]"
                                        placeholder="Input Your Email" />
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
                                        placeholder="Input Your Password"
                                        @keyup.enter="onSubmit"
                                        @clickAppend="
                                            eyeIconOff = !eyeIconOff
                                        " />
                                    <FormMessage />
                                </FormItem>
                            </FieldProvider>

                            <FieldProvider
                                v-slot="{ errors, field }"
                                name="confirmpassword"
                                v-model="passwordConfirm"
                                label="Password"
                                rules="confirmed:@password">
                                <FormItem>
                                    <FormControl
                                        label="Confirm Password"
                                        v-bind="field"
                                        :appendIcon="passwordConfirmIcon"
                                        :type="passwordFieldConfirm"
                                        :errorMessage="errors[0]"
                                        placeholder="Input Your Password"
                                        @keyup.enter="onSubmit"
                                        @clickAppend="
                                            eyeIconOffConfirm =
                                                !eyeIconOffConfirm
                                        " />
                                    <FormMessage />
                                </FormItem>
                            </FieldProvider>
                        </FormObserver>
                    </CardContent>

                    <CardFooter
                        class="flex justify-start items-center flex-col gap-3 pb-6">
                        <Button size="full" @click="onSubmit"> Submit </Button>
                        <p class="text-secondary text-sm">
                            Already have an account ?
                            <Button variant="link" class="p-0 text-sm" as-child>
                                <NuxtLink to="/login"> Login </NuxtLink>
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

<style scoped></style>
