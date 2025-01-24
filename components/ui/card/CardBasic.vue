<script setup lang="ts">
import { type CardVariant } from '.';
import type { HTMLAttributes } from 'vue';

interface Props {
    variant?: CardVariant['variant'];
    class?: HTMLAttributes['class'];
    title?: string;
    subtitle?: string;
}

withDefaults( defineProps<Props>(), {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    variant: 'default',
    class: ''
})
</script>

<template>
    <Card :title="title" :class="class" :variant="variant" :subtitle="subtitle">
        <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            consequatur tempora quia repudiandae incidunt. Dolorum facere a
            mollitia blanditiis sed, minus harum, alias suscipit possimus
            voluptates, atque ullam illum unde.
        </CardContent>

        <CardFooter>
            <Button> Card Footer </Button>
        </CardFooter>
    </Card>
</template>

<style scoped></style>
