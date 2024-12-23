<script setup lang="ts">
import { toRef } from 'vue';

interface Theme {
    icon: string;
    value: string;
}

const colorMode = useColorMode();

const colorTheme = toRef(colorMode.value);

watch(colorTheme, (value) => {
    colorMode.preference = value;
});

const themes = ref<Theme[]>([
    {
        icon: 'tabler:moon-stars',
        value: 'dark',
    },
    {
        icon: 'tabler:sun-high',
        value: 'light',
    },
    {
        icon: 'tabler:device-desktop',
        value: 'system',
    },
]);

const currentTheme = computed<Theme>(() => {
    let dataTheme = themes.value.find(
        (data: Theme) => data.value === colorMode.value
    );

    return dataTheme ? dataTheme : { icon: '', value: '' };
});
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="plain" size="icon">
                <Icon name="tabler:bell" class="text-secondary" />

                <Indicator pingAnimate content="5" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="text-secondary w-96">
            <Card variant="flat">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription
                        >Deploy your new project in one-click.</CardDescription
                    >
                </CardHeader>
                <CardContent>
                    <form>
                        <div class="grid items-center w-full gap-4">
                            <div class="flex flex-col space-y-1.5">
                                <Label for="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Name of your project" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter class="flex justify-between px-6 pb-6">
                    <Button variant="outline"> Cancel </Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
            <!-- <DropdownMenuLabel class="flex justify-between items-center">
                <span>Notifications</span>

                <Badge>5 New</Badge>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
                <DropdownMenuItem v-for="data in 5" :key="data" class="">
                    <article class="prose px-2 prose-headings:!m-0 w-full text-inherit">
                        <div class="flex w-full justify-between items-center">
                            <div class="flex flex-col justify-start items-start">
                                <h4 class="text-secondary">Congrats New orders #3566</h4>
                                <span class="truncate text-sm font-light text-secondary/70">
                                    There new orders please check it
                                </span>
                            </div>
                    
                            <span class="text-sm font-light">Today</span>
                        </div>
                    </article>
                </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />


            <DropdownMenuGroup>
                <DropdownMenuItem class="">
                    <Button>Read All Notifications</Button>
                </DropdownMenuItem>
            </DropdownMenuGroup> -->
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<style scoped></style>
