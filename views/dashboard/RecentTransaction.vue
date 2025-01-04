<script setup lang="ts">
import { useOffsetPagination } from '@vueuse/core';
const invoices = ref([
    {
        invoice: 'INV001',
        paymentStatus: 'Paid',
        totalAmount: '$250.00',
        paymentMethod: 'Credit Card',
    },
    {
        invoice: 'INV002',
        paymentStatus: 'Pending',
        totalAmount: '$150.00',
        paymentMethod: 'PayPal',
    },
    {
        invoice: 'INV003',
        paymentStatus: 'Unpaid',
        totalAmount: '$350.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        invoice: 'INV004',
        paymentStatus: 'Paid',
        totalAmount: '$450.00',
        paymentMethod: 'Credit Card',
    },
    {
        invoice: 'INV005',
        paymentStatus: 'Paid',
        totalAmount: '$550.00',
        paymentMethod: 'PayPal',
    },
    {
        invoice: 'INV006',
        paymentStatus: 'Pending',
        totalAmount: '$200.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        invoice: 'INV007',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
    },
]);

interface PaginationFetch {
    currentPage: number;
    currentPageSize: number;
}

const fetchData = ({ currentPage, currentPageSize }: PaginationFetch) => {
    console.log(currentPage);
};

const {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next,
} = useOffsetPagination({
    total: invoices.value.length,
    page: 1,
    pageSize: 10,
    onPageChange: fetchData,
    onPageSizeChange: fetchData,
});
</script>

<template>
    <Card title="Recent transaction" class="h-full">
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead class="w-[100px]"> Order ID </TableHead>
                        <TableHead>Receipt No</TableHead>
                        <TableHead>Menu</TableHead>
                        <TableHead class=""> Collected/Cashier </TableHead>
                        <TableHead class=""> Date & Time </TableHead>
                        <TableHead class=""> Payment method </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="(invoice, index) in invoices" :key="index">
                        <TableCell class="font-medium">
                            {{ invoice.invoice }}
                        </TableCell>
                        <TableCell>{{ invoice.paymentStatus }}</TableCell>
                        <TableCell>{{ invoice.paymentMethod }}</TableCell>
                        <TableCell class="">
                            {{ invoice.totalAmount }}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>

        <CardFooter class="justify-end">
            <!-- {{ currentPage }} {{ currentPageSize }}  -->
            {{ pageCount }}

            <div class="w-full flex items-center flex-wrap gap-3">
                <Button @click="prev" variant="outline" size="icon">
                    <ArrowLeftIcon />
                </Button>
                <Button
                    v-for="index in currentPageSize"
                    :key="index"
                    class="w-9 h-9 p-0">
                    {{ index }}
                </Button>
                <Button variant="outline" @click="next" size="icon">
                    <ArrowRightIcon />
                </Button>
            </div>

            <!-- <Button
                class="w-9 h-9 p-0"
                :variant="item.value === page ? 'default' : 'outline'">
                {{ item.value }}
            </Button> -->
            <!-- <Pagination
                v-slot="{ page }"
                :total="100"
                :sibling-count="10"
                show-edges
                :default-page="1">
                <PaginationList
                    v-slot="{ items }"
                    class="flex items-center gap-1">
                    <PaginationFirst />
                    <PaginationPrev />

                    <template v-for="(item, index) in items">
                        <PaginationListItem
                            v-if="item.type === 'page'"
                            :key="index"
                            :value="item.value"
                            as-child>
                            <Button
                                class="w-9 h-9 p-0"
                                :variant="
                                    item.value === page ? 'default' : 'outline'
                                ">
                                {{ item.value }}
                            </Button>
                        </PaginationListItem>
                        <PaginationEllipsis
                            v-else
                            :key="item.type"
                            :index="index" />
                    </template>

                    <PaginationNext />
                    <PaginationLast />
                </PaginationList>
            </Pagination> -->
        </CardFooter>
    </Card>
</template>
