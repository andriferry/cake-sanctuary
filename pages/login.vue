<script setup lang="ts">
definePageMeta({
    layout: 'blank',
});
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

                            <span class="text-primary">
                                Cake Sanctuary
                            </span>
                        </CardTitle>
                        <CardDescription class="text-accent">
                            Deploy your new project in one-click.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>

            <!-- <div class="mx-auto px-4 grid container-lg gap-6">
                <div class="grid gap-2 text-center">
                    <h1 class="text-3xl font-bold">Login</h1>
                    <p class="text-balance  text-muted-foreground">
                        Enter your email below to login to your account
                    </p>
                </div>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Password</Label>
                            <a
                                href="/"
                                class="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </a>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" class="w-full"> Login </Button>
                    <Button variant="outline" class="w-full">
                        Login with Google
                    </Button>
                </div>
                <div class="mt-4 text-center text-sm">
                    Don't have an account?
                    <a href="#" class="underline"> Sign up </a>
                </div>
            </div> -->
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
