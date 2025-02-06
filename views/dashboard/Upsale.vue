<script setup lang="ts">
import {upsaleData} from "@/@fake/data"
const upsale = ref(upsaleData);
</script>

<template>
    <Card title="Today's upsale" class="h-full">
        <CardContent class="flex flex-col gap-5">
            <div
                v-for="(data, index) in upsale"
                :key="index"
                class="flex items-center gap-4">
                <div class="flex items-center p-2 bg-accent rounded-md">
                    <Icon :name="data.icon" class="text-3xl"/>
                </div>

                <div class="">
                    <p class="font-semibold text-md">
                        {{ data.title }}
                    </p>
                    <p class="text-muted-foreground text-xs font-medium">
                        Order: {{ data.amount }}
                    </p>
                </div>
            </div>
        </CardContent>
    </Card>
</template>

<style scoped></style>
