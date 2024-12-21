<script setup lang="ts">
import { toRef } from 'vue';

interface Theme {
    icon: string;
    value: string;
}

const colorMode = useColorMode();

const colorTheme = toRef(colorMode.value);



watch( colorTheme, ( value ) => {
    colorMode.preference = value    
} )

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
                <Icon
                    :name="currentTheme?.icon"
                    class="font-medium text-lg text-secondary" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup v-model="colorTheme">
                <DropdownMenuRadioItem
                    v-for="(dataTheme, index) in themes"
                    :key="index"
                    :value="dataTheme.value">
                    <div class="flex justify-center gap-3">
                        <Icon
                            :name="dataTheme.icon"
                            class="font-medium text-lg text-secondary" />
                        <span class="capitalize">{{ dataTheme.value }}</span>
                    </div>
                </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<style scoped></style>
